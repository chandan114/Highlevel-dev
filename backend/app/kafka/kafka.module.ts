import { DynamicModule, Module } from '@nestjs/common';
import { DynamicModuleOptionType } from 'app/common/common.types';
import { KafkaConsumerService } from './core-services/kafka-consumer.service';
import { KafkaProducerService } from './core-services/kafka-producer.service';
import { KafkaWorkerEnumServiceMapping } from './mappings/kafka-consumer-worker-service.mapping';

@Module({
  providers: [KafkaProducerService],
  exports: [KafkaProducerService],
})
export class KafkaModule {
  static register(option: DynamicModuleOptionType): DynamicModule {
    if (option.env === 'local') {
      return {
        module: KafkaModule,
        providers: [],
      };
    }
    const data: DynamicModule = {
      module: KafkaModule,
    };
    if (option.type === 'server') {
      return data;
    } else if (option.type === 'cron') {
      return data;
    } else if (option.type === 'worker') {
      if (KafkaWorkerEnumServiceMapping[option.name]) {
        data['providers'] = [
          KafkaConsumerService,
          KafkaWorkerEnumServiceMapping[option.name],
        ];
        data['exports'] = [KafkaWorkerEnumServiceMapping[option.name]];
      }
      return data;
    }
  }
}
