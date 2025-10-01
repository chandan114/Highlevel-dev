import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { WalletController } from './controllers/wallet.controller';
import { WalletService } from './services/wallet.service';
import { Wallet } from 'app/database/postgres/models/wallet.model';
import { Transaction } from 'app/database/postgres/models/transaction.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Wallet, Transaction]),
  ],
  controllers: [WalletController],
  providers: [WalletService],
  exports: [WalletService],
})
export class WalletModule {}
