import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceUpdateWithoutReportsInput } from './maintenance-update-without-reports.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateWithoutReportsInput } from './maintenance-create-without-reports.input';

@InputType()
export class MaintenanceUpsertWithoutReportsInput {

    @Field(() => MaintenanceUpdateWithoutReportsInput, {nullable:false})
    @Type(() => MaintenanceUpdateWithoutReportsInput)
    update!: MaintenanceUpdateWithoutReportsInput;

    @Field(() => MaintenanceCreateWithoutReportsInput, {nullable:false})
    @Type(() => MaintenanceCreateWithoutReportsInput)
    create!: MaintenanceCreateWithoutReportsInput;
}
