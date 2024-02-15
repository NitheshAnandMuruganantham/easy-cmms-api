import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateInput } from './block-create.input';
import { BlockUpdateInput } from './block-update.input';

@ArgsType()
export class UpsertOneBlockArgs {

    @Field(() => BlockWhereUniqueInput, {nullable:false})
    @Type(() => BlockWhereUniqueInput)
    where!: BlockWhereUniqueInput;

    @Field(() => BlockCreateInput, {nullable:false})
    @Type(() => BlockCreateInput)
    create!: BlockCreateInput;

    @Field(() => BlockUpdateInput, {nullable:false})
    @Type(() => BlockUpdateInput)
    update!: BlockUpdateInput;
}
