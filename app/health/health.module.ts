import { Module } from '@nestjs/common';
import { HealthService } from './services/health.service';

@Module({
  providers: [HealthService],
  exports: [HealthService],
})
export class HealthModule {}
