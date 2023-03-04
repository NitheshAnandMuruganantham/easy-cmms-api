import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import { CaslAbilityFactory } from 'src/casl/casl.ability';

@Module({
  providers: [ItemsResolver, ItemsService, CaslAbilityFactory],
})
export class ItemsModule {}
