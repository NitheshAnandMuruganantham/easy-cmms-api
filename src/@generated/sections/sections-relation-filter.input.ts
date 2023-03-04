import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsWhereInput } from './sections-where.input';

@InputType()
export class SectionsRelationFilter {

    @Field(() => SectionsWhereInput, {nullable:true})
    is?: SectionsWhereInput;

    @Field(() => SectionsWhereInput, {nullable:true})
    isNot?: SectionsWhereInput;
}
