import { Logger } from '@nestjs/common';
import { sleep } from 'app/common/utils/time.utils';
import { Kafka, Producer } from 'kafkajs';
import { IProducer } from '../interfaces/kafka-producer.interface';
import { kafkaOptions } from '../kafka.config';

export class kafkajsProducer implements IProducer {
  private readonly kafka: Kafka;
  private readonly producer: Producer;
  private readonly logger: Logger;

  constructor(private readonly topic: string) {
    this.kafka = new Kafka(kafkaOptions);
    this.producer = this.kafka.producer();
    this.logger = new Logger(topic);

    this.producer.on(this.producer.events.CONNECT, (e: any) => {
      Logger.log(`Kafka is connected ${e} with topic ${topic}`);
    });

    this.producer.on(this.producer.events.DISCONNECT, (e: any) => {
      Logger.error(e);
    });

    this.producer.on(this.producer.events.REQUEST_TIMEOUT, (e: any) => {
      Logger.error(e);
    });
  }
  async connect() {
    try {
      await this.producer.connect();
    } catch (err) {
      this.logger.error(`Failed to connect to Kafka ${err}`);
      await sleep(5000);
      await this.connect();
    }
  }
  async disconnect() {
    await this.producer.disconnect();
  }
  async produce(message: any) {
    await this.producer.send({ topic: this.topic, messages: [message] });
  }
}
