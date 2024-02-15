import { Module } from '@nestjs/common';
import { BlockService } from './block.service';
import { BlockResolver } from './block.resolver';
import { CaslAbilityFactory } from 'src/casl/casl.ability';

@Module({
  providers: [BlockResolver, BlockService, CaslAbilityFactory],
})
export class BlockModule {}
