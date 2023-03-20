import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { UsersRelationFilter } from '../users/users-relation-filter.input';
import { BlockRelationFilter } from '../block/block-relation-filter.input';

@InputType()
export class production_dataWhereInput {

    @Field(() => [production_dataWhereInput], {nullable:true})
    AND?: Array<production_dataWhereInput>;

    @Field(() => [production_dataWhereInput], {nullable:true})
    OR?: Array<production_dataWhereInput>;

    @Field(() => [production_dataWhereInput], {nullable:true})
    NOT?: Array<production_dataWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    total_run_time?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    total_down_time?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    target_production?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    actual_production?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    from?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    to?: DateTimeFilter;

    @Field(() => BigIntFilter, {nullable:true})
    updated_by?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    blockId?: BigIntNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    updatedBy?: UsersRelationFilter;

    @Field(() => BlockRelationFilter, {nullable:true})
    Block?: BlockRelationFilter;
}
