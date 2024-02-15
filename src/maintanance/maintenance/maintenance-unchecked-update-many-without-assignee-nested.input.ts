import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateWithoutAssigneeInput } from './maintenance-create-without-assignee.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateOrConnectWithoutAssigneeInput } from './maintenance-create-or-connect-without-assignee.input';
import { MaintenanceUpsertWithWhereUniqueWithoutAssigneeInput } from './maintenance-upsert-with-where-unique-without-assignee.input';
import { MaintenanceCreateManyAssigneeInputEnvelope } from './maintenance-create-many-assignee-input-envelope.input';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { MaintenanceUpdateWithWhereUniqueWithoutAssigneeInput } from './maintenance-update-with-where-unique-without-assignee.input';
import { MaintenanceUpdateManyWithWhereWithoutAssigneeInput } from './maintenance-update-many-with-where-without-assignee.input';
import { MaintenanceScalarWhereInput } from './maintenance-scalar-where.input';

@InputType()
export class MaintenanceUncheckedUpdateManyWithoutAssigneeNestedInput {

    @Field(() => [MaintenanceCreateWithoutAssigneeInput], {nullable:true})
    @Type(() => MaintenanceCreateWithoutAssigneeInput)
    create?: Array<MaintenanceCreateWithoutAssigneeInput>;

    @Field(() => [MaintenanceCreateOrConnectWithoutAssigneeInput], {nullable:true})
    @Type(() => MaintenanceCreateOrConnectWithoutAssigneeInput)
    connectOrCreate?: Array<MaintenanceCreateOrConnectWithoutAssigneeInput>;

    @Field(() => [MaintenanceUpsertWithWhereUniqueWithoutAssigneeInput], {nullable:true})
    @Type(() => MaintenanceUpsertWithWhereUniqueWithoutAssigneeInput)
    upsert?: Array<MaintenanceUpsertWithWhereUniqueWithoutAssigneeInput>;

    @Field(() => MaintenanceCreateManyAssigneeInputEnvelope, {nullable:true})
    @Type(() => MaintenanceCreateManyAssigneeInputEnvelope)
    createMany?: MaintenanceCreateManyAssigneeInputEnvelope;

    @Field(() => [MaintenanceWhereUniqueInput], {nullable:true})
    @Type(() => MaintenanceWhereUniqueInput)
    set?: Array<MaintenanceWhereUniqueInput>;

    @Field(() => [MaintenanceWhereUniqueInput], {nullable:true})
    @Type(() => MaintenanceWhereUniqueInput)
    disconnect?: Array<MaintenanceWhereUniqueInput>;

    @Field(() => [MaintenanceWhereUniqueInput], {nullable:true})
    @Type(() => MaintenanceWhereUniqueInput)
    delete?: Array<MaintenanceWhereUniqueInput>;

    @Field(() => [MaintenanceWhereUniqueInput], {nullable:true})
    @Type(() => MaintenanceWhereUniqueInput)
    connect?: Array<MaintenanceWhereUniqueInput>;

    @Field(() => [MaintenanceUpdateWithWhereUniqueWithoutAssigneeInput], {nullable:true})
    @Type(() => MaintenanceUpdateWithWhereUniqueWithoutAssigneeInput)
    update?: Array<MaintenanceUpdateWithWhereUniqueWithoutAssigneeInput>;

    @Field(() => [MaintenanceUpdateManyWithWhereWithoutAssigneeInput], {nullable:true})
    @Type(() => MaintenanceUpdateManyWithWhereWithoutAssigneeInput)
    updateMany?: Array<MaintenanceUpdateManyWithWhereWithoutAssigneeInput>;

    @Field(() => [MaintenanceScalarWhereInput], {nullable:true})
    @Type(() => MaintenanceScalarWhereInput)
    deleteMany?: Array<MaintenanceScalarWhereInput>;
}
