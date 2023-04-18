import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { Enumticket_statusFilter } from '../prisma/enumticket-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TicketScalarWhereInput {

    @Field(() => [TicketScalarWhereInput], {nullable:true})
    AND?: Array<TicketScalarWhereInput>;

    @Field(() => [TicketScalarWhereInput], {nullable:true})
    OR?: Array<TicketScalarWhereInput>;

    @Field(() => [TicketScalarWhereInput], {nullable:true})
    NOT?: Array<TicketScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    photos?: StringFilter;

    @HideField()
    user_id?: BigIntFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    maintenance_id?: BigIntNullableFilter;

    @Field(() => BigIntFilter, {nullable:true})
    machine_id?: BigIntFilter;

    @Field(() => Enumticket_statusFilter, {nullable:true})
    status?: Enumticket_statusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @HideField()
    block_id?: BigIntFilter;
}
