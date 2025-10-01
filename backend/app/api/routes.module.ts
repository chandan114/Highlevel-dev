import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { TestRouteModule } from './testRoute/testRoute.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [ApplicationModule, TestRouteModule, WalletModule],
})
export class RoutesModule {
  constructor() {}
}
