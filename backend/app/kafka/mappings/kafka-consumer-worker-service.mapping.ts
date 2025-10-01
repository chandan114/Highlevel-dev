import { Provider } from '@nestjs/common';
import { KafkaWorkerEnum } from '../enums';
import { TestingConsumerService } from '../services/TestingConsumerService';

export const KafkaWorkerEnumServiceMapping: {
  [key in KafkaWorkerEnum]: Provider;
} = {
  [KafkaWorkerEnum.TEST_KAFKA_WORKER]: TestingConsumerService,
};
