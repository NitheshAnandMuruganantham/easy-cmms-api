import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockUpdateWithoutReportsInput } from './block-update-without-reports.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutReportsInput } from './block-create-without-reports.input';

@InputType()
export class BlockUpsertWithoutReportsInput {

    @Field(() => BlockUpdateWithoutReportsInput, {nullable:false})
    @Type(() => BlockUpdateWithoutReportsInput)
    update!: BlockUpdateWithoutReportsInput;

    @Field(() => BlockCreateWithoutReportsInput, {nullable:false})
    @Type(() => BlockCreateWithoutReportsInput)
    create!: BlockCreateWithoutReportsInput;
}
