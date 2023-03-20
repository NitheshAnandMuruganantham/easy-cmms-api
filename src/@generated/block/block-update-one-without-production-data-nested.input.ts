import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutProduction_dataInput } from './block-create-without-production-data.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutProduction_dataInput } from './block-create-or-connect-without-production-data.input';
import { BlockUpsertWithoutProduction_dataInput } from './block-upsert-without-production-data.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { BlockUpdateWithoutProduction_dataInput } from './block-update-without-production-data.input';

@InputType()
export class BlockUpdateOneWithoutProduction_dataNestedInput {

    @Field(() => BlockCreateWithoutProduction_dataInput, {nullable:true})
    @Type(() => BlockCreateWithoutProduction_dataInput)
    create?: BlockCreateWithoutProduction_dataInput;

    @Field(() => BlockCreateOrConnectWithoutProduction_dataInput, {nullable:true})
    @Type(() => BlockCreateOrConnectWithoutProduction_dataInput)
    connectOrCreate?: BlockCreateOrConnectWithoutProduction_dataInput;

    @Field(() => BlockUpsertWithoutProduction_dataInput, {nullable:true})
    @Type(() => BlockUpsertWithoutProduction_dataInput)
    upsert?: BlockUpsertWithoutProduction_dataInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => BlockWhereUniqueInput, {nullable:true})
    @Type(() => BlockWhereUniqueInput)
    connect?: BlockWhereUniqueInput;

    @Field(() => BlockUpdateWithoutProduction_dataInput, {nullable:true})
    @Type(() => BlockUpdateWithoutProduction_dataInput)
    update?: BlockUpdateWithoutProduction_dataInput;
}
