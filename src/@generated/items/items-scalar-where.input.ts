import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ItemsScalarWhereInput {

    @Field(() => [ItemsScalarWhereInput], {nullable:true})
    AND?: Array<ItemsScalarWhereInput>;

    @Field(() => [ItemsScalarWhereInput], {nullable:true})
    OR?: Array<ItemsScalarWhereInput>;

    @Field(() => [ItemsScalarWhereInput], {nullable:true})
    NOT?: Array<ItemsScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    quantity?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    unit_price?: FloatFilter;

    @Field(() => BigIntFilter, {nullable:true})
    catagory_id?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @HideField()
    block_id?: BigIntFilter;
}
