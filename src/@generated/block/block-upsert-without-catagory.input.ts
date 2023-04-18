import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockUpdateWithoutCatagoryInput } from './block-update-without-catagory.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutCatagoryInput } from './block-create-without-catagory.input';

@InputType()
export class BlockUpsertWithoutCatagoryInput {

    @Field(() => BlockUpdateWithoutCatagoryInput, {nullable:false})
    @Type(() => BlockUpdateWithoutCatagoryInput)
    update!: BlockUpdateWithoutCatagoryInput;

    @Field(() => BlockCreateWithoutCatagoryInput, {nullable:false})
    @Type(() => BlockCreateWithoutCatagoryInput)
    create!: BlockCreateWithoutCatagoryInput;
}
