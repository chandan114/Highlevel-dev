import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { InjectRedis, RedisModule, Redis } from '@nestjs-modules/ioredis';
import { redisOptions } from 'app/database/redis.config';

@Module({
  imports: [RedisModule.forRoot({ config: redisOptions })],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisCacheModule {
  constructor(@InjectRedis() private readonly redis: Redis) {
    redis.on('connect', () => {
      console.log(`Redis connected.`);
    });
    redis.on('ready', () => {
      console.log(`Redis is ready`);
    });
    redis.on('error', () => {
      console.log(`Redis got error`);
    });
    redis.on('close', () => {
      console.log(`Redis is closed`);
    });
    redis.on('reconnecting', () => {
      console.log(`Redis got error`);
    });
    redis.on('reconnecting', () => {
      console.log(`Redis is ended`);
    });
  }
}
