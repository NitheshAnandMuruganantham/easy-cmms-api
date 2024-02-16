import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import xlsx from 'node-xlsx';

import cronstrue from 'cronstrue';

import * as humanizeDuration from 'humanize-duration';
@Injectable()
export class GenerateReportService {
  constructor(private readonly prisma: PrismaService) {}

  async generateCsvReportForAllMaintenance(
    block_id: bigint,
    from: Date,
    to: Date,
    maintenanceFilter: any,
    ticketFilter: any,
    routineMaintenancesFilter: any,
  ) {
    const AllMaintenanceCsv = await this.prisma.maintenance.findMany({
      where: {
        AND: [
          {
            block_id: {
              equals: block_id,
            },
          },
          {
            created_at: {
              gte: from,
              lte: to,
            },
          },
          ...maintenanceFilter,
        ],
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

    const sheet_1 = [
      ['id', 'date/time', 'assignee', 'machine', 'ticket', 'status', 'name'],
    ];

    const sheet_2 = [
      [
        'id',
        'name',
        'description',
        'machine',
        'maintenance',
        'user',
        'status',
        'created_at',
      ],
    ];

    const AllTicketCsv = await this.prisma.ticket.findMany({
      where: {
        AND: [
          {
            block_id: {
              equals: block_id,
            },
          },
          {
            created_at: {
              gte: from,
              lte: to,
            },
          },
          ...ticketFilter,
        ],
      },
      include: {
        user: true,
        machines: true,
        maintenance: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
    AllTicketCsv.forEach((ticket) => {
      const row = [];
      row.push(ticket.id);
      row.push(ticket.name);
      row.push(ticket.description);
      row.push(`${ticket?.machines?.name} (${ticket?.machines?.id || 'N/A'})`);
      row.push(ticket?.maintenance?.id || 'N/A');
      row.push(`${ticket?.user?.name} (${ticket?.user?.id || 'N/A'})`);
      row.push(ticket.status);
      row.push(new Date(ticket.created_at).toLocaleString());
      sheet_2.push(row);
    });

    AllMaintenanceCsv.forEach((maintenance) => {
      const row = [];
      row.push(maintenance.id);
      row.push(new Date(maintenance.from).toLocaleString());
      row.push(
        `${maintenance?.assignee?.name} (${
          maintenance?.assignee?.id || 'N/A'
        })`,
      );
      row.push(
        `${maintenance?.machines?.name} (${
          maintenance?.machines?.id || 'N/A'
        })`,
      );

      row.push(
        `${maintenance?.ticket?.name || ''} (${
          maintenance?.ticket?.id || 'N/A'
        })`,
      );
      row.push(maintenance.resolved ? 'Resolved' : 'Unresolved');
      row.push(maintenance.name);
      sheet_1.push(row);
    });

    const sheet_3 = [
      [
        'id',
        'name',
        'description',
        'time',
        'duration',
        'machine',
        'assignee',
        'created_at',
      ],
    ];

    const AllRoutineMaintenanceCsv =
      await this.prisma.routine_maintanances.findMany({
        where: {
          AND: [
            {
              block_id: {
                equals: block_id,
              },
            },
            {
              created_at: {
                gte: from,
                lte: to,
              },
            },
            ...routineMaintenancesFilter,
          ],
        },
        include: {
          meachine: true,
          assignee: true,
        },
        orderBy: {
          created_at: 'desc',
        },
      });

    AllRoutineMaintenanceCsv.forEach((maintenance) => {
      const row = [];
      row.push(maintenance.id);
      row.push(maintenance.name);
      row.push(maintenance.description);
      row.push(cronstrue.toString(maintenance.cron));
      row.push(humanizeDuration(maintenance.duration * 60 * 1000));
      row.push(`${maintenance?.meachine?.name} (${maintenance?.meachine?.id})`);
      row.push(`${maintenance?.assignee?.name} (${maintenance?.assignee?.id})`);
      row.push(maintenance.created_at);
      sheet_3.push(row);
    });

    const buffer = xlsx.build(
      [
        {
          name: 'maintenances',
          data: sheet_1,
          options: {
            '!cols': [
              { wch: 6 },
              { wch: 20 },
              { wch: 20 },
              { wch: 20 },
              { wch: 30 },
              { wch: 20 },
              { wch: 15 },
              { wch: 15 },
              { wch: 20 },
              { wch: 20 },
            ],
          },
        },
        {
          name: 'tickets',
          data: sheet_2,
          options: {
            '!cols': [
              { wch: 6 },
              { wch: 20 },
              { wch: 20 },
              { wch: 20 },
              { wch: 20 },
              { wch: 20 },
              { wch: 20 },
            ],
          },
        },
        {
          name: 'routine_maintenances',
          data: sheet_3,
          options: {
            '!cols': [
              { wch: 6 },
              { wch: 20 },
              { wch: 20 },
              { wch: 20 },
              { wch: 30 },
              { wch: 20 },
              { wch: 20 },
              { wch: 20 },
              { wch: 20 },
              { wch: 20 },
            ],
          },
        },
      ],
      {
        writeOptions: {
          bookType: 'xlsx',
          ignoreEC: true,
        },
      },
    );

    return buffer;
  }

  async getMachineMaintenancesReport(block_id: bigint, machineId: number) {
    const MachineMaintenanceCsv = await this.prisma.maintenance.findMany({
      where: {
        block_id,
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
    const fields = [
      ['id', 'date/time', 'assignee', 'machine', 'ticket', 'status', 'name'],
    ];
    const AllMaintenanceCsv = await this.prisma.maintenance.findMany({
      where: {
        block_id: {
          equals: block_id,
        },
        machine_id: {
          equals: machineId,
        },
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
    AllMaintenanceCsv.forEach((maintenance) => {
      const row = [];
      row.push(maintenance.id);
      row.push(new Date(maintenance.from).toLocaleString());
      row.push(
        `${maintenance?.assignee?.name} (${
          maintenance?.assignee?.id || 'N/A'
        })`,
      );
      row.push(
        `${maintenance?.machines?.name} (${
          maintenance?.machines?.id || 'N/A'
        })`,
      );

      row.push(
        `${maintenance?.ticket?.name || ''} (${
          maintenance?.ticket?.id || 'N/A'
        })`,
      );
      row.push(maintenance.resolved ? 'Resolved' : 'Unresolved');
      row.push(maintenance.name);
      fields.push(row);
    });
    const buffer = xlsx.build(
      [
        {
          name: 'maintenances',
          data: fields,
          options: {
            '!cols': [
              { wch: 6 },
              { wch: 20 },
              { wch: 20 },
              { wch: 20 },
              { wch: 30 },
              { wch: 20 },
              { wch: 15 },
              { wch: 15 },
              { wch: 20 },
              { wch: 20 },
            ],
          },
        },
      ],
      {
        writeOptions: {
          bookType: 'xlsx',
          ignoreEC: true,
        },
      },
    );

    return buffer;
  }
}
