import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { MachinesCreateNestedOneWithoutRoutine_maintanancesInput } from '../machines/machines-create-nested-one-without-routine-maintanances.input';

@InputType()
export class routine_maintanancesCreateWithoutAssigneeInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    cron!: string;

    @Field(() => String, {nullable:false})
    from!: string;

    @Field(() => String, {nullable:false})
    to!: string;

    @Field(() => MachinesCreateNestedOneWithoutRoutine_maintanancesInput, {nullable:false})
    meachine!: MachinesCreateNestedOneWithoutRoutine_maintanancesInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
