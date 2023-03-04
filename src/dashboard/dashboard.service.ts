import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { SessionContainer } from 'supertokens-node/recipe/session';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}
  async getLastFiveDayTickets() {
    const tickets = await this.prisma.ticket.groupBy({
      _count: {
        id: true,
      },
      orderBy: {
        created_at: 'desc',
      },
      by: ['created_at'],
      where: {
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
    const user = await this.prisma.users.findUnique({
      where: {
        user_auth_id: session.getUserId(),
      },
    });
    if (user?.role === 'FITTER') {
      const openTicketCount = await this.prisma.ticket.count({
        where: {
          status: 'OPEN',
        },
      });
      const openMaintenanceCount = await this.prisma.maintenance.count({
        where: {
          assignee: {
            user_auth_id: session.getUserId(),
          },
          resolved: false,
        },
      });
      const nextMaintenance = await this.prisma.maintenance.findFirst({
        where: {
          assignee: {
            user_auth_id: session.getUserId(),
          },
          resolved: false,
        },
        orderBy: {
          created_at: 'asc',
        },
      });
      return {
        openTicketCount,
        openMaintenanceCount,
        nextMaintenance,
      };
    } else if (user?.role === 'SUPERVISOR') {
      const openTicketCount = await this.prisma.ticket.count({
        where: {
          user: {
            user_auth_id: session.getUserId(),
          },
          status: 'OPEN',
        },
      });
      const openMaintenanceCount = await this.prisma.maintenance.count({
        where: {
          ticket: {
            user: {
              user_auth_id: session.getUserId(),
            },
          },
          resolved: false,
        },
      });
      const nextMaintenance = await this.prisma.maintenance.findFirst({
        where: {
          ticket: {
            user: {
              user_auth_id: session.getUserId(),
            },
          },
          resolved: false,
        },
        orderBy: {
          created_at: 'asc',
        },
      });
      return {
        openTicketCount,
        openMaintenanceCount,
        nextMaintenance,
      };
    } else {
      return null;
    }
  }
}
