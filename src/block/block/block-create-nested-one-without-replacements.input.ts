import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutReplacementsInput } from './block-create-without-replacements.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutReplacementsInput } from './block-create-or-connect-without-replacements.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@InputType()
export class BlockCreateNestedOneWithoutReplacementsInput {

    @Field(() => BlockCreateWithoutReplacementsInput, {nullable:true})
    @Type(() => BlockCreateWithoutReplacementsInput)
    create?: BlockCreateWithoutReplacementsInput;

    @Field(() => BlockCreateOrConnectWithoutReplacementsInput, {nullable:true})
    @Type(() => BlockCreateOrConnectWithoutReplacementsInput)
    connectOrCreate?: BlockCreateOrConnectWithoutReplacementsInput;

    @Field(() => BlockWhereUniqueInput, {nullable:true})
    @Type(() => BlockWhereUniqueInput)
    connect?: BlockWhereUniqueInput;
}
