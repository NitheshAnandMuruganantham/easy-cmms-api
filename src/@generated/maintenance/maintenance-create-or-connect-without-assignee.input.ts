import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateWithoutAssigneeInput } from './maintenance-create-without-assignee.input';

@InputType()
export class MaintenanceCreateOrConnectWithoutAssigneeInput {

    @Field(() => MaintenanceWhereUniqueInput, {nullable:false})
    @Type(() => MaintenanceWhereUniqueInput)
    where!: MaintenanceWhereUniqueInput;

    @Field(() => MaintenanceCreateWithoutAssigneeInput, {nullable:false})
    @Type(() => MaintenanceCreateWithoutAssigneeInput)
    create!: MaintenanceCreateWithoutAssigneeInput;
}
