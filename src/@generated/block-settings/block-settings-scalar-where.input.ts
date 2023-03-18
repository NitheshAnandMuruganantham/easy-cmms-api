import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class block_settingsScalarWhereInput {

    @Field(() => [block_settingsScalarWhereInput], {nullable:true})
    AND?: Array<block_settingsScalarWhereInput>;

    @Field(() => [block_settingsScalarWhereInput], {nullable:true})
    OR?: Array<block_settingsScalarWhereInput>;

    @Field(() => [block_settingsScalarWhereInput], {nullable:true})
    NOT?: Array<block_settingsScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    block_id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
