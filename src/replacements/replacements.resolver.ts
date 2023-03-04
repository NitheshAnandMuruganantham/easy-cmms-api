import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Items } from 'src/@generated/items';
import {
  Replacements,
  ReplacementsCreateInput,
  ReplacementsOrderByWithRelationInput,
  ReplacementsUpdateInput,
  ReplacementsWhereInput,
} from 'src/@generated/replacements';
import { Maintenance } from 'src/@generated/maintenance';
import { ReplacementsService } from './replacements.service';
import { Session } from 'src/auth/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Resolver(() => Replacements)
export class ReplacementsResolver {
  constructor(private readonly replacementsService: ReplacementsService) {}

  @Mutation(() => Replacements)
  createReplacement(
    @Session()
    session: SessionContainer,
    @Args('createReplacementInput')
    createReplacementInput: ReplacementsCreateInput,
  ) {
    return this.replacementsService.create(session, createReplacementInput);
  }

  @Query(() => [Replacements], { name: 'replacements' })
  findAll(
    @Session()
    session: SessionContainer,
    @Args('where', { nullable: true }) where: ReplacementsWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: ReplacementsOrderByWithRelationInput,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
  ) {
    return this.replacementsService.findAll(
      session,
      where,
      orderBy,
      limit,
      offset,
    );
  }

  @Query(() => Replacements, { name: 'replacement' })
  findOne(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.replacementsService.findOne(session, id);
  }

  @Mutation(() => Replacements)
  updateReplacement(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
    @Args('updateReplacementInput')
    updateReplacementInput: ReplacementsUpdateInput,
  ) {
    return this.replacementsService.update(session, id, updateReplacementInput);
  }

  @Mutation(() => Replacements)
  removeReplacement(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.replacementsService.remove(session, id);
  }

  @ResolveField(() => Items)
  item(
    @Session()
    session: SessionContainer,
    @Parent() { item_id }: Replacements,
  ) {
    return this.replacementsService.item(session, item_id);
  }

  @ResolveField(() => Maintenance)
  maintenance(
    @Session()
    session: SessionContainer,
    @Parent() { maintanance_id }: Replacements,
  ) {
    this.replacementsService.maintenance(session, maintanance_id);
  }
}
