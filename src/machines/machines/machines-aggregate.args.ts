import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MachinesWhereInput } from './machines-where.input';
import { Type } from 'class-transformer';
import { MachinesOrderByWithRelationAndSearchRelevanceInput } from './machines-order-by-with-relation-and-search-relevance.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MachinesCountAggregateInput } from './machines-count-aggregate.input';
import { MachinesAvgAggregateInput } from './machines-avg-aggregate.input';
import { MachinesSumAggregateInput } from './machines-sum-aggregate.input';
import { MachinesMinAggregateInput } from './machines-min-aggregate.input';
import { MachinesMaxAggregateInput } from './machines-max-aggregate.input';

@ArgsType()
export class MachinesAggregateArgs {
  @Field(() => MachinesWhereInput, { nullable: true })
  @Type(() => MachinesWhereInput)
  where?: MachinesWhereInput;

  @Field(() => [MachinesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<MachinesOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => MachinesWhereUniqueInput, { nullable: true })
  cursor?: MachinesWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => MachinesCountAggregateInput, { nullable: true })
  _count?: MachinesCountAggregateInput;

  @Field(() => MachinesAvgAggregateInput, { nullable: true })
  _avg?: MachinesAvgAggregateInput;

  @Field(() => MachinesSumAggregateInput, { nullable: true })
  _sum?: MachinesSumAggregateInput;

  @Field(() => MachinesMinAggregateInput, { nullable: true })
  _min?: MachinesMinAggregateInput;

  @Field(() => MachinesMaxAggregateInput, { nullable: true })
  _max?: MachinesMaxAggregateInput;
}
