import { IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';
import { Transform } from 'class-transformer';

export class TransactWalletDto {
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 4 })
  @Transform(({ value }) => parseFloat(parseFloat(value).toFixed(4)))
  amount: number;

  @IsNotEmpty()
  @IsString()
  description: string;
}
