import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutMachines_itemsInput } from './block-create-without-machines-items.input';

@InputType()
export class BlockCreateOrConnectWithoutMachines_itemsInput {

    @Field(() => BlockWhereUniqueInput, {nullable:false})
    @Type(() => BlockWhereUniqueInput)
    where!: BlockWhereUniqueInput;

    @Field(() => BlockCreateWithoutMachines_itemsInput, {nullable:false})
    @Type(() => BlockCreateWithoutMachines_itemsInput)
    create!: BlockCreateWithoutMachines_itemsInput;
}
