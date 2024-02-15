import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsCreateWithoutItemsInput } from './machines-items-create-without-items.input';
import { Type } from 'class-transformer';
import { machines_itemsCreateOrConnectWithoutItemsInput } from './machines-items-create-or-connect-without-items.input';
import { machines_itemsCreateManyItemsInputEnvelope } from './machines-items-create-many-items-input-envelope.input';
import { machines_itemsWhereUniqueInput } from './machines-items-where-unique.input';

@InputType()
export class machines_itemsCreateNestedManyWithoutItemsInput {

    @Field(() => [machines_itemsCreateWithoutItemsInput], {nullable:true})
    @Type(() => machines_itemsCreateWithoutItemsInput)
    create?: Array<machines_itemsCreateWithoutItemsInput>;

    @Field(() => [machines_itemsCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => machines_itemsCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<machines_itemsCreateOrConnectWithoutItemsInput>;

    @Field(() => machines_itemsCreateManyItemsInputEnvelope, {nullable:true})
    @Type(() => machines_itemsCreateManyItemsInputEnvelope)
    createMany?: machines_itemsCreateManyItemsInputEnvelope;

    @Field(() => [machines_itemsWhereUniqueInput], {nullable:true})
    @Type(() => machines_itemsWhereUniqueInput)
    connect?: Array<machines_itemsWhereUniqueInput>;
}
