import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsCreateWithoutBlockInput } from './invoice-items-create-without-block.input';
import { Type } from 'class-transformer';
import { invoice_itemsCreateOrConnectWithoutBlockInput } from './invoice-items-create-or-connect-without-block.input';
import { invoice_itemsUpsertWithWhereUniqueWithoutBlockInput } from './invoice-items-upsert-with-where-unique-without-block.input';
import { invoice_itemsCreateManyBlockInputEnvelope } from './invoice-items-create-many-block-input-envelope.input';
import { invoice_itemsWhereUniqueInput } from './invoice-items-where-unique.input';
import { invoice_itemsUpdateWithWhereUniqueWithoutBlockInput } from './invoice-items-update-with-where-unique-without-block.input';
import { invoice_itemsUpdateManyWithWhereWithoutBlockInput } from './invoice-items-update-many-with-where-without-block.input';
import { invoice_itemsScalarWhereInput } from './invoice-items-scalar-where.input';

@InputType()
export class invoice_itemsUncheckedUpdateManyWithoutBlockNestedInput {

    @Field(() => [invoice_itemsCreateWithoutBlockInput], {nullable:true})
    @Type(() => invoice_itemsCreateWithoutBlockInput)
    create?: Array<invoice_itemsCreateWithoutBlockInput>;

    @Field(() => [invoice_itemsCreateOrConnectWithoutBlockInput], {nullable:true})
    @Type(() => invoice_itemsCreateOrConnectWithoutBlockInput)
    connectOrCreate?: Array<invoice_itemsCreateOrConnectWithoutBlockInput>;

    @Field(() => [invoice_itemsUpsertWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => invoice_itemsUpsertWithWhereUniqueWithoutBlockInput)
    upsert?: Array<invoice_itemsUpsertWithWhereUniqueWithoutBlockInput>;

    @Field(() => invoice_itemsCreateManyBlockInputEnvelope, {nullable:true})
    @Type(() => invoice_itemsCreateManyBlockInputEnvelope)
    createMany?: invoice_itemsCreateManyBlockInputEnvelope;

    @Field(() => [invoice_itemsWhereUniqueInput], {nullable:true})
    @Type(() => invoice_itemsWhereUniqueInput)
    set?: Array<invoice_itemsWhereUniqueInput>;

    @Field(() => [invoice_itemsWhereUniqueInput], {nullable:true})
    @Type(() => invoice_itemsWhereUniqueInput)
    disconnect?: Array<invoice_itemsWhereUniqueInput>;

    @Field(() => [invoice_itemsWhereUniqueInput], {nullable:true})
    @Type(() => invoice_itemsWhereUniqueInput)
    delete?: Array<invoice_itemsWhereUniqueInput>;

    @Field(() => [invoice_itemsWhereUniqueInput], {nullable:true})
    @Type(() => invoice_itemsWhereUniqueInput)
    connect?: Array<invoice_itemsWhereUniqueInput>;

    @Field(() => [invoice_itemsUpdateWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => invoice_itemsUpdateWithWhereUniqueWithoutBlockInput)
    update?: Array<invoice_itemsUpdateWithWhereUniqueWithoutBlockInput>;

    @Field(() => [invoice_itemsUpdateManyWithWhereWithoutBlockInput], {nullable:true})
    @Type(() => invoice_itemsUpdateManyWithWhereWithoutBlockInput)
    updateMany?: Array<invoice_itemsUpdateManyWithWhereWithoutBlockInput>;

    @Field(() => [invoice_itemsScalarWhereInput], {nullable:true})
    @Type(() => invoice_itemsScalarWhereInput)
    deleteMany?: Array<invoice_itemsScalarWhereInput>;
}
