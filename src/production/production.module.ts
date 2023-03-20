import { Module } from '@nestjs/common';
import { ProductionService } from './production.service';
import { ProductionDataResolver } from './production.resolver';
import { CaslAbilityFactory } from 'src/casl/casl.ability';

@Module({
  providers: [ProductionDataResolver, ProductionService, CaslAbilityFactory],
})
export class ProductionDataModule {}
