import { Injectable } from '@nestjs/common';
import {
  TicketCreateInput,
  TicketOrderByWithRelationInput,
  TicketUpdateInput,
  TicketWhereInput,
} from 'src/ticket/dto';
import { v4 as uuid } from 'uuid';
import { PrismaService } from 'src/prisma/prisma.service';
import SessionContainer from '../types/session';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import { ForbiddenError, subject } from '@casl/ability';
import { S3Service } from 'src/s3/s3.service';

@Injectable()
export class TicketService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly caslFactory: CaslAbilityFactory,
    private readonly s3Service: S3Service,
  ) {}

  async create(
    session: SessionContainer,
    createTicketInput: TicketCreateInput,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );
    ForbiddenError.from(ability).throwUnlessCan('create', 'Ticket');
    const photo = await this.s3Service.uploadBase64Image(
      createTicketInput.photos,
      `${uuid()}`,
    );
    const data = await this.prisma.ticket.create({
      data: {
        ...createTicketInput,
        block: {
          connect: {
            id: session.User.blockId,
          },
        },
        photos: photo,
      } as any,
    });

    return data;
  }

  async findAll(
    session: SessionContainer,
    where: TicketWhereInput,
    orderBy: TicketOrderByWithRelationInput,
    skip: number,
    take: number,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );

    ForbiddenError.from(ability).throwUnlessCan('read', 'Ticket');

    const data = await this.prisma.ticket.findMany({
      where: {
        AND: [where],
      },
      orderBy,
      skip,
      take,
      include: {
        machines: {
          include: {
            machine_catagory: true,
            block: true,
            section: true,
          },
        },
      },
    });
    const result = data.map((ticket) => {
      return {
        ...ticket,
        photos:
          ticket.photos && ticket.photos.length > 1
            ? this.s3Service.getSignedUrl(ticket.photos)
            : '',
      };
    });
    return result;
  }

  async count(
    session: SessionContainer,
    where: TicketWhereInput,
    orderBy: TicketOrderByWithRelationInput,
    skip: number,
    take: number,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );

    ForbiddenError.from(ability).throwUnlessCan('read', 'Ticket');

    return this.prisma.ticket.count({
      where: {
        AND: [where],
      },
      orderBy,
      skip,
      take,
    });
  }

  async findOne(session: SessionContainer, id: number) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );
    const ticketToFind = await this.prisma.ticket.findUnique({
      where: { id },
      include: {
        machines: {
          include: {
            machine_catagory: true,
            block: true,
            section: true,
          },
        },
      },
    });
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Ticket', ticketToFind),
    );
    const result = {
      ...ticketToFind,
      photos: this.s3Service.getSignedUrl(ticketToFind.photos),
    };
    return result;
  }

  async update(
    session: SessionContainer,
    id: number,
    updateTicketInput: TicketUpdateInput,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );
    const ticketToUpdate = await this.prisma.ticket.findUnique({
      where: { id },
    });
    ForbiddenError.from(ability).throwUnlessCan(
      'update',
      subject('Ticket', ticketToUpdate),
    );

    return this.prisma.ticket.update({
      where: { id },
      data: updateTicketInput as any,
      include: {
        machines: {
          include: {
            machine_catagory: true,
            block: true,
            section: true,
          },
        },
      },
    });
  }

  async remove(session: SessionContainer, id: number) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );
    const ticketToDelete = await this.prisma.ticket.findUnique({
      where: { id },
    });
    ForbiddenError.from(ability).throwUnlessCan(
      'delete',
      subject('Ticket', ticketToDelete),
    );

    return this.prisma.ticket.delete({
      where: { id },
      include: {
        machines: {
          include: {
            machine_catagory: true,
            block: true,
            section: true,
          },
        },
      },
    });
  }

  async user(session: SessionContainer, id: bigint) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );
    const userToFind = await this.prisma.users.findUnique({
      where: { id },
    });

    return userToFind;
  }
  async maintanance(session: SessionContainer, id: bigint) {
    const ability = await this.caslFactory.getCurrentUserAbility(
      session.Session,
    );
    const maintenanceToFind = await this.prisma.maintenance.findUnique({
      where: { id },
    });
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Maintenance', maintenanceToFind),
    );
    return maintenanceToFind;
  }
}
