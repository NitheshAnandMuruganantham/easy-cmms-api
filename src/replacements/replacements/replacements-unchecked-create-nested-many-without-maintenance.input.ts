import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsCreateWithoutMaintenanceInput } from './replacements-create-without-maintenance.input';
import { Type } from 'class-transformer';
import { ReplacementsCreateOrConnectWithoutMaintenanceInput } from './replacements-create-or-connect-without-maintenance.input';
import { ReplacementsCreateManyMaintenanceInputEnvelope } from './replacements-create-many-maintenance-input-envelope.input';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';

@InputType()
export class ReplacementsUncheckedCreateNestedManyWithoutMaintenanceInput {

    @Field(() => [ReplacementsCreateWithoutMaintenanceInput], {nullable:true})
    @Type(() => ReplacementsCreateWithoutMaintenanceInput)
    create?: Array<ReplacementsCreateWithoutMaintenanceInput>;

    @Field(() => [ReplacementsCreateOrConnectWithoutMaintenanceInput], {nullable:true})
    @Type(() => ReplacementsCreateOrConnectWithoutMaintenanceInput)
    connectOrCreate?: Array<ReplacementsCreateOrConnectWithoutMaintenanceInput>;

    @Field(() => ReplacementsCreateManyMaintenanceInputEnvelope, {nullable:true})
    @Type(() => ReplacementsCreateManyMaintenanceInputEnvelope)
    createMany?: ReplacementsCreateManyMaintenanceInputEnvelope;

    @Field(() => [ReplacementsWhereUniqueInput], {nullable:true})
    @Type(() => ReplacementsWhereUniqueInput)
    connect?: Array<ReplacementsWhereUniqueInput>;
}
