import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutItemCatagoryInput } from './items-create-without-item-catagory.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutItemCatagoryInput } from './items-create-or-connect-without-item-catagory.input';
import { ItemsCreateManyItemCatagoryInputEnvelope } from './items-create-many-item-catagory-input-envelope.input';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsUncheckedCreateNestedManyWithoutItemCatagoryInput {

    @Field(() => [ItemsCreateWithoutItemCatagoryInput], {nullable:true})
    @Type(() => ItemsCreateWithoutItemCatagoryInput)
    create?: Array<ItemsCreateWithoutItemCatagoryInput>;

    @Field(() => [ItemsCreateOrConnectWithoutItemCatagoryInput], {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutItemCatagoryInput)
    connectOrCreate?: Array<ItemsCreateOrConnectWithoutItemCatagoryInput>;

    @Field(() => ItemsCreateManyItemCatagoryInputEnvelope, {nullable:true})
    @Type(() => ItemsCreateManyItemCatagoryInputEnvelope)
    createMany?: ItemsCreateManyItemCatagoryInputEnvelope;

    @Field(() => [ItemsWhereUniqueInput], {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Array<ItemsWhereUniqueInput>;
}
