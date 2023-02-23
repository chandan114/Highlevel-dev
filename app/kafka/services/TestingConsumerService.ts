import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { HealthService } from 'app/health/services/health.service';
import { Message } from 'kafkajs';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { KafkaConsumerService } from '../core-services/kafka-consumer.service';
import { KafkaConsumerGroupIdEnum, KafkaTopicEnums } from '../enums';

@Injectable()
export class TestingConsumerService implements OnModuleInit {
  constructor(
    private readonly kafkaConsumerService: KafkaConsumerService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly healthService: HealthService,
  ) {}
  async onModuleInit() {
    await this.healthService.startHealthCheckDaemon();
    await this.kafkaConsumerService.consume({
      topic: { topics: [KafkaTopicEnums.TEST_KAFKA_WORKER] },
      config: { groupId: KafkaConsumerGroupIdEnum.TEST_KAFKA_WORKER },
      onMessage: async (message: Message) => {
        await this.testingFunction(message);
      },
    });
  }

  private async testingFunction(message: Message) {
    this.logger.info(`${message} Message Recieved is This`);
  }
}
