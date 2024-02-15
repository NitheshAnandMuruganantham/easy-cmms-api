import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoicesWhereInput } from './invoices-where.input';
import { Type } from 'class-transformer';
import { InvoicesOrderByWithAggregationInput } from './invoices-order-by-with-aggregation.input';
import { InvoicesScalarFieldEnum } from './invoices-scalar-field.enum';
import { InvoicesScalarWhereWithAggregatesInput } from './invoices-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { InvoicesCountAggregateInput } from './invoices-count-aggregate.input';
import { InvoicesAvgAggregateInput } from './invoices-avg-aggregate.input';
import { InvoicesSumAggregateInput } from './invoices-sum-aggregate.input';
import { InvoicesMinAggregateInput } from './invoices-min-aggregate.input';
import { InvoicesMaxAggregateInput } from './invoices-max-aggregate.input';

@ArgsType()
export class InvoicesGroupByArgs {

    @Field(() => InvoicesWhereInput, {nullable:true})
    @Type(() => InvoicesWhereInput)
    where?: InvoicesWhereInput;

    @Field(() => [InvoicesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<InvoicesOrderByWithAggregationInput>;

    @Field(() => [InvoicesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof InvoicesScalarFieldEnum>;

    @Field(() => InvoicesScalarWhereWithAggregatesInput, {nullable:true})
    having?: InvoicesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => InvoicesCountAggregateInput, {nullable:true})
    _count?: InvoicesCountAggregateInput;

    @Field(() => InvoicesAvgAggregateInput, {nullable:true})
    _avg?: InvoicesAvgAggregateInput;

    @Field(() => InvoicesSumAggregateInput, {nullable:true})
    _sum?: InvoicesSumAggregateInput;

    @Field(() => InvoicesMinAggregateInput, {nullable:true})
    _min?: InvoicesMinAggregateInput;

    @Field(() => InvoicesMaxAggregateInput, {nullable:true})
    _max?: InvoicesMaxAggregateInput;
}
