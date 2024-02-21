import { HttpException, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { TwilioService } from 'nestjs-twilio';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly twilio: TwilioService,
    private readonly config: ConfigService,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}
  async login(org_id: number, email: string, password: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        blockId_email: {
          blockId: org_id,
          email: email,
        },
      },
    });
    if (!user) {
      throw new HttpException(
        {
          status: 404,
          error: 'User not found',
        },
        404,
      );
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      throw new HttpException(
        {
          status: 404,
          error: 'Invalid password',
        },
        404,
      );
    }
    return {
      access_token: this.jwt.sign({
        userId: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
        profile: user.profile,
        blockId: user.blockId,
      }),
      refresh_token: this.jwt.sign({
        userId: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
        profile: user.profile,
        blockId: user.blockId,
      }),
    };
  }

  async getPhoneCode(phone: string) {
    const exists = await this.prisma.users.findFirst({
      where: {
        phone: {
          equals: phone,
        },
      },
    });
    if (!exists) {
      throw new HttpException(
        {
          status: 404,
          error: 'Phone not found',
        },
        404,
      );
    }
    const blocks = await this.prisma.block.findMany({
      select: {
        name: true,
        id: true,
      },
      where: {
        Users: {
          some: {
            phone,
          },
        },
      },
    });
    const code = Math.floor(1000 + Math.random() * 9000);
    this.cacheService.set(phone, code, 10000);
    await this.twilio.client.messages.create({
      to: phone,
      from: this.config.get('TWILIO_FROM'),
      body: `Your phone code is ${code}`,
    });
    return {
      status: 200,
      message: 'Phone code sent',
      tenants: blocks,
    };
  }
  async verifyPhoneCode(org_id: number, phone: string, code: string) {
    const existing_code = await this.cacheService.get(phone);
    if (String(existing_code) !== code) {
      throw new HttpException(
        {
          status: 404,
          error: 'Invalid code',
        },
        404,
      );
    }
    const user = await this.prisma.users.findFirst({
      where: {
        phone: {
          equals: phone,
        },
        blockId: {
          equals: org_id,
        },
      },
      include: {
        block: true,
      },
    });
    return {
      access_token: this.jwt.sign({
        userId: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
        profile: user.profile,
        blockId: user.blockId,
      }),
      refresh_token: this.jwt.sign({
        userId: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
        profile: user.profile,
        blockId: user.blockId,
      }),
      user: {
        role: user.role,
        name: user.name,
        email: user.email,
        profile: user.profile,
        blockId: user.blockId,
        block: user.block,
        extra_roles: user.extra_roles,
      },
    };
  }
}
