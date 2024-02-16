import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import {
  Invoices,
  InvoicesCreateInput,
  InvoicesOrderByWithRelationAndSearchRelevanceInput,
  InvoicesUpdateInput,
  InvoicesWhereInput,
} from 'src/invoices/invoices';

import { Session } from 'src/auth/session.decorator';
import SessionContainer from '../types/session';
import { InvoicesService } from './invoices.service';
import {
  invoice_items,
  invoice_itemsWhereInput,
  invoice_itemsOrderByRelationAggregateInput,
} from 'src/invoices/invoice-items';

@Resolver(() => Invoices)
export class InvoicesResolver {
  constructor(private readonly invoiceService: InvoicesService) {}

  @Mutation(() => Invoices)
  createInvoice(
    @Session() session: SessionContainer,
    @Args('createInvoiceInput') createInvoicesCreateInput: InvoicesCreateInput,
  ) {
    return this.invoiceService.create(session, createInvoicesCreateInput);
  }

  @Query(() => [Invoices], { name: 'invoices' })
  findAll(
    @Session() session: SessionContainer,
    @Args('where', { nullable: true }) where: InvoicesWhereInput = {},
    @Args('orderBy', { nullable: true })
    orderBy: InvoicesOrderByWithRelationAndSearchRelevanceInput,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
  ) {
    return this.invoiceService.findAll(session, where, orderBy, limit, offset);
  }

  @Query(() => Int, { name: 'invoiceCount' })
  count(
    @Session() session: SessionContainer,
    @Args('where', { nullable: true }) where: InvoicesWhereInput = {},
    @Args('orderBy', { nullable: true })
    orderBy: InvoicesOrderByWithRelationAndSearchRelevanceInput,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
  ) {
    return this.invoiceService.count(session, where, orderBy, limit, offset);
  }

  @Query(() => Invoices, { name: 'invoice' })
  findOne(
    @Session() session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.invoiceService.findOne(session, id);
  }

  @Mutation(() => Invoices)
  updateInvoices(
    @Session() session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
    @Args('updateInvoiceInput') updateInput: InvoicesUpdateInput,
  ) {
    return this.invoiceService.update(session, id, updateInput);
  }

  @Mutation(() => Invoices)
  removeInvoices(
    @Session() session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.invoiceService.remove(session, id);
  }

  @ResolveField(() => [invoice_items])
  invoice_items(
    @Session() session: SessionContainer,
    @Parent() { id }: Invoices,
    @Args('where', { nullable: true }) where: invoice_itemsWhereInput = {},
    @Args('orderBy', { nullable: true })
    orderBy: invoice_itemsOrderByRelationAggregateInput,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
  ) {
    return this.invoiceService.items(
      session,
      id,
      where,
      orderBy,
      limit,
      offset,
    );
  }
}
