import { DynamicModule, Module } from '@nestjs/common';
import { DynamicModuleOptionType } from 'app/common/common.types';
import { CronEnumServiceMapping } from './mappings/cron-enum-service.mapping';

@Module({})
// You need to import all the Module's Which Services You are importing here
export class CronModule {
  static register(option: DynamicModuleOptionType): DynamicModule {
    if (option.env === 'local') {
      // When env is Local we make sure that all the Cron Services are return to Providers
      return {
        module: CronModule,
        providers: [],
      };
    }
    const data: DynamicModule = {
      module: CronModule,
    };
    if (option.type === 'server') {
      return data;
    } else if (option.type === 'worker') {
      return data;
    } else if (option.type === 'cron') {
      if (!CronEnumServiceMapping[option.name]) {
        throw new Error('No Service is Initialized on this Cron Name');
      }
      data['providers'] = CronEnumServiceMapping[option.name];
      return data;
    }
  }
}
