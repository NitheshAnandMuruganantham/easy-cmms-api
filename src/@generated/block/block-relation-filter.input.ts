import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereInput } from './block-where.input';

@InputType()
export class BlockRelationFilter {

    @Field(() => BlockWhereInput, {nullable:true})
    is?: BlockWhereInput;

    @Field(() => BlockWhereInput, {nullable:true})
    isNot?: BlockWhereInput;
}
