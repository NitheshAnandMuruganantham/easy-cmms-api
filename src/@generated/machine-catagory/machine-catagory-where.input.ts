import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MachinesListRelationFilter } from '../machines/machines-list-relation-filter.input';

@InputType()
export class machine_catagoryWhereInput {

    @Field(() => [machine_catagoryWhereInput], {nullable:true})
    AND?: Array<machine_catagoryWhereInput>;

    @Field(() => [machine_catagoryWhereInput], {nullable:true})
    OR?: Array<machine_catagoryWhereInput>;

    @Field(() => [machine_catagoryWhereInput], {nullable:true})
    NOT?: Array<machine_catagoryWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => MachinesListRelationFilter, {nullable:true})
    machines?: MachinesListRelationFilter;
}
