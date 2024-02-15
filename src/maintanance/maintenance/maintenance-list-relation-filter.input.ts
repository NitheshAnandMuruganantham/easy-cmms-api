import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceWhereInput } from './maintenance-where.input';

@InputType()
export class MaintenanceListRelationFilter {

    @Field(() => MaintenanceWhereInput, {nullable:true})
    every?: MaintenanceWhereInput;

    @Field(() => MaintenanceWhereInput, {nullable:true})
    some?: MaintenanceWhereInput;

    @Field(() => MaintenanceWhereInput, {nullable:true})
    none?: MaintenanceWhereInput;
}
