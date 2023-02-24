import { DynamicModule, Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { AppService } from './app.service';
import { DynamicModuleOptionType } from './common/common.types';
import { winstonOptions } from './common/logger';
import { CronModule } from './cron/cron.module';
import { MongoModule } from './database/mongo/mongo.module';
import { RedisCacheModule } from './database/redis/redis.module';
import { KafkaModule } from './kafka/kafka.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppInterceptor } from './app.interceptor';
import { AppController } from './app.controller';
import { HealthModule } from './health/health.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    RedisCacheModule,
    MongoModule,
    WinstonModule.forRoot(winstonOptions),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, './../', 'dist'),
    }),
    HealthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AppInterceptor,
    },
  ],
})
export class AppModule {
  static register(option: DynamicModuleOptionType): DynamicModule {
    return {
      module: AppModule,
      imports: [CronModule.register(option), KafkaModule.register(option)],
    };
  }
}
