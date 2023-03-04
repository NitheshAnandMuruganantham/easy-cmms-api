import { createParamDecorator } from '@nestjs/common';
import { SessionRequest } from 'supertokens-node/framework/express';
import { GqlExecutionContext } from '@nestjs/graphql';

export const Session = createParamDecorator((data: unknown, context: any) => {
  let request: SessionRequest = undefined;

  if (context.getType() === 'graphql') {
    const ctx = GqlExecutionContext.create(context);
    request = ctx.getContext<any>().req;
  } else {
    request = context.switchToHttp().getRequest();
  }
  return request?.session;
});
