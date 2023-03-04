import { UseGuards } from '@nestjs/common/decorators';
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
  ItemCatagory,
  ItemCatagoryCreateInput,
  ItemCatagoryOrderByWithAggregationInput,
  ItemCatagoryUpdateInput,
  ItemCatagoryWhereInput,
} from 'src/@generated/item-catagory';

import {
  Items,
  ItemsOrderByWithAggregationInput,
  ItemsWhereInput,
} from 'src/@generated/items';
import { CatagoryCount } from 'src/@generated/prisma';
import { AuthGuard } from 'src/auth/auth.guard';
import { Session } from 'src/auth/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';

import { ItemCatagoryService } from './item-catagory.service';

@Resolver(() => ItemCatagory)
export class ItemCatagoryResolver {
  constructor(private readonly itemCatagoryService: ItemCatagoryService) {}

  @Mutation(() => ItemCatagory)
  createItemCatagory(
    @Session()
    session: SessionContainer,
    @Args('createItemCatagoryInput')
    createItemCatagoryInput: ItemCatagoryCreateInput,
  ) {
    return this.itemCatagoryService.create(session, createItemCatagoryInput);
  }

  @Query(() => [ItemCatagory], { name: 'itemCatagories' })
  findAll(
    @Session()
    session: SessionContainer,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
    @Args('orderBy', { nullable: true })
    orderBy: ItemCatagoryOrderByWithAggregationInput,
    @Args('where', { nullable: true }) where: ItemCatagoryWhereInput,
  ) {
    return this.itemCatagoryService.findAll(
      session,
      where,
      orderBy,
      limit,
      offset,
    );
  }

  @Query(() => ItemCatagory, { name: 'itemCatagory' })
  findOne(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.itemCatagoryService.findOne(session, id);
  }

  @Mutation(() => ItemCatagory)
  updateItemCatagory(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
    @Args('updateItemCatagoryInput')
    updateItemCatagoryInput: ItemCatagoryUpdateInput,
  ) {
    return this.itemCatagoryService.update(
      session,
      id,
      updateItemCatagoryInput,
    );
  }

  @Mutation(() => ItemCatagory)
  removeItemCatagory(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.itemCatagoryService.remove(session, id);
  }

  @ResolveField(() => [Items])
  items(
    @Session()
    session: SessionContainer,
    @Parent() { id }: ItemCatagory,
    @Args('where', { nullable: true }) where: ItemsWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: ItemsOrderByWithAggregationInput,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
  ) {
    return this.itemCatagoryService.items(
      session,
      id,
      where,
      orderBy,
      limit,
      offset,
    );
  }

  @ResolveField(() => CatagoryCount)
  countItems(
    @Session()
    session: SessionContainer,
    @Parent() { id }: ItemCatagory,
  ) {
    return this.itemCatagoryService.count(session, id);
  }
}
