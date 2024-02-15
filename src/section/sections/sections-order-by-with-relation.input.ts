import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../common-dto/prisma/sort-order.enum';
import { MachinesOrderByRelationAggregateInput } from '../../machines/machines/machines-order-by-relation-aggregate.input';

@InputType()
export class SectionsOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => MachinesOrderByRelationAggregateInput, { nullable: true })
  machines?: MachinesOrderByRelationAggregateInput;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated_at?: keyof typeof SortOrder;
}
