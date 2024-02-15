import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutReportsInput } from './block-create-without-reports.input';

@InputType()
export class BlockCreateOrConnectWithoutReportsInput {

    @Field(() => BlockWhereUniqueInput, {nullable:false})
    @Type(() => BlockWhereUniqueInput)
    where!: BlockWhereUniqueInput;

    @Field(() => BlockCreateWithoutReportsInput, {nullable:false})
    @Type(() => BlockCreateWithoutReportsInput)
    create!: BlockCreateWithoutReportsInput;
}
