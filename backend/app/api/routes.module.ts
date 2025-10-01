import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TestRouteModule } from './testRoute/testRoute.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [TestRouteModule, WalletModule],
})
export class RoutesModule {
  constructor() {}
}
