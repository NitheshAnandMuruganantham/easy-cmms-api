import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereInput } from './items-where.input';

@InputType()
export class ItemsRelationFilter {

    @Field(() => ItemsWhereInput, {nullable:true})
    is?: ItemsWhereInput;

    @Field(() => ItemsWhereInput, {nullable:true})
    isNot?: ItemsWhereInput;
}
