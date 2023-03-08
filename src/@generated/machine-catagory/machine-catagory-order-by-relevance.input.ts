import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machine_catagoryOrderByRelevanceFieldEnum } from './machine-catagory-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class machine_catagoryOrderByRelevanceInput {

    @Field(() => [machine_catagoryOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof machine_catagoryOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
