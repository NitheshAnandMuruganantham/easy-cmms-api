import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class machine_catagoryScalarWhereInput {

    @Field(() => [machine_catagoryScalarWhereInput], {nullable:true})
    AND?: Array<machine_catagoryScalarWhereInput>;

    @Field(() => [machine_catagoryScalarWhereInput], {nullable:true})
    OR?: Array<machine_catagoryScalarWhereInput>;

    @Field(() => [machine_catagoryScalarWhereInput], {nullable:true})
    NOT?: Array<machine_catagoryScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @HideField()
    block_id?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
