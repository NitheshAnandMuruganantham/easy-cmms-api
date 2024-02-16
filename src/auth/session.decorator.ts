import { createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';
export const Session = createParamDecorator(
  async (data: unknown, context: any) => {
    let request = undefined;
    if (context.getType() === 'graphql') {
      const ctx = GqlExecutionContext.create(context);
      request = ctx.getContext<any>().req;
    } else {
      request = context.switchToHttp().getRequest();
    }
    const user = await new PrismaClient().users.findUnique({
      where: {
        blockId_email: {
          blockId: request?.user?.blockId,
          email: request?.user?.email,
        },
      },
    });

    return {
      User: user,
      Session: request?.user,
    };
  },
);
