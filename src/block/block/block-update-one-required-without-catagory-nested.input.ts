import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutCatagoryInput } from './block-create-without-catagory.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutCatagoryInput } from './block-create-or-connect-without-catagory.input';
import { BlockUpsertWithoutCatagoryInput } from './block-upsert-without-catagory.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { BlockUpdateWithoutCatagoryInput } from './block-update-without-catagory.input';

@InputType()
export class BlockUpdateOneRequiredWithoutCatagoryNestedInput {

    @Field(() => BlockCreateWithoutCatagoryInput, {nullable:true})
    @Type(() => BlockCreateWithoutCatagoryInput)
    create?: BlockCreateWithoutCatagoryInput;

    @Field(() => BlockCreateOrConnectWithoutCatagoryInput, {nullable:true})
    @Type(() => BlockCreateOrConnectWithoutCatagoryInput)
    connectOrCreate?: BlockCreateOrConnectWithoutCatagoryInput;

    @Field(() => BlockUpsertWithoutCatagoryInput, {nullable:true})
    @Type(() => BlockUpsertWithoutCatagoryInput)
    upsert?: BlockUpsertWithoutCatagoryInput;

    @Field(() => BlockWhereUniqueInput, {nullable:true})
    @Type(() => BlockWhereUniqueInput)
    connect?: BlockWhereUniqueInput;

    @Field(() => BlockUpdateWithoutCatagoryInput, {nullable:true})
    @Type(() => BlockUpdateWithoutCatagoryInput)
    update?: BlockUpdateWithoutCatagoryInput;
}
