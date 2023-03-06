import { Module } from '@nestjs/common';
import { ApplicationTestController } from './controllers/test.controller';

@Module({
  controllers: [ApplicationTestController],
})
export class TestRouteModule {}
