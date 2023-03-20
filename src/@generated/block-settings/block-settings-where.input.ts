import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BlockRelationFilter } from '../block/block-relation-filter.input';

@InputType()
export class block_settingsWhereInput {

    @Field(() => [block_settingsWhereInput], {nullable:true})
    AND?: Array<block_settingsWhereInput>;

    @Field(() => [block_settingsWhereInput], {nullable:true})
    OR?: Array<block_settingsWhereInput>;

    @Field(() => [block_settingsWhereInput], {nullable:true})
    NOT?: Array<block_settingsWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    block_id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    value?: JsonFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => BlockRelationFilter, {nullable:true})
    block?: BlockRelationFilter;
}
