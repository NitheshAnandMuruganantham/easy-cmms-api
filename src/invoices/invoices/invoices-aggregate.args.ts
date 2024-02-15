import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoicesWhereInput } from './invoices-where.input';
import { Type } from 'class-transformer';
import { InvoicesOrderByWithRelationAndSearchRelevanceInput } from './invoices-order-by-with-relation-and-search-relevance.input';
import { InvoicesWhereUniqueInput } from './invoices-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InvoicesCountAggregateInput } from './invoices-count-aggregate.input';
import { InvoicesAvgAggregateInput } from './invoices-avg-aggregate.input';
import { InvoicesSumAggregateInput } from './invoices-sum-aggregate.input';
import { InvoicesMinAggregateInput } from './invoices-min-aggregate.input';
import { InvoicesMaxAggregateInput } from './invoices-max-aggregate.input';

@ArgsType()
export class InvoicesAggregateArgs {
  @Field(() => InvoicesWhereInput, { nullable: true })
  @Type(() => InvoicesWhereInput)
  where?: InvoicesWhereInput;

  @Field(() => [InvoicesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<InvoicesOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => InvoicesWhereUniqueInput, { nullable: true })
  cursor?: InvoicesWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => InvoicesCountAggregateInput, { nullable: true })
  _count?: InvoicesCountAggregateInput;

  @Field(() => InvoicesAvgAggregateInput, { nullable: true })
  _avg?: InvoicesAvgAggregateInput;

  @Field(() => InvoicesSumAggregateInput, { nullable: true })
  _sum?: InvoicesSumAggregateInput;

  @Field(() => InvoicesMinAggregateInput, { nullable: true })
  _min?: InvoicesMinAggregateInput;

  @Field(() => InvoicesMaxAggregateInput, { nullable: true })
  _max?: InvoicesMaxAggregateInput;
}
