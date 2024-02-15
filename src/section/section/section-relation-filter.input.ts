import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionWhereInput } from './section-where.input';

@InputType()
export class SectionRelationFilter {

    @Field(() => SectionWhereInput, {nullable:true})
    is?: SectionWhereInput;

    @Field(() => SectionWhereInput, {nullable:true})
    isNot?: SectionWhereInput;
}
