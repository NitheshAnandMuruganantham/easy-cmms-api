import { Module } from '@nestjs/common';
import { ItemCatagoryService } from './item-catagory.service';
import { ItemCatagoryResolver } from './item-catagory.resolver';
import { CaslAbilityFactory } from 'src/casl/casl.ability';

@Module({
  providers: [ItemCatagoryResolver, ItemCatagoryService, CaslAbilityFactory],
})
export class ItemCatagoryModule {}
