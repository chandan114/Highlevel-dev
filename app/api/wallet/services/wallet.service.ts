import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/sequelize';
import { Sequelize, Transaction as SequelizeTransaction } from 'sequelize';
import { Wallet } from 'app/database/postgres/models/wallet.model';
import { Transaction, TransactionType } from 'app/database/postgres/models/transaction.model';
import { SetupWalletDto } from '../dto/setup-wallet.dto';
import { TransactWalletDto } from '../dto/transact-wallet.dto';
import { GetTransactionsDto } from '../dto/get-transactions.dto';

@Injectable()
export class WalletService {
  constructor(
    @InjectModel(Wallet) private walletModel: typeof Wallet,
    @InjectModel(Transaction) private transactionModel: typeof Transaction,
    @InjectConnection() private sequelize: Sequelize,
  ) {}

  async setupWallet(setupWalletDto: SetupWalletDto) {
    // Use database transaction to ensure atomicity
    const dbTransaction = await this.sequelize.transaction();
    
    try {
      // Ensure balance is properly formatted to 4 decimal places
      const balance = parseFloat(setupWalletDto.balance.toFixed(4));
      
      const wallet = await this.walletModel.create({
        balance: balance,
        name: setupWalletDto.name,
      }, { transaction: dbTransaction });

      // Create initial transaction record
      const transaction = await this.transactionModel.create({
        walletId: wallet.id,
        amount: balance,
        balance: balance,
        description: 'Setup',
        type: TransactionType.CREDIT,
      }, { transaction: dbTransaction });

      await dbTransaction.commit();

      return {
        id: wallet.id.toString(),
        balance: wallet.balance,
        transactionId: transaction.id.toString(),
        name: wallet.name,
        date: wallet.createdAt,
      };
    } catch (error) {
      await dbTransaction.rollback();
      throw error;
    }
  }

  async transactWallet(walletId: string, transactWalletDto: TransactWalletDto) {
    const walletIdNum = parseInt(walletId);
    if (isNaN(walletIdNum)) {
      throw new BadRequestException('Invalid wallet ID');
    }

    // Use database transaction with row-level locking to prevent race conditions
    const dbTransaction = await this.sequelize.transaction();
    
    try {
      // Lock the wallet row for update to prevent race conditions
      const wallet = await this.walletModel.findByPk(walletIdNum, {
        lock: true,
        transaction: dbTransaction,
      });
      
      if (!wallet) {
        await dbTransaction.rollback();
        throw new NotFoundException('Wallet not found');
      }

      // Ensure amount is properly formatted to 4 decimal places
      const amount = parseFloat(transactWalletDto.amount.toFixed(4));
      const newBalance = parseFloat((wallet.balance + amount).toFixed(4));
      
      if (newBalance < 0) {
        await dbTransaction.rollback();
        throw new BadRequestException('Insufficient balance');
      }

      // Update wallet balance within transaction
      await wallet.update({ balance: newBalance }, { transaction: dbTransaction });

      // Create transaction record within the same transaction
      const transaction = await this.transactionModel.create({
        walletId: wallet.id,
        amount: amount,
        balance: newBalance,
        description: transactWalletDto.description,
        type: amount >= 0 ? TransactionType.CREDIT : TransactionType.DEBIT,
      }, { transaction: dbTransaction });

      await dbTransaction.commit();

      return {
        balance: newBalance,
        transactionId: transaction.id.toString(),
      };
    } catch (error) {
      await dbTransaction.rollback();
      throw error;
    }
  }

  async getTransactions(getTransactionsDto: GetTransactionsDto) {
    const walletIdNum = parseInt(getTransactionsDto.walletId);
    if (isNaN(walletIdNum)) {
      throw new BadRequestException('Invalid wallet ID');
    }

    const wallet = await this.walletModel.findByPk(walletIdNum);
    if (!wallet) {
      throw new NotFoundException('Wallet not found');
    }

    const transactions = await this.transactionModel.findAll({
      where: { walletId: walletIdNum },
      order: [['createdAt', 'DESC']],
      offset: getTransactionsDto.skip,
      limit: getTransactionsDto.limit,
    });

    return transactions.map(transaction => ({
      id: transaction.id.toString(),
      walletId: transaction.walletId.toString(),
      amount: transaction.amount,
      balance: transaction.balance,
      description: transaction.description,
      date: transaction.createdAt,
      type: transaction.type,
    }));
  }

  async getWallet(walletId: string) {
    const walletIdNum = parseInt(walletId);
    if (isNaN(walletIdNum)) {
      throw new BadRequestException('Invalid wallet ID');
    }

    const wallet = await this.walletModel.findByPk(walletIdNum);
    if (!wallet) {
      throw new NotFoundException('Wallet not found');
    }

    return {
      id: wallet.id.toString(),
      balance: wallet.balance,
      name: wallet.name,
      date: wallet.createdAt,
    };
  }
}
