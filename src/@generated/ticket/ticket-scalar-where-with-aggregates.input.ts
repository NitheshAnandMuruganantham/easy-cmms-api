import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { BigIntNullableWithAggregatesFilter } from '../prisma/big-int-nullable-with-aggregates-filter.input';
import { Enumticket_statusWithAggregatesFilter } from '../prisma/enumticket-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TicketScalarWhereWithAggregatesInput {

    @Field(() => [TicketScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TicketScalarWhereWithAggregatesInput>;

    @Field(() => [TicketScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TicketScalarWhereWithAggregatesInput>;

    @Field(() => [TicketScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TicketScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    photos?: StringWithAggregatesFilter;

    @HideField()
    user_id?: BigIntWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    maintenance_id?: BigIntNullableWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    machine_id?: BigIntWithAggregatesFilter;

    @Field(() => Enumticket_statusWithAggregatesFilter, {nullable:true})
    status?: Enumticket_statusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @HideField()
    block_id?: BigIntWithAggregatesFilter;
}
