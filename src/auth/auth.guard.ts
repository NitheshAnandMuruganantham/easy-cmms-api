import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from './public.decorator';
import { log } from 'console';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isRestRequest = this.isRestContext(context);
    const isPublic = this.isPublicRoute(context);
    if (isPublic) {
      return true;
    }

    const token = this.isRestContext(context)
      ? this.extractTokenFromRestHeader(context.switchToHttp().getRequest())
      : this.extractTokenFromGraphqlHeader(GqlExecutionContext.create(context));

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync(token);
      if (isRestRequest) {
        (context.switchToHttp().getRequest() as any).user = payload;
      } else {
        GqlExecutionContext.create(context).getContext().req.user = payload;
      }
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  private isRestContext(context: ExecutionContext): boolean {
    return context.getType() === 'http';
  }

  private isPublicRoute(context: ExecutionContext): boolean {
    const isPublic = Reflect.getMetadata(IS_PUBLIC_KEY, context.getHandler());
    return isPublic;
  }

  private extractTokenFromRestHeader(request: Request): string | undefined {
    const authorizationHeader = request.headers.authorization;
    if (authorizationHeader && authorizationHeader.split(' ')[0] === 'Bearer') {
      return authorizationHeader.split(' ')[1];
    }
    return undefined;
  }

  private extractTokenFromGraphqlHeader(gqlContext: any): string | undefined {
    const { req } = gqlContext.getContext();
    const authorizationHeader = req.headers.authorization;
    if (authorizationHeader && authorizationHeader.split(' ')[0] === 'Bearer') {
      return authorizationHeader.split(' ')[1];
    }
    return undefined;
  }
}
