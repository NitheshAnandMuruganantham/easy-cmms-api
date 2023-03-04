import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class MaintenanceScalarWhereInput {

    @Field(() => [MaintenanceScalarWhereInput], {nullable:true})
    AND?: Array<MaintenanceScalarWhereInput>;

    @Field(() => [MaintenanceScalarWhereInput], {nullable:true})
    OR?: Array<MaintenanceScalarWhereInput>;

    @Field(() => [MaintenanceScalarWhereInput], {nullable:true})
    NOT?: Array<MaintenanceScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    photo?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    from?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    to?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    resolved?: BoolFilter;

    @Field(() => JsonFilter, {nullable:true})
    metadata?: JsonFilter;

    @Field(() => BoolFilter, {nullable:true})
    un_planned?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    elapsed?: DateTimeNullableFilter;

    @Field(() => BigIntFilter, {nullable:true})
    assignee_id?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    machine_id?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
