import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateWithoutAssigneeInput } from './maintenance-create-without-assignee.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateOrConnectWithoutAssigneeInput } from './maintenance-create-or-connect-without-assignee.input';
import { MaintenanceCreateManyAssigneeInputEnvelope } from './maintenance-create-many-assignee-input-envelope.input';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';

@InputType()
export class MaintenanceCreateNestedManyWithoutAssigneeInput {

    @Field(() => [MaintenanceCreateWithoutAssigneeInput], {nullable:true})
    @Type(() => MaintenanceCreateWithoutAssigneeInput)
    create?: Array<MaintenanceCreateWithoutAssigneeInput>;

    @Field(() => [MaintenanceCreateOrConnectWithoutAssigneeInput], {nullable:true})
    @Type(() => MaintenanceCreateOrConnectWithoutAssigneeInput)
    connectOrCreate?: Array<MaintenanceCreateOrConnectWithoutAssigneeInput>;

    @Field(() => MaintenanceCreateManyAssigneeInputEnvelope, {nullable:true})
    @Type(() => MaintenanceCreateManyAssigneeInputEnvelope)
    createMany?: MaintenanceCreateManyAssigneeInputEnvelope;

    @Field(() => [MaintenanceWhereUniqueInput], {nullable:true})
    @Type(() => MaintenanceWhereUniqueInput)
    connect?: Array<MaintenanceWhereUniqueInput>;
}
