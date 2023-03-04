import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesOrderByRelevanceFieldEnum } from './machines-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MachinesOrderByRelevanceInput {

    @Field(() => [MachinesOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof MachinesOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
