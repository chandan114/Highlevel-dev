import { Injectable, OnModuleInit } from '@nestjs/common';
import { Message } from 'kafkajs';
import { kafkajsProducer } from '../classes/kafkajs.producer.class';
import { KafkaTopicEnums } from '../enums';
import { IProducer } from '../interfaces/kafka-producer.interface';

@Injectable()
export class KafkaProducerService implements OnModuleInit {
  private readonly producers = new Map<string, IProducer>();

  async onModuleInit() {
    for (const [, topic] of Object.entries(KafkaTopicEnums)) {
      await this.getProducer(topic);
    }
  }

  async produce(topic: string, message: Message) {
    const producer = await this.getProducer(topic);
    await producer.produce(message);
  }
  private async getProducer(topic: string) {
    let producer = this.producers.get(topic);
    if (!producer) {
      producer = new kafkajsProducer(topic);
      await producer.connect();
      this.producers.set(topic, producer);
    }
    return producer;
  }

  async onApplicationShutdown() {
    for (const producer of this.producers.values()) {
      await producer.disconnect();
    }
  }
}
