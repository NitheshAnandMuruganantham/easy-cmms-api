import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesCreateWithoutBlockInput } from './machines-create-without-block.input';

@InputType()
export class MachinesCreateOrConnectWithoutBlockInput {

    @Field(() => MachinesWhereUniqueInput, {nullable:false})
    @Type(() => MachinesWhereUniqueInput)
    where!: MachinesWhereUniqueInput;

    @Field(() => MachinesCreateWithoutBlockInput, {nullable:false})
    @Type(() => MachinesCreateWithoutBlockInput)
    create!: MachinesCreateWithoutBlockInput;
}
