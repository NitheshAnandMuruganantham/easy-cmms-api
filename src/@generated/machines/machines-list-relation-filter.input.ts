import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereInput } from './machines-where.input';

@InputType()
export class MachinesListRelationFilter {

    @Field(() => MachinesWhereInput, {nullable:true})
    every?: MachinesWhereInput;

    @Field(() => MachinesWhereInput, {nullable:true})
    some?: MachinesWhereInput;

    @Field(() => MachinesWhereInput, {nullable:true})
    none?: MachinesWhereInput;
}
