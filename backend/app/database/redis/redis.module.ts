import { Inject, Module } from '@nestjs/common';
import { InjectRedis, RedisModule } from '@nestjs-modules/ioredis';
import { redisOptions } from 'app/database/redis/redis.config';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Module({
  imports: [RedisModule.forRoot({ config: redisOptions })],
  providers: [],
  exports: [],
})
export class RedisCacheModule {
  constructor(
    @InjectRedis() private readonly redis: any,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {
    redis.on('connect', () => {
      this.logger.info(`Redis connected.`);
    });
    redis.on('ready', () => {
      this.logger.info(`Redis is ready`);
    });
    redis.on('error', () => {
      this.logger.error(`Redis got error`);
    });
    redis.on('close', () => {
      this.logger.warn(`Redis is closed`);
    });
    redis.on('reconnecting', () => {
      this.logger.error(`Redis got error`);
    });
    redis.on('reconnecting', () => {
      this.logger.info(`Redis is ended`);
    });
  }
}
