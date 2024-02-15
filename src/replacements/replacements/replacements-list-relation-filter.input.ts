import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsWhereInput } from './replacements-where.input';

@InputType()
export class ReplacementsListRelationFilter {

    @Field(() => ReplacementsWhereInput, {nullable:true})
    every?: ReplacementsWhereInput;

    @Field(() => ReplacementsWhereInput, {nullable:true})
    some?: ReplacementsWhereInput;

    @Field(() => ReplacementsWhereInput, {nullable:true})
    none?: ReplacementsWhereInput;
}
