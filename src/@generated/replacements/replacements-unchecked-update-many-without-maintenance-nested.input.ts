import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsCreateWithoutMaintenanceInput } from './replacements-create-without-maintenance.input';
import { Type } from 'class-transformer';
import { ReplacementsCreateOrConnectWithoutMaintenanceInput } from './replacements-create-or-connect-without-maintenance.input';
import { ReplacementsUpsertWithWhereUniqueWithoutMaintenanceInput } from './replacements-upsert-with-where-unique-without-maintenance.input';
import { ReplacementsCreateManyMaintenanceInputEnvelope } from './replacements-create-many-maintenance-input-envelope.input';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';
import { ReplacementsUpdateWithWhereUniqueWithoutMaintenanceInput } from './replacements-update-with-where-unique-without-maintenance.input';
import { ReplacementsUpdateManyWithWhereWithoutMaintenanceInput } from './replacements-update-many-with-where-without-maintenance.input';
import { ReplacementsScalarWhereInput } from './replacements-scalar-where.input';

@InputType()
export class ReplacementsUncheckedUpdateManyWithoutMaintenanceNestedInput {

    @Field(() => [ReplacementsCreateWithoutMaintenanceInput], {nullable:true})
    @Type(() => ReplacementsCreateWithoutMaintenanceInput)
    create?: Array<ReplacementsCreateWithoutMaintenanceInput>;

    @Field(() => [ReplacementsCreateOrConnectWithoutMaintenanceInput], {nullable:true})
    @Type(() => ReplacementsCreateOrConnectWithoutMaintenanceInput)
    connectOrCreate?: Array<ReplacementsCreateOrConnectWithoutMaintenanceInput>;

    @Field(() => [ReplacementsUpsertWithWhereUniqueWithoutMaintenanceInput], {nullable:true})
    @Type(() => ReplacementsUpsertWithWhereUniqueWithoutMaintenanceInput)
    upsert?: Array<ReplacementsUpsertWithWhereUniqueWithoutMaintenanceInput>;

    @Field(() => ReplacementsCreateManyMaintenanceInputEnvelope, {nullable:true})
    @Type(() => ReplacementsCreateManyMaintenanceInputEnvelope)
    createMany?: ReplacementsCreateManyMaintenanceInputEnvelope;

    @Field(() => [ReplacementsWhereUniqueInput], {nullable:true})
    @Type(() => ReplacementsWhereUniqueInput)
    set?: Array<ReplacementsWhereUniqueInput>;

    @Field(() => [ReplacementsWhereUniqueInput], {nullable:true})
    @Type(() => ReplacementsWhereUniqueInput)
    disconnect?: Array<ReplacementsWhereUniqueInput>;

    @Field(() => [ReplacementsWhereUniqueInput], {nullable:true})
    @Type(() => ReplacementsWhereUniqueInput)
    delete?: Array<ReplacementsWhereUniqueInput>;

    @Field(() => [ReplacementsWhereUniqueInput], {nullable:true})
    @Type(() => ReplacementsWhereUniqueInput)
    connect?: Array<ReplacementsWhereUniqueInput>;

    @Field(() => [ReplacementsUpdateWithWhereUniqueWithoutMaintenanceInput], {nullable:true})
    @Type(() => ReplacementsUpdateWithWhereUniqueWithoutMaintenanceInput)
    update?: Array<ReplacementsUpdateWithWhereUniqueWithoutMaintenanceInput>;

    @Field(() => [ReplacementsUpdateManyWithWhereWithoutMaintenanceInput], {nullable:true})
    @Type(() => ReplacementsUpdateManyWithWhereWithoutMaintenanceInput)
    updateMany?: Array<ReplacementsUpdateManyWithWhereWithoutMaintenanceInput>;

    @Field(() => [ReplacementsScalarWhereInput], {nullable:true})
    @Type(() => ReplacementsScalarWhereInput)
    deleteMany?: Array<ReplacementsScalarWhereInput>;
}
