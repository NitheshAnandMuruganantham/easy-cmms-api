import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { Type } from 'class-transformer';
import { MaintenanceUpdateWithoutAssigneeInput } from './maintenance-update-without-assignee.input';

@InputType()
export class MaintenanceUpdateWithWhereUniqueWithoutAssigneeInput {

    @Field(() => MaintenanceWhereUniqueInput, {nullable:false})
    @Type(() => MaintenanceWhereUniqueInput)
    where!: MaintenanceWhereUniqueInput;

    @Field(() => MaintenanceUpdateWithoutAssigneeInput, {nullable:false})
    @Type(() => MaintenanceUpdateWithoutAssigneeInput)
    data!: MaintenanceUpdateWithoutAssigneeInput;
}
