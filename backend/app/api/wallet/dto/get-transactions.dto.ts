import { IsNotEmpty, IsString, IsOptional, IsNumber, Min } from '@nestjs/class-validator';
import { Transform } from 'class-transformer';

export class GetTransactionsDto {
  @IsNotEmpty()
  @IsString()
  walletId: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Transform(({ value }) => value ? parseInt(value) : 0)
  skip?: number = 0;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Transform(({ value }) => value ? parseInt(value) : 10)
  limit?: number = 10;
}
