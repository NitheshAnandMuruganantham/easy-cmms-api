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

  @Cron('0 9 * * *', {
    name: 'notifications',
  })
  async sendMorningReportMail() {
    const block = await this.prismaService.block.findMany({});

    block.forEach(async (element) => {
      const buffer =
        await this.ReportService.generateCsvReportForAllMaintenance(
          element.id,
          new Date(
            new Date(new Date().setDate(new Date().getDate() - 1)).setHours(
              6,
              1,
              0,
              0,
            ),
          ),
          new Date(new Date().setHours(6, 0, 0, 0)),
          [],
          [],
          [],
          [],
        );
      if (element.Mailings == null) return;
      const mail = await this.mailService
        .sendMail({
          to: element.Mailings,
          subject: 'Easy CMMS Morning Report',
          template: 'dayReportMail',
          context: {
            block: element.name,
            date: new Date(
              new Date().setDate(new Date().getDate() - 1),
            ).toLocaleDateString(),
          },
          attachments: [
            {
              filename: 'report.xlsx',
              content: buffer,
              contentType:
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            },
          ],
        })
        .then((res) => {
          console.log('=======================');
          console.log(res);
          console.log('=======================');
        })
        .catch((err) => {
          console.log('=======================');
          console.log(err);
          console.log('=======================');
        });
    });
    return 'OK';
  }
}
