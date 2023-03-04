import { SetMetadata } from '@nestjs/common';
import { action, subject } from './casl.ability';
export const CHECK_ABILITY = 'checkAbility';

export interface RequirementRule {
  subject: subject;
  action: action;
}

export const CheckAbility = (...requirements: RequirementRule[]) =>
  SetMetadata(CHECK_ABILITY, requirements);
