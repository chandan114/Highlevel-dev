import { MiddlewareConsumer, Module } from '@nestjs/common';
import { FdkService } from 'app/fdk/fdk.service';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [ApplicationModule],
  providers: [],
})
export class ApplicationProxyModule {
  constructor(private readonly fdkService: FdkService) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(this.fdkService.fdkExtension.applicationProxyRoutes)
      .forRoutes('proxyRoutes', 'proxyRoutes/(.*)');
    consumer
      .apply(this.fdkService.fdkExtension.apiRoutes)
      .forRoutes('apiRoutes', 'apiRoutes/(.*)');
  }
}
