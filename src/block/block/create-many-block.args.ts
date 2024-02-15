import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlockCreateManyInput } from './block-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBlockArgs {

    @Field(() => [BlockCreateManyInput], {nullable:false})
    @Type(() => BlockCreateManyInput)
    data!: Array<BlockCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
