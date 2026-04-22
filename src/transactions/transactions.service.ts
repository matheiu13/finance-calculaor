import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTransactionDto: CreateTransactionDto) {
    return await this.prisma.transactions.create({
      data: createTransactionDto,
    });
  }

  async findAll() {
    return await this.prisma.transactions.findMany();
  }

  async findOne(id: number) {
    const transaction = await this.prisma.transactions.findUnique({
      where: { id },
    });

    if (!transaction) {
      throw new NotFoundException(`Transaction not found`);
    }

    return transaction;
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    await this.findOne(id);
    return this.prisma.transactions.update({
      where: { id },
      data: updateTransactionDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.transactions.delete({
      where: { id },
    });
  }
}
