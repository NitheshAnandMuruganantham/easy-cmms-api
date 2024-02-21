import { ForbiddenError, subject } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { accessibleBy } from '@casl/prisma';

import {
  invoice_itemsWhereInput,
  invoice_itemsOrderByRelationAggregateInput,
} from 'src/invoices/dto/invoice-items';

import {
  Invoices,
  InvoicesCreateInput,
  InvoicesOrderByWithRelationAndSearchRelevanceInput,
  InvoicesUpdateInput,
  InvoicesWhereInput,
} from 'src/invoices/dto/invoices';

import { CaslAbilityFactory } from 'src/casl/casl.ability';
import SessionContainer from '../types/session';

@Injectable()
export class InvoicesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly casl: CaslAbilityFactory,
  ) {}

  async create(session: SessionContainer, createItemInput: any) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);

    ForbiddenError.from(ability).throwUnlessCan('create', 'Items');

    const createdInvoice = this.prisma.invoices
      .create({
        data: {
          ...createItemInput,
          invoice_items: {
            createMany: {
              data: createItemInput.invoice_items.createMany.data.map(
                (item) => {
                  return {
                    ...item,
                    block_id: session.User.blockId,
                  };
                },
              ),
            },
          },
          block: {
            connect: {
              id: session.User.blockId,
            },
          },
        },
        include: {
          invoice_items: true,
        },
      })
      .then((data) => {
        data.invoice_items.map(async (item) => {
          await this.prisma.items.update({
            where: {
              id: item.item_id,
            },
            data: {
              quantity: {
                increment: item.quantity,
              },
            },
          });
        });
        return data;
      });
    return createdInvoice;
  }
  async findAll(
    session: SessionContainer,
    where: InvoicesWhereInput,
    orderBy: InvoicesOrderByWithRelationAndSearchRelevanceInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);

    ForbiddenError.from(ability).throwUnlessCan('read', 'Items');

    return this.prisma.invoices.findMany({
      where: {
        AND: [accessibleBy(ability).Invoices, where],
      },
      orderBy,
      take: limit,
      skip: offset,
    });
  }

  async count(
    session: SessionContainer,
    where: InvoicesWhereInput,
    orderBy: InvoicesOrderByWithRelationAndSearchRelevanceInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);

    ForbiddenError.from(ability).throwUnlessCan('read', 'Invoices');

    return this.prisma.invoices.count({
      where: {
        AND: [accessibleBy(ability).Invoices, where],
      },
      orderBy,
      take: limit,
      skip: offset,
    });
  }

  async findOne(session: SessionContainer, id: number) {
    const canGet = await this.prisma.invoices.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Invoices', canGet),
    );
    return canGet;
  }
  async update(
    session: SessionContainer,
    id: number,
    updateItemInput: InvoicesUpdateInput,
  ) {
    const canUpdate = await this.prisma.invoices.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan(
      'update',
      subject('Invoices', canUpdate),
    );

    return this.prisma.invoices.update({
      where: { id },
      data: updateItemInput as any,
    });
  }

  async remove(session: SessionContainer, id: number) {
    const canRemove = await this.prisma.invoices.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan(
      'delete',
      subject('Invoices', canRemove),
    );
    const deletedData = await this.prisma.invoice_items.findMany({
      where: {
        invoice_id: id,
      },
    });
    await this.prisma.invoice_items
      .deleteMany({
        where: {
          invoice_id: id,
        },
      })
      .then(async (data) => {
        await deletedData.forEach(async (item) => {
          await this.prisma.items.update({
            where: {
              id: item.item_id,
            },
            data: {
              quantity: {
                decrement: item.quantity,
              },
            },
          });
        });
      });
    return await this.prisma.invoices
      .delete({
        where: { id },
        include: {
          invoice_items: true,
        },
      })
      .then(async (invoice) => {
        return invoice;
      })
      .catch((err) => {
        this.prisma.invoice_items.createMany({
          data: deletedData,
        });
        throw err;
      });
  }

  async items(
    session: SessionContainer,
    id: bigint,
    where: invoice_itemsWhereInput,
    orderBy: invoice_itemsOrderByRelationAggregateInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'invoice_items');

    return this.prisma.invoices.findUnique({ where: { id } }).invoice_items({
      where: {
        AND: [accessibleBy(ability).invoice_items, where],
      },
      include: {
        item: true,
      },
      take: limit,
      skip: offset,
    });
  }
}
