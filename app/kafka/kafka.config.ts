import { config } from 'app/common/config';
import { KafkaConfig } from 'kafkajs';

export const kafkaOptions: KafkaConfig = {
  clientId: 'cart-order-proxy',
  brokers: config.kafka.brokers.split(','),
};
