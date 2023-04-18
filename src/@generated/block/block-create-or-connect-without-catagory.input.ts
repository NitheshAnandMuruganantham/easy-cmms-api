import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutCatagoryInput } from './block-create-without-catagory.input';

@InputType()
export class BlockCreateOrConnectWithoutCatagoryInput {

    @Field(() => BlockWhereUniqueInput, {nullable:false})
    @Type(() => BlockWhereUniqueInput)
    where!: BlockWhereUniqueInput;

    @Field(() => BlockCreateWithoutCatagoryInput, {nullable:false})
    @Type(() => BlockCreateWithoutCatagoryInput)
    create!: BlockCreateWithoutCatagoryInput;
}
