import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { Type } from 'class-transformer';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class production_dataScalarWhereInput {

    @Field(() => [production_dataScalarWhereInput], {nullable:true})
    AND?: Array<production_dataScalarWhereInput>;

    @Field(() => [production_dataScalarWhereInput], {nullable:true})
    OR?: Array<production_dataScalarWhereInput>;

    @Field(() => [production_dataScalarWhereInput], {nullable:true})
    NOT?: Array<production_dataScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => JsonFilter, {nullable:true})
    @Type(() => JsonFilter)
    data?: JsonFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    from?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    to?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => BigIntFilter, {nullable:true})
    updated_by?: BigIntFilter;
}
