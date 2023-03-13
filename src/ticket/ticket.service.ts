import { Injectable } from '@nestjs/common';
import {
  TicketCreateInput,
  TicketOrderByWithRelationInput,
  TicketUpdateInput,
  TicketWhereInput,
} from 'src/@generated/ticket';
import { nanoid } from 'nanoid';
import { PrismaService } from 'nestjs-prisma';
import { SessionContainer } from 'supertokens-node/recipe/session';
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
    const ability = await this.caslFactory.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('create', 'Ticket');
    const photo = await this.s3Service.uploadBase64Image(
      createTicketInput.photos,
      `${nanoid(10)}`,
    );
    const data = await this.prisma.ticket.create({
      data: {
        ...createTicketInput,
        photos: photo,
      },
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
    const ability = await this.caslFactory.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan('read', 'Ticket');

    const data = await this.prisma.ticket.findMany({
      where: {
        AND: [where],
      },
      orderBy,

      skip,
      take,
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
    const ability = await this.caslFactory.getCurrentUserAbility(session);

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
    const ability = await this.caslFactory.getCurrentUserAbility(session);
    const ticketToFind = await this.prisma.ticket.findUnique({
      where: { id },
    });
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Ticket', ticketToFind),
    );
    return {
      ...ticketToFind,
      photos: this.s3Service.getSignedUrl(ticketToFind.photos),
    };
  }

  async update(
    session: SessionContainer,
    id: number,
    updateTicketInput: TicketUpdateInput,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);
    const ticketToUpdate = await this.prisma.ticket.findUnique({
      where: { id },
    });
    ForbiddenError.from(ability).throwUnlessCan(
      'update',
      subject('Ticket', ticketToUpdate),
    );

    return this.prisma.ticket.update({
      where: { id },
      data: updateTicketInput,
    });
  }

  async remove(session: SessionContainer, id: number) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);
    const ticketToDelete = await this.prisma.ticket.findUnique({
      where: { id },
    });
    ForbiddenError.from(ability).throwUnlessCan(
      'delete',
      subject('Ticket', ticketToDelete),
    );

    return this.prisma.ticket.delete({
      where: { id },
    });
  }

  async user(session: SessionContainer, id: bigint) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);
    const userToFind = await this.prisma.users.findUnique({
      where: { id },
    });

    return userToFind;
  }
  async maintanance(session: SessionContainer, id: bigint) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);
    const maintananceToFind = await this.prisma.maintenance.findUnique({
      where: { id },
    });
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Maintenance', maintananceToFind),
    );
    return maintananceToFind;
  }

  async machine(session: SessionContainer, id: bigint) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);
    const machineToFind = await this.prisma.ticket
      .findUnique({
        where: { id },
      })
      .machines();
    return machineToFind;
  }
}
