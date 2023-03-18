import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutBlock_settingsInput } from './block-create-without-block-settings.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutBlock_settingsInput } from './block-create-or-connect-without-block-settings.input';
import { BlockUpsertWithoutBlock_settingsInput } from './block-upsert-without-block-settings.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { BlockUpdateWithoutBlock_settingsInput } from './block-update-without-block-settings.input';

@InputType()
export class BlockUpdateOneRequiredWithoutBlock_settingsNestedInput {

    @Field(() => BlockCreateWithoutBlock_settingsInput, {nullable:true})
    @Type(() => BlockCreateWithoutBlock_settingsInput)
    create?: BlockCreateWithoutBlock_settingsInput;

    @Field(() => BlockCreateOrConnectWithoutBlock_settingsInput, {nullable:true})
    @Type(() => BlockCreateOrConnectWithoutBlock_settingsInput)
    connectOrCreate?: BlockCreateOrConnectWithoutBlock_settingsInput;

    @Field(() => BlockUpsertWithoutBlock_settingsInput, {nullable:true})
    @Type(() => BlockUpsertWithoutBlock_settingsInput)
    upsert?: BlockUpsertWithoutBlock_settingsInput;

    @Field(() => BlockWhereUniqueInput, {nullable:true})
    @Type(() => BlockWhereUniqueInput)
    connect?: BlockWhereUniqueInput;

    @Field(() => BlockUpdateWithoutBlock_settingsInput, {nullable:true})
    @Type(() => BlockUpdateWithoutBlock_settingsInput)
    update?: BlockUpdateWithoutBlock_settingsInput;
}
