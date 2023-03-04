import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutMaintenanceInput } from './report-create-without-maintenance.input';
import { Type } from 'class-transformer';
import { ReportCreateOrConnectWithoutMaintenanceInput } from './report-create-or-connect-without-maintenance.input';
import { ReportUpsertWithWhereUniqueWithoutMaintenanceInput } from './report-upsert-with-where-unique-without-maintenance.input';
import { ReportCreateManyMaintenanceInputEnvelope } from './report-create-many-maintenance-input-envelope.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithWhereUniqueWithoutMaintenanceInput } from './report-update-with-where-unique-without-maintenance.input';
import { ReportUpdateManyWithWhereWithoutMaintenanceInput } from './report-update-many-with-where-without-maintenance.input';
import { ReportScalarWhereInput } from './report-scalar-where.input';

@InputType()
export class ReportUncheckedUpdateManyWithoutMaintenanceNestedInput {

    @Field(() => [ReportCreateWithoutMaintenanceInput], {nullable:true})
    @Type(() => ReportCreateWithoutMaintenanceInput)
    create?: Array<ReportCreateWithoutMaintenanceInput>;

    @Field(() => [ReportCreateOrConnectWithoutMaintenanceInput], {nullable:true})
    @Type(() => ReportCreateOrConnectWithoutMaintenanceInput)
    connectOrCreate?: Array<ReportCreateOrConnectWithoutMaintenanceInput>;

    @Field(() => [ReportUpsertWithWhereUniqueWithoutMaintenanceInput], {nullable:true})
    @Type(() => ReportUpsertWithWhereUniqueWithoutMaintenanceInput)
    upsert?: Array<ReportUpsertWithWhereUniqueWithoutMaintenanceInput>;

    @Field(() => ReportCreateManyMaintenanceInputEnvelope, {nullable:true})
    @Type(() => ReportCreateManyMaintenanceInputEnvelope)
    createMany?: ReportCreateManyMaintenanceInputEnvelope;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    @Type(() => ReportWhereUniqueInput)
    set?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    @Type(() => ReportWhereUniqueInput)
    disconnect?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    @Type(() => ReportWhereUniqueInput)
    delete?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    @Type(() => ReportWhereUniqueInput)
    connect?: Array<ReportWhereUniqueInput>;

    @Field(() => [ReportUpdateWithWhereUniqueWithoutMaintenanceInput], {nullable:true})
    @Type(() => ReportUpdateWithWhereUniqueWithoutMaintenanceInput)
    update?: Array<ReportUpdateWithWhereUniqueWithoutMaintenanceInput>;

    @Field(() => [ReportUpdateManyWithWhereWithoutMaintenanceInput], {nullable:true})
    @Type(() => ReportUpdateManyWithWhereWithoutMaintenanceInput)
    updateMany?: Array<ReportUpdateManyWithWhereWithoutMaintenanceInput>;

    @Field(() => [ReportScalarWhereInput], {nullable:true})
    @Type(() => ReportScalarWhereInput)
    deleteMany?: Array<ReportScalarWhereInput>;
}
