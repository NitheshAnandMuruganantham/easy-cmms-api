import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutItemsInput } from './block-create-without-items.input';

@InputType()
export class BlockCreateOrConnectWithoutItemsInput {

    @Field(() => BlockWhereUniqueInput, {nullable:false})
    @Type(() => BlockWhereUniqueInput)
    where!: BlockWhereUniqueInput;

    @Field(() => BlockCreateWithoutItemsInput, {nullable:false})
    @Type(() => BlockCreateWithoutItemsInput)
    create!: BlockCreateWithoutItemsInput;
}
