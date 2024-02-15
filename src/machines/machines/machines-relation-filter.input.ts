import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereInput } from './machines-where.input';

@InputType()
export class MachinesRelationFilter {

    @Field(() => MachinesWhereInput, {nullable:true})
    is?: MachinesWhereInput;

    @Field(() => MachinesWhereInput, {nullable:true})
    isNot?: MachinesWhereInput;
}
