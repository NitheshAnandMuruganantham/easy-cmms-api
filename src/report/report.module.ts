import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportResolver } from './report.resolver';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [ReportResolver, ReportService, CaslAbilityFactory],
})
export class ReportModule {}
