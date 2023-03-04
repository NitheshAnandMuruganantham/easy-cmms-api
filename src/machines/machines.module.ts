import { Module } from '@nestjs/common';
import { MachinesService } from './machines.service';
import { MachinesResolver } from './machines.resolver';
import { CaslAbilityFactory } from 'src/casl/casl.ability';

@Module({
  providers: [MachinesResolver, MachinesService, CaslAbilityFactory],
})
export class MachinesModule {}
