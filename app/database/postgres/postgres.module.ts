import { Inject, Module } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { Sequelize } from 'sequelize-typescript';
import { SequelizeModule } from '@nestjs/sequelize';
import { postgresConfig } from './postgres.config';
import { Wallet } from './models/wallet.model';
import { Transaction } from './models/transaction.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...postgresConfig,
      models: [Wallet, Transaction],
    }),
  ],
})
export class PostgresModule {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly sequelize: Sequelize,
  ) {
    this.sequelize.addHook('afterConnect', () => {
      logger.info('Connected to postgres database!');
    });

    this.sequelize.addHook('afterDisconnect', () => {
      logger.info('Disconnected to postgres database!');
    });
  }
}
