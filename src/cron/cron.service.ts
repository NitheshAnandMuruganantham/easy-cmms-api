import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { GenerateReportService } from '../generate-report/generate-report.service';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from 'nestjs-prisma';
@Injectable()
export class CronService {
  constructor(
    private readonly ReportService: GenerateReportService,
    private readonly mailService: MailerService,
    private readonly prismaService: PrismaService,
  ) {}
}
