import { CanActivate, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { SessionRequest } from 'supertokens-node/framework/express';
import { Reflector } from '@nestjs/core';
import { CaslAbilityFactory } from './casl.ability';
import { CHECK_ABILITY, RequirementRule } from './ability.decorator';

@Injectable()
export class AbilityGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly abilityFactory: CaslAbilityFactory,
  ) {}

  async canActivate(context: GqlExecutionContext) {
    const rules = this.reflector.get<RequirementRule[]>(
      CHECK_ABILITY,
      context.getHandler(),
    );

    let request: SessionRequest = undefined;
    if (context.getType() === 'graphql') {
      const ctx = GqlExecutionContext.create(context);
      request = ctx.getContext<any>().req;
    } else {
      request = context.switchToHttp().getRequest();
    }
    const ability = await this.abilityFactory.getCurrentUserAbility(
      request.session,
    );
    return rules.every((rule) => ability.can(rule.action, rule.subject));
  }
}
