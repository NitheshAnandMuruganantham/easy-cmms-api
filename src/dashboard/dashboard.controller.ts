import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import SessionContainer from '../types/session';
import { DashboardService } from './dashboard.service';
import { Session } from '../auth/session.decorator';
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}
  @Get('lastFiveDayTickets')
  getLastFiveDayTickets(
    @Session()
    session: SessionContainer,
  ) {
    return this.dashboardService.getLastFiveDayTickets(session.User.blockId);
  }
  @Get('MobileDashboard')
  getMobileDashboard(
    @Session()
    session: SessionContainer,
  ) {
    return this.dashboardService.getMobileDashboard(session);
  }

  @Get('getProductionDashboard')
  async getProductionDashboard(
    @Session() session: SessionContainer,
    @Param('blockId') machineId: string,
  ) {
    return this.dashboardService.getProductionDashboard(session);
  }
}
