import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MachinesUpdateManyMutationInput } from './machines-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MachinesWhereInput } from './machines-where.input';

@ArgsType()
export class UpdateManyMachinesArgs {

    @Field(() => MachinesUpdateManyMutationInput, {nullable:false})
    @Type(() => MachinesUpdateManyMutationInput)
    data!: MachinesUpdateManyMutationInput;

    @Field(() => MachinesWhereInput, {nullable:true})
    @Type(() => MachinesWhereInput)
    where?: MachinesWhereInput;
}
