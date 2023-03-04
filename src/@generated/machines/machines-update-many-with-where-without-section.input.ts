import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesScalarWhereInput } from './machines-scalar-where.input';
import { Type } from 'class-transformer';
import { MachinesUpdateManyMutationInput } from './machines-update-many-mutation.input';

@InputType()
export class MachinesUpdateManyWithWhereWithoutSectionInput {

    @Field(() => MachinesScalarWhereInput, {nullable:false})
    @Type(() => MachinesScalarWhereInput)
    where!: MachinesScalarWhereInput;

    @Field(() => MachinesUpdateManyMutationInput, {nullable:false})
    @Type(() => MachinesUpdateManyMutationInput)
    data!: MachinesUpdateManyMutationInput;
}
