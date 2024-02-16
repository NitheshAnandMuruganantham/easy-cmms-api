import { Module } from '@nestjs/common';
import { GenerateReportService } from './generate-report.service';
import { GenerateReportController } from './generate-report.controller';

@Module({
  controllers: [GenerateReportController],
  providers: [GenerateReportService],
})
export class GenerateReportModule {}
