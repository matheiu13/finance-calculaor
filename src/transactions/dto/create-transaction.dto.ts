import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  expenses: number;
}
