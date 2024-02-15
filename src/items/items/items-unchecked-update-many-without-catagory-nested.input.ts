import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutCatagoryInput } from './items-create-without-catagory.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutCatagoryInput } from './items-create-or-connect-without-catagory.input';
import { ItemsUpsertWithWhereUniqueWithoutCatagoryInput } from './items-upsert-with-where-unique-without-catagory.input';
import { ItemsCreateManyCatagoryInputEnvelope } from './items-create-many-catagory-input-envelope.input';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateWithWhereUniqueWithoutCatagoryInput } from './items-update-with-where-unique-without-catagory.input';
import { ItemsUpdateManyWithWhereWithoutCatagoryInput } from './items-update-many-with-where-without-catagory.input';
import { ItemsScalarWhereInput } from './items-scalar-where.input';

@InputType()
export class ItemsUncheckedUpdateManyWithoutCatagoryNestedInput {

    @Field(() => [ItemsCreateWithoutCatagoryInput], {nullable:true})
    @Type(() => ItemsCreateWithoutCatagoryInput)
    create?: Array<ItemsCreateWithoutCatagoryInput>;

    @Field(() => [ItemsCreateOrConnectWithoutCatagoryInput], {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutCatagoryInput)
    connectOrCreate?: Array<ItemsCreateOrConnectWithoutCatagoryInput>;

    @Field(() => [ItemsUpsertWithWhereUniqueWithoutCatagoryInput], {nullable:true})
    @Type(() => ItemsUpsertWithWhereUniqueWithoutCatagoryInput)
    upsert?: Array<ItemsUpsertWithWhereUniqueWithoutCatagoryInput>;

    @Field(() => ItemsCreateManyCatagoryInputEnvelope, {nullable:true})
    @Type(() => ItemsCreateManyCatagoryInputEnvelope)
    createMany?: ItemsCreateManyCatagoryInputEnvelope;

    @Field(() => [ItemsWhereUniqueInput], {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    set?: Array<ItemsWhereUniqueInput>;

    @Field(() => [ItemsWhereUniqueInput], {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    disconnect?: Array<ItemsWhereUniqueInput>;

    @Field(() => [ItemsWhereUniqueInput], {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    delete?: Array<ItemsWhereUniqueInput>;

    @Field(() => [ItemsWhereUniqueInput], {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Array<ItemsWhereUniqueInput>;

    @Field(() => [ItemsUpdateWithWhereUniqueWithoutCatagoryInput], {nullable:true})
    @Type(() => ItemsUpdateWithWhereUniqueWithoutCatagoryInput)
    update?: Array<ItemsUpdateWithWhereUniqueWithoutCatagoryInput>;

    @Field(() => [ItemsUpdateManyWithWhereWithoutCatagoryInput], {nullable:true})
    @Type(() => ItemsUpdateManyWithWhereWithoutCatagoryInput)
    updateMany?: Array<ItemsUpdateManyWithWhereWithoutCatagoryInput>;

    @Field(() => [ItemsScalarWhereInput], {nullable:true})
    @Type(() => ItemsScalarWhereInput)
    deleteMany?: Array<ItemsScalarWhereInput>;
}
