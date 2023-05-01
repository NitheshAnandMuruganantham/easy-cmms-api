import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesResolver } from './invoices.resolver';
import { CaslAbilityFactory } from 'src/casl/casl.ability';

@Module({
  providers: [InvoicesResolver, InvoicesService, CaslAbilityFactory],
})
export class InvoicesModule {}
