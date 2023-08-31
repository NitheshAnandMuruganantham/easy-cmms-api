import { Controller, Get, Res, Param, UseGuards, Body } from '@nestjs/common';
import { GenerateReportService } from './generate-report.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Session } from 'src/auth/session.decorator';
import SessionContainer from 'src/types/session';

@UseGuards(new AuthGuard())
@Controller('generate-report')
export class GenerateReportController {
  constructor(private readonly generateReportService: GenerateReportService) {}

  @Get('report/:data')
  async getAllMaintenancesReport(
    @Param('data') filter: string,
    @Res({
      passthrough: true,
    })
    res: any,
    @Session()
    session: SessionContainer,
  ) {
    const filename = 'report.xlsx';
    const buffer = Buffer.from(filter, 'base64');
    const {
      fromDate,
      toDate,
      maintenanceFilter,
      ticketFilter,
      routineMaintenancesFilter,
      productionFilter,
    } = JSON.parse(buffer.toString('utf-8'));
    const data =
      await this.generateReportService.generateCsvReportForAllMaintenance(
        session.User.blockId,
        fromDate,
        toDate,
        maintenanceFilter || [],
        ticketFilter || [],
        routineMaintenancesFilter || [],
      );
    res.set({
      'Content-Type':
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': `attachment; filename=${filename}`,
    });
    res.end(data);
  }

  @Get('getMachineMaintenancesReport/:machineId')
  async getMachineMaintenancesReport(
    @Param('machineId') machineId: string,
    @Res({
      passthrough: true,
    })
    res: any,
    @Session()
    session: SessionContainer,
  ) {
    const filename = 'report.xlsx';
    const data = await this.generateReportService.getMachineMaintenancesReport(
      session.User.blockId,
      parseInt(machineId),
    );

    res.set({
      'Content-Type':
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': `attachment; filename=${filename}`,
    });
    res.end(data);
  }
}
