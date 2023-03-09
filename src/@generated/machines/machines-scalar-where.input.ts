import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MachinesScalarWhereInput {

    @Field(() => [MachinesScalarWhereInput], {nullable:true})
    AND?: Array<MachinesScalarWhereInput>;

    @Field(() => [MachinesScalarWhereInput], {nullable:true})
    OR?: Array<MachinesScalarWhereInput>;

    @Field(() => [MachinesScalarWhereInput], {nullable:true})
    NOT?: Array<MachinesScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BigIntFilter, {nullable:true})
    section_id?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    block_id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    label?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    profile?: JsonFilter;

    @Field(() => IntFilter, {nullable:true})
    priority?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => BigIntFilter, {nullable:true})
    machine_catagory_id?: BigIntFilter;
}
