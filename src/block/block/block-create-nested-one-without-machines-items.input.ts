import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutMachines_itemsInput } from './block-create-without-machines-items.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutMachines_itemsInput } from './block-create-or-connect-without-machines-items.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@InputType()
export class BlockCreateNestedOneWithoutMachines_itemsInput {

    @Field(() => BlockCreateWithoutMachines_itemsInput, {nullable:true})
    @Type(() => BlockCreateWithoutMachines_itemsInput)
    create?: BlockCreateWithoutMachines_itemsInput;

    @Field(() => BlockCreateOrConnectWithoutMachines_itemsInput, {nullable:true})
    @Type(() => BlockCreateOrConnectWithoutMachines_itemsInput)
    connectOrCreate?: BlockCreateOrConnectWithoutMachines_itemsInput;

    @Field(() => BlockWhereUniqueInput, {nullable:true})
    @Type(() => BlockWhereUniqueInput)
    connect?: BlockWhereUniqueInput;
}
