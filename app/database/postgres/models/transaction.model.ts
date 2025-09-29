import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Wallet } from './wallet.model';

export enum TransactionType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
}

@Table({
  tableName: 'transactions',
  timestamps: true,
})
export class Transaction extends Model<Transaction> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => Wallet)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  walletId: number;

  @Column({
    type: DataType.DECIMAL(10, 4),
    allowNull: false,
    get() {
      const value = this.getDataValue('amount');
      return value ? parseFloat(value) : 0;
    },
    set(value: number) {
      this.setDataValue('amount', parseFloat(value.toFixed(4)));
    },
  })
  amount: number;

  @Column({
    type: DataType.DECIMAL(10, 4),
    allowNull: false,
    validate: {
      min: 0,
    },
    get() {
      const value = this.getDataValue('balance');
      return value ? parseFloat(value) : 0;
    },
    set(value: number) {
      this.setDataValue('balance', parseFloat(value.toFixed(4)));
    },
  })
  balance: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.ENUM('CREDIT', 'DEBIT'),
    allowNull: false,
  })
  type: TransactionType;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createdAt: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  updatedAt: Date;

  @BelongsTo(() => Wallet)
  wallet: Wallet;
}
