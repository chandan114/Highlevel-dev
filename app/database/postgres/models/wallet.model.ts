import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, HasMany, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Transaction } from './transaction.model';

@Table({
  tableName: 'wallets',
  timestamps: true,
})
export class Wallet extends Model<Wallet> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

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
  name: string;

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

  @HasMany(() => Transaction)
  transactions: Transaction[];
}
