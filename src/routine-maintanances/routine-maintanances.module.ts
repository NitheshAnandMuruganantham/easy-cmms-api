import { Module } from '@nestjs/common';
import { RoutineMaintanancesService } from './routine-maintanances.service';
import { RoutineMaintanancesResolver } from './routine-maintanances.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { CaslAbilityFactory } from 'src/casl/casl.ability';

@Module({
  providers: [
    RoutineMaintanancesResolver,
    RoutineMaintanancesService,
    PrismaService,
    CaslAbilityFactory,
  ],
})
export class RoutineMaintanancesModule {}
