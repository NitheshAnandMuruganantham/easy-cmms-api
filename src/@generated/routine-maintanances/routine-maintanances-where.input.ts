import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UsersRelationFilter } from '../users/users-relation-filter.input';
import { MachinesRelationFilter } from '../machines/machines-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

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

    @Field(() => StringFilter, {nullable:true})
    from?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    to?: StringFilter;

    @Field(() => BigIntFilter, {nullable:true})
    assignee_id?: BigIntFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    assignee?: UsersRelationFilter;

    @Field(() => BigIntFilter, {nullable:true})
    meachine_id?: BigIntFilter;

    @Field(() => MachinesRelationFilter, {nullable:true})
    meachine?: MachinesRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
