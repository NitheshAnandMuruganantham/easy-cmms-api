import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsCreateManyItemInput } from './invoice-items-create-many-item.input';
import { Type } from 'class-transformer';

@InputType()
export class invoice_itemsCreateManyItemInputEnvelope {
  @Field(() => [invoice_itemsCreateManyItemInput], { nullable: false })
  @Type(() => invoice_itemsCreateManyItemInput)
  data!: Array<invoice_itemsCreateManyItemInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
