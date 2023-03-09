import { Module } from '@nestjs/common';
import { MachineCatagoriesService } from './machine_catagory.service';
import {  MachineCatagoriesResolver } from './machine_catagory.resolver';
import { CaslAbilityFactory } from 'src/casl/casl.ability';

@Module({
  providers: [MachineCatagoriesResolver, MachineCatagoriesService, CaslAbilityFactory],
})
export class  MachineCatagoriesModule {}
