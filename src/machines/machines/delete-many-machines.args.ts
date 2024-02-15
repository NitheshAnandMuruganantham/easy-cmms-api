import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MachinesWhereInput } from './machines-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMachinesArgs {

    @Field(() => MachinesWhereInput, {nullable:true})
    @Type(() => MachinesWhereInput)
    where?: MachinesWhereInput;
}
