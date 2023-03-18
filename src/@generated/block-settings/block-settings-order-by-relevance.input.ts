import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { block_settingsOrderByRelevanceFieldEnum } from './block-settings-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class block_settingsOrderByRelevanceInput {

    @Field(() => [block_settingsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof block_settingsOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
