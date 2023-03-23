import { Module } from '@nestjs/common';
import { GenerateReportService } from './generate-report.service';
import { GenerateReportController } from './generate-report.controller';
import { S3Service } from 'src/s3/s3.service';

@Module({
  controllers: [GenerateReportController],
  providers: [GenerateReportService],
})
export class GenerateReportModule {}
