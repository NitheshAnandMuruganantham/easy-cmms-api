import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { MaintenanceCreateNestedOneWithoutReportsInput } from '../maintenance/maintenance-create-nested-one-without-reports.input';
import { BlockCreateNestedOneWithoutReportsInput } from '../block/block-create-nested-one-without-reports.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ReportsCreateInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    report!: string;

    @Field(() => String, {nullable:false})
    sign!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    tag!: any;

    @Field(() => GraphQLBigInt, {nullable:false})
    validated!: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:false})
    validated_sign!: bigint | number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => MaintenanceCreateNestedOneWithoutReportsInput, {nullable:false})
    maintenance!: MaintenanceCreateNestedOneWithoutReportsInput;

    @HideField()
    block!: BlockCreateNestedOneWithoutReportsInput;
}
