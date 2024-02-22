import { Module } from '@nestjs/common';
import { MaintenanceService } from './maintanance.service';
import { MaintananceResolver } from './maintanance.resolver';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import { S3Service } from 'src/s3/s3.service';
import { TwilioModule, TwilioService } from 'nestjs-twilio';
import { MaintananceController } from './maintanance.controller';

@Module({
  providers: [
    MaintananceResolver,
    MaintenanceService,
    CaslAbilityFactory,
    S3Service,
  ],
  controllers: [MaintananceController],
})
export class MaintananceModule {}
