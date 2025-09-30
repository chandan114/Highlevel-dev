import { IsNotEmpty, IsNumber, IsString, IsEnum } from '@nestjs/class-validator';
import { Transform } from 'class-transformer';

export enum TransactionType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
}

export class TransactWalletDto {
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 4 })
  @Transform(({ value }) => parseFloat(parseFloat(value).toFixed(4)))
  amount: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(TransactionType)
  type: TransactionType;
}
