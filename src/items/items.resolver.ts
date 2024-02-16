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
import { catagory } from 'src/common-dto/catagory';
import {
  Items,
  ItemsCreateInput,
  ItemsOrderByWithRelationInput,
  ItemsUpdateInput,
  ItemsWhereInput,
} from 'src/items/items';
import {
  Replacements,
  ReplacementsOrderByWithRelationInput,
  ReplacementsWhereInput,
} from 'src/replacements/replacements';
import { Session } from 'src/auth/session.decorator';
import SessionContainer from '../types/session';
import { ItemsService } from './items.service';

@Resolver(() => Items)
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Mutation(() => Items)
  createItem(
    @Session() session: SessionContainer,
    @Args('createItemInput') createItemInput: ItemsCreateInput,
  ) {
    return this.itemsService.create(session, createItemInput);
  }

  @Query(() => [Items], { name: 'items' })
  findAll(
    @Session() session: SessionContainer,
    @Args('where', { nullable: true }) where: ItemsWhereInput = {},
    @Args('orderBy', { nullable: true }) orderBy: ItemsOrderByWithRelationInput,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
  ) {
    return this.itemsService.findAll(session, where, orderBy, limit, offset);
  }

  @Query(() => Int, { name: 'itemsCount' })
  count(
    @Session() session: SessionContainer,
    @Args('where', { nullable: true }) where: ItemsWhereInput = {},
    @Args('orderBy', { nullable: true }) orderBy: ItemsOrderByWithRelationInput,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
  ) {
    return this.itemsService.count(session, where, orderBy, limit, offset);
  }

  @Query(() => Items, { name: 'item' })
  findOne(
    @Session() session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.itemsService.findOne(session, id);
  }

  @Mutation(() => Items)
  updateItem(
    @Session() session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
    @Args('updateItemInput') updateItemInput: ItemsUpdateInput,
  ) {
    return this.itemsService.update(session, id, updateItemInput);
  }

  @Mutation(() => Items)
  removeItem(
    @Session() session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.itemsService.remove(session, id);
  }

  @ResolveField(() => catagory)
  catagory(@Session() session: SessionContainer, @Parent() { id }: Items) {
    return this.itemsService.catagory(session, id);
  }

  @ResolveField(() => [Replacements])
  replacements(
    @Session() session: SessionContainer,
    @Parent() { id }: Items,
    @Args('where', { nullable: true }) where: ReplacementsWhereInput = {},
    @Args('orderBy', { nullable: true })
    orderBy: ReplacementsOrderByWithRelationInput,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
  ) {
    return this.itemsService.replacements(
      session,
      id,
      where,
      orderBy,
      limit,
      offset,
    );
  }
}
