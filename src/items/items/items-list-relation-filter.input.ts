import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereInput } from './items-where.input';

@InputType()
export class ItemsListRelationFilter {

    @Field(() => ItemsWhereInput, {nullable:true})
    every?: ItemsWhereInput;

    @Field(() => ItemsWhereInput, {nullable:true})
    some?: ItemsWhereInput;

    @Field(() => ItemsWhereInput, {nullable:true})
    none?: ItemsWhereInput;
}
