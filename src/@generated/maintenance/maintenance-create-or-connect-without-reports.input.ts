import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateWithoutReportsInput } from './maintenance-create-without-reports.input';

@InputType()
export class MaintenanceCreateOrConnectWithoutReportsInput {

    @Field(() => MaintenanceWhereUniqueInput, {nullable:false})
    @Type(() => MaintenanceWhereUniqueInput)
    where!: MaintenanceWhereUniqueInput;

    @Field(() => MaintenanceCreateWithoutReportsInput, {nullable:false})
    @Type(() => MaintenanceCreateWithoutReportsInput)
    create!: MaintenanceCreateWithoutReportsInput;
}
