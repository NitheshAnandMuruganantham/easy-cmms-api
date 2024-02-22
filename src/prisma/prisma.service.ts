import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  constructor() {
    super({
      log: ['query', 'info', 'warn'],
      errorFormat: 'colorless',
    });
    this.$extends(withAccelerate());
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
