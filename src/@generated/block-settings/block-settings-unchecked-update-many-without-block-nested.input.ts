import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { block_settingsCreateWithoutBlockInput } from './block-settings-create-without-block.input';
import { Type } from 'class-transformer';
import { block_settingsCreateOrConnectWithoutBlockInput } from './block-settings-create-or-connect-without-block.input';
import { block_settingsUpsertWithWhereUniqueWithoutBlockInput } from './block-settings-upsert-with-where-unique-without-block.input';
import { block_settingsCreateManyBlockInputEnvelope } from './block-settings-create-many-block-input-envelope.input';
import { block_settingsWhereUniqueInput } from './block-settings-where-unique.input';
import { block_settingsUpdateWithWhereUniqueWithoutBlockInput } from './block-settings-update-with-where-unique-without-block.input';
import { block_settingsUpdateManyWithWhereWithoutBlockInput } from './block-settings-update-many-with-where-without-block.input';
import { block_settingsScalarWhereInput } from './block-settings-scalar-where.input';

@InputType()
export class block_settingsUncheckedUpdateManyWithoutBlockNestedInput {

    @Field(() => [block_settingsCreateWithoutBlockInput], {nullable:true})
    @Type(() => block_settingsCreateWithoutBlockInput)
    create?: Array<block_settingsCreateWithoutBlockInput>;

    @Field(() => [block_settingsCreateOrConnectWithoutBlockInput], {nullable:true})
    @Type(() => block_settingsCreateOrConnectWithoutBlockInput)
    connectOrCreate?: Array<block_settingsCreateOrConnectWithoutBlockInput>;

    @Field(() => [block_settingsUpsertWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => block_settingsUpsertWithWhereUniqueWithoutBlockInput)
    upsert?: Array<block_settingsUpsertWithWhereUniqueWithoutBlockInput>;

    @Field(() => block_settingsCreateManyBlockInputEnvelope, {nullable:true})
    @Type(() => block_settingsCreateManyBlockInputEnvelope)
    createMany?: block_settingsCreateManyBlockInputEnvelope;

    @Field(() => [block_settingsWhereUniqueInput], {nullable:true})
    @Type(() => block_settingsWhereUniqueInput)
    set?: Array<block_settingsWhereUniqueInput>;

    @Field(() => [block_settingsWhereUniqueInput], {nullable:true})
    @Type(() => block_settingsWhereUniqueInput)
    disconnect?: Array<block_settingsWhereUniqueInput>;

    @Field(() => [block_settingsWhereUniqueInput], {nullable:true})
    @Type(() => block_settingsWhereUniqueInput)
    delete?: Array<block_settingsWhereUniqueInput>;

    @Field(() => [block_settingsWhereUniqueInput], {nullable:true})
    @Type(() => block_settingsWhereUniqueInput)
    connect?: Array<block_settingsWhereUniqueInput>;

    @Field(() => [block_settingsUpdateWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => block_settingsUpdateWithWhereUniqueWithoutBlockInput)
    update?: Array<block_settingsUpdateWithWhereUniqueWithoutBlockInput>;

    @Field(() => [block_settingsUpdateManyWithWhereWithoutBlockInput], {nullable:true})
    @Type(() => block_settingsUpdateManyWithWhereWithoutBlockInput)
    updateMany?: Array<block_settingsUpdateManyWithWhereWithoutBlockInput>;

    @Field(() => [block_settingsScalarWhereInput], {nullable:true})
    @Type(() => block_settingsScalarWhereInput)
    deleteMany?: Array<block_settingsScalarWhereInput>;
}
