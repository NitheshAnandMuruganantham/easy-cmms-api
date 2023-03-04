import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutMaintenanceInput } from './machines-create-without-maintenance.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutMaintenanceInput } from './machines-create-or-connect-without-maintenance.input';
import { MachinesUpsertWithoutMaintenanceInput } from './machines-upsert-without-maintenance.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { MachinesUpdateWithoutMaintenanceInput } from './machines-update-without-maintenance.input';

@InputType()
export class MachinesUpdateOneRequiredWithoutMaintenanceNestedInput {

    @Field(() => MachinesCreateWithoutMaintenanceInput, {nullable:true})
    @Type(() => MachinesCreateWithoutMaintenanceInput)
    create?: MachinesCreateWithoutMaintenanceInput;

    @Field(() => MachinesCreateOrConnectWithoutMaintenanceInput, {nullable:true})
    @Type(() => MachinesCreateOrConnectWithoutMaintenanceInput)
    connectOrCreate?: MachinesCreateOrConnectWithoutMaintenanceInput;

    @Field(() => MachinesUpsertWithoutMaintenanceInput, {nullable:true})
    @Type(() => MachinesUpsertWithoutMaintenanceInput)
    upsert?: MachinesUpsertWithoutMaintenanceInput;

    @Field(() => MachinesWhereUniqueInput, {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    connect?: MachinesWhereUniqueInput;

    @Field(() => MachinesUpdateWithoutMaintenanceInput, {nullable:true})
    @Type(() => MachinesUpdateWithoutMaintenanceInput)
    update?: MachinesUpdateWithoutMaintenanceInput;
}
