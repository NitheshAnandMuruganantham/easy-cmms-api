import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlockWhereInput } from './block-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBlockArgs {

    @Field(() => BlockWhereInput, {nullable:true})
    @Type(() => BlockWhereInput)
    where?: BlockWhereInput;
}
