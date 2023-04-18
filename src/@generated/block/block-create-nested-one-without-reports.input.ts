import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutReportsInput } from './block-create-without-reports.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutReportsInput } from './block-create-or-connect-without-reports.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@InputType()
export class BlockCreateNestedOneWithoutReportsInput {

    @Field(() => BlockCreateWithoutReportsInput, {nullable:true})
    @Type(() => BlockCreateWithoutReportsInput)
    create?: BlockCreateWithoutReportsInput;

    @Field(() => BlockCreateOrConnectWithoutReportsInput, {nullable:true})
    @Type(() => BlockCreateOrConnectWithoutReportsInput)
    connectOrCreate?: BlockCreateOrConnectWithoutReportsInput;

    @Field(() => BlockWhereUniqueInput, {nullable:true})
    @Type(() => BlockWhereUniqueInput)
    connect?: BlockWhereUniqueInput;
}
