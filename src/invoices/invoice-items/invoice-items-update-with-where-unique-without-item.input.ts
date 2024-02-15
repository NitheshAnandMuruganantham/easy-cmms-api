import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsWhereUniqueInput } from './invoice-items-where-unique.input';
import { Type } from 'class-transformer';
import { invoice_itemsUpdateWithoutItemInput } from './invoice-items-update-without-item.input';

@InputType()
export class invoice_itemsUpdateWithWhereUniqueWithoutItemInput {
  @Field(() => invoice_itemsWhereUniqueInput, { nullable: false })
  @Type(() => invoice_itemsWhereUniqueInput)
  where!: invoice_itemsWhereUniqueInput;

  @Field(() => invoice_itemsUpdateWithoutItemInput, { nullable: false })
  @Type(() => invoice_itemsUpdateWithoutItemInput)
  data!: invoice_itemsUpdateWithoutItemInput;
}
