import { Module } from '@nestjs/common';
import { CaslAbilityFactory } from './casl.ability';
@Module({
  imports: [],
  providers: [CaslAbilityFactory],
  exports: [CaslAbilityFactory],
})
export class CaslModule {}
