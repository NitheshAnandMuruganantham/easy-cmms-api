import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ItemsListRelationFilter } from '../items/items-list-relation-filter.input';

@InputType()
export class catagoryWhereInput {

    @Field(() => [catagoryWhereInput], {nullable:true})
    AND?: Array<catagoryWhereInput>;

    @Field(() => [catagoryWhereInput], {nullable:true})
    OR?: Array<catagoryWhereInput>;

    @Field(() => [catagoryWhereInput], {nullable:true})
    NOT?: Array<catagoryWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => ItemsListRelationFilter, {nullable:true})
    items?: ItemsListRelationFilter;
}
