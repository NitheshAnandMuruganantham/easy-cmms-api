import { UseGuards } from '@nestjs/common/decorators';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { Session } from 'src/auth/session.decorator';
import SessionContainer from '../types/session';
import { ProductionService } from './production.service';
import {
  production_data,
  production_dataCreateInput,
  production_dataOrderByWithAggregationInput,
  production_dataUpdateInput,
  production_dataWhereInput,
} from 'src/@generated/production-data';

@Resolver(() => production_data)
export class ProductionDataResolver {
  constructor(private readonly productionService: ProductionService) {}

  @Mutation(() => production_data)
  createProduction(
    @Session()
    session: SessionContainer,
    @Args('createProductionInput') createBlockInput: production_dataCreateInput,
  ) {
    return this.productionService.create(session, createBlockInput);
  }

  @Query(() => [production_data], { name: 'productionData' })
  findAll(
    @Session()
    session: SessionContainer,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
    @Args('where', { nullable: true }) where: production_dataWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: production_dataOrderByWithAggregationInput,
  ) {
    return this.productionService.findAll(
      session,
      where,
      orderBy,
      limit,
      offset,
    );
  }

  @Query(() => Int, { name: 'productionDataCount' })
  count(
    @Session()
    session: SessionContainer,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
    @Args('where', { nullable: true }) where: production_dataWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: production_dataOrderByWithAggregationInput,
  ) {
    return this.productionService.count(session, where, orderBy, limit, offset);
  }

  @Query(() => production_data, { name: 'production' })
  findOne(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.productionService.findOne(session, id);
  }

  @Mutation(() => production_data)
  updateProduction(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
    @Args('updateProductionInput') updateBlockInput: production_dataUpdateInput,
  ) {
    return this.productionService.update(session, id, updateBlockInput);
  }

  @Mutation(() => production_data)
  removeProductionData(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.productionService.remove(session, id);
  }
}
