import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { MachinesUncheckedCreateNestedManyWithoutSectionInput } from '../machines/machines-unchecked-create-nested-many-without-section.input';

@InputType()
export class SectionsUncheckedCreateWithoutBlockInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => MachinesUncheckedCreateNestedManyWithoutSectionInput, {nullable:true})
    machines?: MachinesUncheckedCreateNestedManyWithoutSectionInput;
}
