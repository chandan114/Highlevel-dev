import { sleep } from 'app/common/utils/time.utils';
import {
  Consumer,
  ConsumerConfig,
  ConsumerSubscribeTopics,
  Kafka,
  KafkaMessage,
} from 'kafkajs';
import * as retry from 'async-retry';
import { IConsumer } from '../interfaces/kafka-consumer.interface';
import { kafkaOptions } from '../kafka.config';
import { Logger } from '@nestjs/common';

export class kafkajsConsumer implements IConsumer {
  private readonly kafka: Kafka;
  private readonly consumer: Consumer;
  private readonly logger: Logger;

  constructor(
    private readonly topic: ConsumerSubscribeTopics,
    config: ConsumerConfig,
  ) {
    this.kafka = new Kafka(kafkaOptions);
    this.consumer = this.kafka.consumer(config);
    this.logger = new Logger(`${topic.topics}-${config.groupId}`);
  }

  /**
   * If the connection to Kafka fails, wait 5 seconds and try again
   */
  async connect() {
    try {
      await this.consumer.connect();
    } catch (err) {
      this.logger.error('Failed to connect to Kafka.', err);
      await sleep(5000);
      await this.connect();
    }
  }

  /**
   * It disconnects the consumer from the Kafka cluster
   */
  async disconnect() {
    await this.consumer.disconnect();
  }

  /**
   * It subscribes to the topic, and then runs a function that will be called for each message received
   * @param onMessage - (message: KafkaMessage) => Promise<void>
   */
  async consume(onMessage: (message: KafkaMessage) => Promise<void>) {
    await this.consumer.subscribe(this.topic);
    await this.consumer.run({
      eachMessage: async ({ message, topic }) => {
        this.logger.log(`Processing message for topic ${topic}`);
        const { value } = message;
        const buff_json = JSON.parse(value.toString());
        try {
          await retry(async () => onMessage(buff_json), {
            retries: 3,
            onRetry: (error, attempt) =>
              this.logger.error(
                `Error consuming message, executing retry ${attempt}/3...`,
                error,
              ),
          });
        } catch (err) {
          this.logger.error('Error consuming message', err);
        }
      },
    });
  }
}
