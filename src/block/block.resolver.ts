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
  BlockCreateInput,
  BlockOrderByWithAggregationInput,
  BlockUpdateInput,
  Block,
  BlockWhereInput,
  BlockCount,
} from 'src/@generated/block';
import {
  Machines,
  MachinesOrderByWithAggregationInput,
  MachinesWhereInput,
} from 'src/@generated/machines';
import { AuthGuard } from 'src/auth/auth.guard';
import { Session } from 'src/auth/session.decorator';
import SessionContainer from '../types/session';
import { BlockService } from './block.service';
@Resolver(() => Block)
export class BlockResolver {
  constructor(private readonly blockService: BlockService) {}

  @Mutation(() => Block)
  createBlock(
    @Session()
    session: SessionContainer,
    @Args('createBlockInput') createBlockInput: BlockCreateInput,
  ) {
    return this.blockService.create(session, createBlockInput);
  }

  @Query(() => [Block], { name: 'blocks' })
  findAll(
    @Session()
    session: SessionContainer,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
    @Args('where', { nullable: true }) where: BlockWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: BlockOrderByWithAggregationInput,
  ) {
    return this.blockService.findAll(session, where, orderBy, limit, offset);
  }

  @Query(() => Int, { name: 'blocksCount' })
  count(
    @Session()
    session: SessionContainer,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
    @Args('where', { nullable: true }) where: BlockWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: BlockOrderByWithAggregationInput,
  ) {
    return this.blockService.count(session, where, orderBy, limit, offset);
  }

  @Query(() => Block, { name: 'block' })
  findOne(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.blockService.findOne(session, id);
  }

  @Mutation(() => Block)
  updateBlock(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
    @Args('updateBlockInput') updateBlockInput: BlockUpdateInput,
  ) {
    return this.blockService.update(session, id, updateBlockInput);
  }

  @Mutation(() => Block)
  removeBlock(
    @Session()
    session: SessionContainer,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.blockService.remove(session, id);
  }

  @ResolveField(() => [Machines], { name: 'machines' })
  machines(
    @Session()
    session: SessionContainer,
    @Parent() block: Block,
    @Args('where', { nullable: true }) where: MachinesWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy: MachinesOrderByWithAggregationInput,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
  ) {
    return this.blockService.machines(
      session,
      block.id,
      where,
      orderBy,
      limit,
      offset,
    );
  }

  @ResolveField(() => BlockCount, { name: '_count' })
  machinesCount(
    @Session()
    session: SessionContainer,
    @Parent() block: Block,
  ) {
    return this.blockService.machinesCount(session, block.id);
  }
}
