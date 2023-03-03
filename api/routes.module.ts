import { MiddlewareConsumer, Module } from '@nestjs/common';
import { FdkService } from 'app/fdk/fdk.service';
import { ApplicationModule } from './application/application.module';
import { TestRouteModule } from './testRoute/testRoute.module';

@Module({
  imports: [ApplicationModule, TestRouteModule],
})
export class RoutesModule {
  constructor(private readonly fdkService: FdkService) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(this.fdkService.fdkExtension.applicationProxyRoutes)
      .forRoutes('api/proxy', 'api/proxy/(.*)');
    consumer
      .apply(this.fdkService.fdkExtension.apiRoutes)
      .exclude('api/proxy', '/api/proxy/(.*)')
      .forRoutes('/api', '/api/(.*)');
  }
}
