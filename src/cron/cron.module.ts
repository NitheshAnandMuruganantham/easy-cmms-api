import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { CronController } from './cron.controller';
import { GenerateReportService } from '../generate-report/generate-report.service';

@Module({
  controllers: [CronController],
  providers: [CronService, GenerateReportService],
})
export class CronModule {}
