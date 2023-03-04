import { Module } from '@nestjs/common';
import { MaintananceService } from './maintanance.service';
import { MaintananceResolver } from './maintanance.resolver';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import { S3Service } from 'src/s3/s3.service';

@Module({
  providers: [
    MaintananceResolver,
    MaintananceService,
    CaslAbilityFactory,
    S3Service,
  ],
})
export class MaintananceModule {}
