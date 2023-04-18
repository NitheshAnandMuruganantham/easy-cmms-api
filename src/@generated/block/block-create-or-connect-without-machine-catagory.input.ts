import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutMachine_catagoryInput } from './block-create-without-machine-catagory.input';

@InputType()
export class BlockCreateOrConnectWithoutMachine_catagoryInput {

    @Field(() => BlockWhereUniqueInput, {nullable:false})
    @Type(() => BlockWhereUniqueInput)
    where!: BlockWhereUniqueInput;

    @Field(() => BlockCreateWithoutMachine_catagoryInput, {nullable:false})
    @Type(() => BlockCreateWithoutMachine_catagoryInput)
    create!: BlockCreateWithoutMachine_catagoryInput;
}
