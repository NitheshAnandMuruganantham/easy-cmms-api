import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceWhereInput } from './maintenance-where.input';

@InputType()
export class MaintenanceRelationFilter {

    @Field(() => MaintenanceWhereInput, {nullable:true})
    is?: MaintenanceWhereInput;

    @Field(() => MaintenanceWhereInput, {nullable:true})
    isNot?: MaintenanceWhereInput;
}
