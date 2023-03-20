import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CatagoryRelationFilter } from '../prisma/catagory-relation-filter.input';
import { ReplacementsListRelationFilter } from '../replacements/replacements-list-relation-filter.input';

@InputType()
export class ItemsWhereInput {

    @Field(() => [ItemsWhereInput], {nullable:true})
    AND?: Array<ItemsWhereInput>;

    @Field(() => [ItemsWhereInput], {nullable:true})
    OR?: Array<ItemsWhereInput>;

    @Field(() => [ItemsWhereInput], {nullable:true})
    NOT?: Array<ItemsWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    quantity?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    unit_price?: FloatFilter;

    @Field(() => BigIntFilter, {nullable:true})
    catagory_id?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => CatagoryRelationFilter, {nullable:true})
    catagory?: CatagoryRelationFilter;

    @Field(() => ReplacementsListRelationFilter, {nullable:true})
    replacements?: ReplacementsListRelationFilter;
}
