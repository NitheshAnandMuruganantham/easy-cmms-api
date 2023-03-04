import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { MaintenanceCreateNestedOneWithoutReportsInput } from '../maintenance/maintenance-create-nested-one-without-reports.input';

@InputType()
export class ReportCreateInput {

    @Field(() => String, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    sign!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    tag!: any;

    @Field(() => String, {nullable:false})
    validated!: bigint | number;

    @Field(() => String, {nullable:false})
    validated_sign!: bigint | number;

    @Field(() => MaintenanceCreateNestedOneWithoutReportsInput, {nullable:false})
    maintenance!: MaintenanceCreateNestedOneWithoutReportsInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
