import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
     console.log('ENV =', process.env.DATABASE_URL); 

    super();
  }

  async onModuleInit() {
    await this.$connect();
  }
}