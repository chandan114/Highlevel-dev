import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RedisModule } from '@nestjs-modules/ioredis';
import { HealthService } from './services/health.service';

@Module({
  imports: [
    SequelizeModule,
    RedisModule,
  ],
  providers: [HealthService],
  exports: [HealthService],
})
export class HealthModule {}
