import { Module } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionResolver } from './section.resolver';
import { CaslAbilityFactory } from 'src/casl/casl.ability';

@Module({
  providers: [SectionResolver, SectionService, CaslAbilityFactory],
})
export class SectionModule {}
