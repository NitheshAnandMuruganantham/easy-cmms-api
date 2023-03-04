import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MachinesUpdateInput } from './machines-update.input';
import { Type } from 'class-transformer';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';

@ArgsType()
export class UpdateOneMachinesArgs {

    @Field(() => MachinesUpdateInput, {nullable:false})
    @Type(() => MachinesUpdateInput)
    data!: MachinesUpdateInput;

    @Field(() => MachinesWhereUniqueInput, {nullable:false})
    @Type(() => MachinesWhereUniqueInput)
    where!: MachinesWhereUniqueInput;
}
