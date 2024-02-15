import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockUpdateWithoutBlock_settingsInput } from './block-update-without-block-settings.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutBlock_settingsInput } from './block-create-without-block-settings.input';

@InputType()
export class BlockUpsertWithoutBlock_settingsInput {

    @Field(() => BlockUpdateWithoutBlock_settingsInput, {nullable:false})
    @Type(() => BlockUpdateWithoutBlock_settingsInput)
    update!: BlockUpdateWithoutBlock_settingsInput;

    @Field(() => BlockCreateWithoutBlock_settingsInput, {nullable:false})
    @Type(() => BlockCreateWithoutBlock_settingsInput)
    create!: BlockCreateWithoutBlock_settingsInput;
}
