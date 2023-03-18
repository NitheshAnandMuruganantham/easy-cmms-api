import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { block_settingsUpdateManyMutationInput } from '../block-settings/block-settings-update-many-mutation.input';
import { Type } from 'class-transformer';
import { block_settingsWhereInput } from '../block-settings/block-settings-where.input';

@ArgsType()
export class UpdateManyblockSettingsArgs {

    @Field(() => block_settingsUpdateManyMutationInput, {nullable:false})
    @Type(() => block_settingsUpdateManyMutationInput)
    data!: block_settingsUpdateManyMutationInput;

    @Field(() => block_settingsWhereInput, {nullable:true})
    @Type(() => block_settingsWhereInput)
    where?: block_settingsWhereInput;
}
