import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsWhereUniqueInput } from './invoice-items-where-unique.input';
import { Type } from 'class-transformer';
import { invoice_itemsUpdateWithoutItemInput } from './invoice-items-update-without-item.input';
import { invoice_itemsCreateWithoutItemInput } from './invoice-items-create-without-item.input';

@InputType()
export class invoice_itemsUpsertWithWhereUniqueWithoutItemInput {

    @Field(() => invoice_itemsWhereUniqueInput, {nullable:false})
    @Type(() => invoice_itemsWhereUniqueInput)
    where!: invoice_itemsWhereUniqueInput;

    @Field(() => invoice_itemsUpdateWithoutItemInput, {nullable:false})
    @Type(() => invoice_itemsUpdateWithoutItemInput)
    update!: invoice_itemsUpdateWithoutItemInput;

    @Field(() => invoice_itemsCreateWithoutItemInput, {nullable:false})
    @Type(() => invoice_itemsCreateWithoutItemInput)
    create!: invoice_itemsCreateWithoutItemInput;
}
