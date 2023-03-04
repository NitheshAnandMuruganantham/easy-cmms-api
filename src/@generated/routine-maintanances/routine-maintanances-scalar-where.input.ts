import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class routine_maintanancesScalarWhereInput {

    @Field(() => [routine_maintanancesScalarWhereInput], {nullable:true})
    AND?: Array<routine_maintanancesScalarWhereInput>;

    @Field(() => [routine_maintanancesScalarWhereInput], {nullable:true})
    OR?: Array<routine_maintanancesScalarWhereInput>;

    @Field(() => [routine_maintanancesScalarWhereInput], {nullable:true})
    NOT?: Array<routine_maintanancesScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    cron?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    from?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    to?: StringFilter;

    @Field(() => BigIntFilter, {nullable:true})
    assignee_id?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    meachine_id?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
