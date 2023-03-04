import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportsCreateWithoutMaintenanceInput } from './reports-create-without-maintenance.input';
import { Type } from 'class-transformer';
import { ReportsCreateOrConnectWithoutMaintenanceInput } from './reports-create-or-connect-without-maintenance.input';
import { ReportsCreateManyMaintenanceInputEnvelope } from './reports-create-many-maintenance-input-envelope.input';
import { ReportsWhereUniqueInput } from './reports-where-unique.input';

@InputType()
export class ReportsCreateNestedManyWithoutMaintenanceInput {

    @Field(() => [ReportsCreateWithoutMaintenanceInput], {nullable:true})
    @Type(() => ReportsCreateWithoutMaintenanceInput)
    create?: Array<ReportsCreateWithoutMaintenanceInput>;

    @Field(() => [ReportsCreateOrConnectWithoutMaintenanceInput], {nullable:true})
    @Type(() => ReportsCreateOrConnectWithoutMaintenanceInput)
    connectOrCreate?: Array<ReportsCreateOrConnectWithoutMaintenanceInput>;

    @Field(() => ReportsCreateManyMaintenanceInputEnvelope, {nullable:true})
    @Type(() => ReportsCreateManyMaintenanceInputEnvelope)
    createMany?: ReportsCreateManyMaintenanceInputEnvelope;

    @Field(() => [ReportsWhereUniqueInput], {nullable:true})
    @Type(() => ReportsWhereUniqueInput)
    connect?: Array<ReportsWhereUniqueInput>;
}
