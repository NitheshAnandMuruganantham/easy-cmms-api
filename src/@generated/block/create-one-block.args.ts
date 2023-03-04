import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlockCreateInput } from './block-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBlockArgs {

    @Field(() => BlockCreateInput, {nullable:false})
    @Type(() => BlockCreateInput)
    data!: BlockCreateInput;
}
