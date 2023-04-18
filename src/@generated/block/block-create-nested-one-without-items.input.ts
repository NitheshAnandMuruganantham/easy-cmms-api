import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutItemsInput } from './block-create-without-items.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutItemsInput } from './block-create-or-connect-without-items.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@InputType()
export class BlockCreateNestedOneWithoutItemsInput {

    @Field(() => BlockCreateWithoutItemsInput, {nullable:true})
    @Type(() => BlockCreateWithoutItemsInput)
    create?: BlockCreateWithoutItemsInput;

    @Field(() => BlockCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => BlockCreateOrConnectWithoutItemsInput)
    connectOrCreate?: BlockCreateOrConnectWithoutItemsInput;

    @Field(() => BlockWhereUniqueInput, {nullable:true})
    @Type(() => BlockWhereUniqueInput)
    connect?: BlockWhereUniqueInput;
}
