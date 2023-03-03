import { Global, Module } from '@nestjs/common';
import { FdkService } from './fdk.service';

@Global()
@Module({
  providers: [FdkService],
  exports: [FdkService],
})
export class FdkModule {}
