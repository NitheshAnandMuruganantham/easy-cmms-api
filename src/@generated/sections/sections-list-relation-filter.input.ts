import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsWhereInput } from './sections-where.input';

@InputType()
export class SectionsListRelationFilter {

    @Field(() => SectionsWhereInput, {nullable:true})
    every?: SectionsWhereInput;

    @Field(() => SectionsWhereInput, {nullable:true})
    some?: SectionsWhereInput;

    @Field(() => SectionsWhereInput, {nullable:true})
    none?: SectionsWhereInput;
}
