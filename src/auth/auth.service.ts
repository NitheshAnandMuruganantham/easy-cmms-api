import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
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
    const isPasswordValid = bcrypt.compareSync(user.password, password);
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
}
