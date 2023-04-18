import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { UsersRelationFilter } from '../users/users-relation-filter.input';
import { MachinesRelationFilter } from '../machines/machines-relation-filter.input';
import { BlockRelationFilter } from '../block/block-relation-filter.input';

@InputType()
export class routine_maintanancesWhereInput {

    @Field(() => [routine_maintanancesWhereInput], {nullable:true})
    AND?: Array<routine_maintanancesWhereInput>;

    @Field(() => [routine_maintanancesWhereInput], {nullable:true})
    OR?: Array<routine_maintanancesWhereInput>;

    @Field(() => [routine_maintanancesWhereInput], {nullable:true})
    NOT?: Array<routine_maintanancesWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    cron?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    duration?: IntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    assignee_id?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    meachine_id?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @HideField()
    block_id?: BigIntFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    assignee?: UsersRelationFilter;

    @Field(() => MachinesRelationFilter, {nullable:true})
    meachine?: MachinesRelationFilter;

    @HideField()
    block?: BlockRelationFilter;
}
