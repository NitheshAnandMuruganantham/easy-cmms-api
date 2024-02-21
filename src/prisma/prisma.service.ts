import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    if (!global.prisma) {
      super();
    }
  }

  async onModuleInit() {
    await global.this.$connect(withAccelerate());
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
