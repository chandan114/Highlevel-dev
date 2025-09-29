import { Controller, Post, Get, Body, Param, Query, HttpStatus, HttpCode } from '@nestjs/common';
import { WalletService } from '../services/wallet.service';
import { SetupWalletDto } from '../dto/setup-wallet.dto';
import { TransactWalletDto } from '../dto/transact-wallet.dto';
import { GetTransactionsDto } from '../dto/get-transactions.dto';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('setup')
  @HttpCode(HttpStatus.OK)
  async setupWallet(@Body() setupWalletDto: SetupWalletDto) {
    return this.walletService.setupWallet(setupWalletDto);
  }

  @Post('transact/:walletId')
  @HttpCode(HttpStatus.OK)
  async transactWallet(
    @Param('walletId') walletId: string,
    @Body() transactWalletDto: TransactWalletDto,
  ) {
    return this.walletService.transactWallet(walletId, transactWalletDto);
  }

  @Get('transactions')
  @HttpCode(HttpStatus.OK)
  async getTransactions(@Query() getTransactionsDto: GetTransactionsDto) {
    return this.walletService.getTransactions(getTransactionsDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getWallet(@Param('id') id: string) {
    return this.walletService.getWallet(id);
  }
}
