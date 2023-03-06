import { Controller, Get } from '@nestjs/common';
import { Param, Session, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from 'src/auth/auth.guard';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
@UseGuards(new AuthGuard())
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}
  @Get('lastFiveDayTickets')
  getLastFiveDayTickets() {
    return this.dashboardService.getLastFiveDayTickets();
  }
  @Get('MobileDashboard')
  getMobileDashboard(
    @Session()
    session: SessionContainer,
  ) {
    return this.dashboardService.getMobileDashboard(session);
  }

  @Get('getAllMaintanancesCsv/:fromDate/:toDate')
  async getAllMaintanancesCsv(
    @Param('fromDate') fromDate: Date,
    @Param('toDate') toDate: Date,
  ) {
    const csv = await this.dashboardService.generateCsvReportForAllMaintenance(
      new Date(fromDate),
      new Date(toDate),
    );

    return csv;
  }

  @Get('getMachineMaintanancesReport/:machineId')
  async getMachineMaintanancesReport(@Param('machineId') machineId: string) {
    const csv = await this.dashboardService.getMachineMaintanancesReport(
      parseInt(machineId),
    );

    return csv;
  }
}
