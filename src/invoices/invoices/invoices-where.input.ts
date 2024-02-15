import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../common-dto/prisma/big-int-filter.input';
import { FloatFilter } from '../../common-dto/prisma/float-filter.input';
import { DateTimeFilter } from '../../common-dto/prisma/date-time-filter.input';
import { StringFilter } from '../../common-dto/prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { BlockRelationFilter } from '../../block/block/block-relation-filter.input';
import { Invoice_itemsListRelationFilter } from '../../common-dto/prisma/invoice-items-list-relation-filter.input';

@InputType()
export class InvoicesWhereInput {
  @Field(() => [InvoicesWhereInput], { nullable: true })
  AND?: Array<InvoicesWhereInput>;

  @Field(() => [InvoicesWhereInput], { nullable: true })
  OR?: Array<InvoicesWhereInput>;

  @Field(() => [InvoicesWhereInput], { nullable: true })
  NOT?: Array<InvoicesWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => FloatFilter, { nullable: true })
  total?: FloatFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  invoice_date?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  number?: StringFilter;

  @HideField()
  block_id?: BigIntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @HideField()
  block?: BlockRelationFilter;

  @Field(() => Invoice_itemsListRelationFilter, { nullable: true })
  invoice_items?: Invoice_itemsListRelationFilter;
}
