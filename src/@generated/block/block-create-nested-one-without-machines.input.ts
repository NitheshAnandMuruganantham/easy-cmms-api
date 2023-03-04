import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutMachinesInput } from './block-create-without-machines.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutMachinesInput } from './block-create-or-connect-without-machines.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@InputType()
export class BlockCreateNestedOneWithoutMachinesInput {

    @Field(() => BlockCreateWithoutMachinesInput, {nullable:true})
    @Type(() => BlockCreateWithoutMachinesInput)
    create?: BlockCreateWithoutMachinesInput;

    @Field(() => BlockCreateOrConnectWithoutMachinesInput, {nullable:true})
    @Type(() => BlockCreateOrConnectWithoutMachinesInput)
    connectOrCreate?: BlockCreateOrConnectWithoutMachinesInput;

    @Field(() => BlockWhereUniqueInput, {nullable:true})
    @Type(() => BlockWhereUniqueInput)
    connect?: BlockWhereUniqueInput;
}
