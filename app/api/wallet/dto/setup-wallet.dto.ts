import { IsNotEmpty, IsNumber, IsString, Min } from '@nestjs/class-validator';
import { Transform } from 'class-transformer';

export class SetupWalletDto {
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 4 })
  @Min(0)
  @Transform(({ value }) => parseFloat(parseFloat(value).toFixed(4)))
  balance: number;

  @IsNotEmpty()
  @IsString()
  name: string;
}
