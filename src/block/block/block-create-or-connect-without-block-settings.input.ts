import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutBlock_settingsInput } from './block-create-without-block-settings.input';

@InputType()
export class BlockCreateOrConnectWithoutBlock_settingsInput {

    @Field(() => BlockWhereUniqueInput, {nullable:false})
    @Type(() => BlockWhereUniqueInput)
    where!: BlockWhereUniqueInput;

    @Field(() => BlockCreateWithoutBlock_settingsInput, {nullable:false})
    @Type(() => BlockCreateWithoutBlock_settingsInput)
    create!: BlockCreateWithoutBlock_settingsInput;
}
