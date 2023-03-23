import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { Parser } from 'json2csv';
import { S3Service } from 'src/s3/s3.service';
import * as humanize from 'humanize-duration';

@Injectable()
export class DashboardService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly s3Service: S3Service,
  ) {}
  async s3Upload(file: any) {
    const upload = await this.s3Service.uploadCsvReport(file);
    return this.s3Service.getSignedUrl(upload);
  }
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
  async generateCsvReportForAllMaintenance(from: Date, to: Date) {
    const AllMaintenenceCsv = await this.prisma.maintenance.findMany({
      where: {
        created_at: {
          gte: from,
          lte: to,
        },
      },
      include: {
        machines: true,
        assignee: true,
        ticket: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
    new Parser({
      fields: [
        'id',
        'from',
        'to',
        'ticket_id',
        'un_planned',
        'elapsed',
        'machine',
        'assignee',
        'created_at',
        'resolved',
      ],
    });
    const dt = [];
    AllMaintenenceCsv.forEach((maintenance) => {
      dt.push({
        id: maintenance.id,
        from: maintenance.from,
        to: maintenance.to,
        ticket_id: maintenance?.ticket?.id || 'N/A',
        un_planned: maintenance.un_planned,
        elapsed: maintenance.elapsed,
        machine: maintenance?.machines?.name || 'N/A',
        assignee: maintenance?.assignee?.name || 'N/A',
        created_at: maintenance.created_at,
        resolved: maintenance.resolved,
      });
    });
    const csv = new Parser().parse(dt);

    return this.s3Upload(csv);
  }

  async getMachineMaintanancesReport(machineId: number) {
    const MachineMaintenanceCsv = await this.prisma.maintenance.findMany({
      where: {
        machine_id: machineId,
      },
      include: {
        machines: true,
        assignee: true,
        ticket: true,
      },
      orderBy: {
        created_at: 'asc',
      },
    });
    new Parser({
      fields: [
        'id',
        'from',
        'to',
        'ticket_id',
        'un_planned',
        'elapsed',
        'assignee',
        'created_at',
        'resolved',
      ],
    });
    const dt = [];
    MachineMaintenanceCsv.forEach((maintenance) => {
      dt.push({
        id: maintenance.id,
        from: maintenance.from,
        to: maintenance.to,
        ticket_id: maintenance?.ticket?.id || 'N/A',
        un_planned: maintenance.un_planned,
        elapsed: maintenance.elapsed,
        assignee: maintenance?.assignee?.name || 'N/A',
        created_at: maintenance.created_at,
        resolved: maintenance.resolved,
      });
    });
    const csv = new Parser().parse(dt);
    return this.s3Upload(csv);
  }
  async getProductionDashboard(session: SessionContainer) {
    const user = await this.prisma.users.findUnique({
      where: {
        user_auth_id: session.getUserId(),
      },
    });

    const report_closure_hour = 6;
    let from = new Date(
      new Date(new Date().setHours(report_closure_hour, 1, 0, 0)).setDate(
        new Date().getDate() - 1,
      ),
    );
    if (
      new Date(
        new Date(new Date().setHours(report_closure_hour, 1, 0, 0)).setDate(
          new Date().getDate(),
        ),
      ).getTime() < new Date().getTime()
    ) {
      from = new Date(
        new Date(new Date().setHours(report_closure_hour, 1, 0, 0)).setDate(
          new Date().getDate(),
        ),
      );
    }
    console.log('=============================');
    console.log(from.toLocaleString());
    console.log('=============================');
    const production = await this.prisma.production_data.findMany({
      where: {
        from: {
          gte: from,
        },
      },
    });
    let total_production_time = 0;
    let total_downtime = 0;
    let total_prod_quantity = 0;
    let total_maintenance_time = 0;
    let total_target_production = 0;
    const maintenance_down_time = await this.prisma.maintenance.findMany({
      where: {
        resolved: true,
        from: {
          gte: from,
        },
      },
    });
    maintenance_down_time.forEach((m) => {
      var diff = m.from.getTime() - m.elapsed.getTime();
      var msec = diff;
      var min = msec * 1000 * 60;
      min = min < 0 ? 0 : min;
      total_maintenance_time += min;
    });

    production.forEach((data) => {
      total_prod_quantity += data.actual_production;
      total_production_time += data.total_run_time;
      total_downtime += data.total_down_time;
      total_target_production += data.target_production;
    });
    return {
      total_production_time: humanize(total_production_time * 60 * 1000),
      total_downtime: humanize(total_downtime * 60 * 1000),
      total_maintenance_time: humanize(total_maintenance_time * 60 * 1000),
      total_prod_quantity: (total_prod_quantity / 1000).toFixed(2),
      completed_maintenance_count: maintenance_down_time.length,
      'actual_vs_target_production_(%)':
        ((total_prod_quantity / total_target_production) * 100).toFixed(2) || 0,
    };
  }
}
