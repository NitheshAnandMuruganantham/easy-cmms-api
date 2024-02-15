import { Module } from '@nestjs/common';
import { BlockService } from './block.service';
import { BlockResolver } from './block.resolver';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import { BlockController } from './block.controller';

@Module({
  providers: [BlockResolver, BlockService, CaslAbilityFactory],
  controllers: [BlockController],
})
export class BlockModule {}
