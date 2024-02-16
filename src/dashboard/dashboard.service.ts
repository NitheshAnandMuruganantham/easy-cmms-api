import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import SessionContainer from '../types/session';
import * as humanize from 'humanize-duration';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getLastFiveDayTickets(block_id: bigint) {
    const tickets = await this.prisma.ticket.groupBy({
      _count: {
        id: true,
      },
      orderBy: {
        created_at: 'desc',
      },
      by: ['created_at'],
      where: {
        block_id: {
          equals: block_id,
        },
        created_at: {
          lte: new Date(),
        },
      },
    });

    return tickets.map((ticket) => {
      return {
        name: ticket.created_at.toDateString(),
        count: ticket._count.id,
      };
    });
  }
  async getMobileDashboard(session: SessionContainer) {
    const Settings: any = await this.prisma.block_settings.findFirst({
      where: {
        block_id: session.User.blockId,
        name: {
          equals: 'REPORTING_TIME',
        },
      },
    });

    const reporting_time: number = Settings.value.default;
    if (session.User?.role === 'FITTER') {
      const from = new Date().setHours(reporting_time, 0, 0, 0);

      const weekMaintenancesCount = await this.prisma.maintenance.count({
        where: {
          assignee: {
            id: session.User.id,
          },
          created_at: {
            gte: new Date(new Date(from).setDate(new Date().getDate() - 7)),
          },
        },
      });

      const monthMaintenancesCount = await this.prisma.maintenance.count({
        where: {
          assignee: {
            id: session.User.id,
          },
          created_at: {
            gte: new Date(new Date(from).setDate(new Date().getDate() - 30)),
          },
        },
        orderBy: {
          created_at: 'asc',
        },
      });

      const todayFrom = new Date(new Date().setHours(reporting_time, 0, 0, 0));

      if (new Date().getHours() < reporting_time) {
        todayFrom.setDate(new Date().getDate() - 1);
      }
      const todayMaintenancesCount = await this.prisma.maintenance.count({
        where: {
          assignee: {
            id: session.User.id,
          },
          created_at: {
            gte: todayFrom,
          },
        },
        orderBy: {
          created_at: 'asc',
        },
      });

      const TotalPendingMaintenances = await this.prisma.maintenance.count({
        where: {
          assignee: {
            id: session.User.id,
          },
          resolved: false,
          created_at: {
            gte: new Date(new Date().setDate(new Date().getDate() - 30)),
          },
        },
      });

      return {
        Week_Maintenances_Count: weekMaintenancesCount,
        Month_Maintenances_Count: monthMaintenancesCount,
        Today_Maintenances_Count: todayMaintenancesCount,
        Total_Pending_Maintenances: TotalPendingMaintenances,
      };
    } else if (session.User.role === 'SUPERVISOR') {
      const openTicketCount = await this.prisma.ticket.count({
        where: {
          user: {
            id: session.User.id,
          },
          status: 'OPEN',
        },
      });
      const openMaintenanceCount = await this.prisma.maintenance.count({
        where: {
          ticket: {
            user: {
              id: session.User.id,
            },
          },
          resolved: false,
        },
      });

      return {
        Open_Ticket_Count: openTicketCount,
        Open_Maintenance_Count: openMaintenanceCount,
      };
    } else {
      return null;
    }
  }

  async getProductionDashboard(session: SessionContainer) {
    const reporting_time: any = {
      value: 9,
    };

    const from = new Date();
    if (from.getHours() < reporting_time.value?.default) {
      from.setDate(from.getDate() - 1);
    }
    const response = {};

    const un_resolved_maintenance = await this.prisma.maintenance.count({
      where: {
        block_id: session.User.blockId,
        resolved: false,
      },
    });
    const resolved_maintenance = await this.prisma.maintenance.count({
      where: {
        block_id: session.User.blockId,
        resolved: true,
      },
    });
    const total_tickets_raised_count = await this.prisma.ticket.count({
      where: {
        block_id: session.User.blockId,
      },
    });
    const total_work_orders = await this.prisma.maintenance.count({
      where: {
        block_id: session.User.blockId,
        resolved: false,
      },
    });

    response['un_resolved_maintenances'] = un_resolved_maintenance;
    response['resolved_maintenances'] = resolved_maintenance;
    response['total_work_orders'] = total_work_orders;
    response['total_ticket_raised_count'] = total_tickets_raised_count;
    return response;
  }
}
