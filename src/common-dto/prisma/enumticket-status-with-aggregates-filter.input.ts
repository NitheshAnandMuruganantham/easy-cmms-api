import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ticket_status } from './ticket-status.enum';
import { NestedEnumticket_statusWithAggregatesFilter } from './nested-enumticket-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumticket_statusFilter } from './nested-enumticket-status-filter.input';

@InputType()
export class Enumticket_statusWithAggregatesFilter {
  @Field(() => ticket_status, { nullable: true })
  equals?: keyof typeof ticket_status;

  @Field(() => [ticket_status], { nullable: true })
  in?: Array<keyof typeof ticket_status>;

  @Field(() => [ticket_status], { nullable: true })
  notIn?: Array<keyof typeof ticket_status>;

  @Field(() => NestedEnumticket_statusWithAggregatesFilter, { nullable: true })
  not?: NestedEnumticket_statusWithAggregatesFilter;

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter;

  @Field(() => NestedEnumticket_statusFilter, { nullable: true })
  _min?: NestedEnumticket_statusFilter;

  @Field(() => NestedEnumticket_statusFilter, { nullable: true })
  _max?: NestedEnumticket_statusFilter;
}
