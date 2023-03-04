import { Module } from '@nestjs/common';
import { ReplacementsService } from './replacements.service';
import { ReplacementsResolver } from './replacements.resolver';
import { CaslAbilityFactory } from 'src/casl/casl.ability';

@Module({
  providers: [ReplacementsResolver, ReplacementsService, CaslAbilityFactory],
})
export class ReplacementsModule {}
