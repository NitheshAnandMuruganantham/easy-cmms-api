import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsWhereUniqueInput } from './invoice-items-where-unique.input';
import { Type } from 'class-transformer';
import { invoice_itemsUpdateWithoutBlockInput } from './invoice-items-update-without-block.input';

@InputType()
export class invoice_itemsUpdateWithWhereUniqueWithoutBlockInput {
  @Field(() => invoice_itemsWhereUniqueInput, { nullable: false })
  @Type(() => invoice_itemsWhereUniqueInput)
  where!: invoice_itemsWhereUniqueInput;

  @Field(() => invoice_itemsUpdateWithoutBlockInput, { nullable: false })
  @Type(() => invoice_itemsUpdateWithoutBlockInput)
  data!: invoice_itemsUpdateWithoutBlockInput;
}
