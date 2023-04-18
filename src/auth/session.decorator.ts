import { createParamDecorator } from '@nestjs/common';
import { SessionRequest } from 'supertokens-node/framework/express';
import { GqlExecutionContext } from '@nestjs/graphql';
import { PrismaClient, Users } from '@prisma/client';
export const Session = createParamDecorator(
  async (data: unknown, context: any) => {
    let request: SessionRequest = undefined;
    if (context.getType() === 'graphql') {
      const ctx = GqlExecutionContext.create(context);
      request = ctx.getContext<any>().req;
    } else {
      request = context.switchToHttp().getRequest();
    }
    const user = await new PrismaClient().users.findUnique({
      where: {
        user_auth_id: request.session.getUserId(),
      },
    });

    return { Session: request?.session, User: user };
  },
);
