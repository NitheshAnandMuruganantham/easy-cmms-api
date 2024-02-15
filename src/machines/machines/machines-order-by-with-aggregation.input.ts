import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { MachinesCountOrderByAggregateInput } from './machines-count-order-by-aggregate.input';
import { MachinesAvgOrderByAggregateInput } from './machines-avg-order-by-aggregate.input';
import { MachinesMaxOrderByAggregateInput } from './machines-max-order-by-aggregate.input';
import { MachinesMinOrderByAggregateInput } from './machines-min-order-by-aggregate.input';
import { MachinesSumOrderByAggregateInput } from './machines-sum-order-by-aggregate.input';

@InputType()
export class MachinesOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  section_id?: keyof typeof SortOrder;

  @HideField()
  block_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  label?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  profile?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  priority?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  machine_catagory_id?: keyof typeof SortOrder;

  @Field(() => MachinesCountOrderByAggregateInput, { nullable: true })
  _count?: MachinesCountOrderByAggregateInput;

  @Field(() => MachinesAvgOrderByAggregateInput, { nullable: true })
  _avg?: MachinesAvgOrderByAggregateInput;

  @Field(() => MachinesMaxOrderByAggregateInput, { nullable: true })
  _max?: MachinesMaxOrderByAggregateInput;

  @Field(() => MachinesMinOrderByAggregateInput, { nullable: true })
  _min?: MachinesMinOrderByAggregateInput;

  @Field(() => MachinesSumOrderByAggregateInput, { nullable: true })
  _sum?: MachinesSumOrderByAggregateInput;
}
