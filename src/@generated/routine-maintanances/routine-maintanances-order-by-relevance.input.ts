import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesOrderByRelevanceFieldEnum } from './routine-maintanances-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class routine_maintanancesOrderByRelevanceInput {

    @Field(() => [routine_maintanancesOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof routine_maintanancesOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
