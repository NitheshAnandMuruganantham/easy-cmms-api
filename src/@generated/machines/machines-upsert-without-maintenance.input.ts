import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesUpdateWithoutMaintenanceInput } from './machines-update-without-maintenance.input';
import { Type } from 'class-transformer';
import { MachinesCreateWithoutMaintenanceInput } from './machines-create-without-maintenance.input';

@InputType()
export class MachinesUpsertWithoutMaintenanceInput {

    @Field(() => MachinesUpdateWithoutMaintenanceInput, {nullable:false})
    @Type(() => MachinesUpdateWithoutMaintenanceInput)
    update!: MachinesUpdateWithoutMaintenanceInput;

    @Field(() => MachinesCreateWithoutMaintenanceInput, {nullable:false})
    @Type(() => MachinesCreateWithoutMaintenanceInput)
    create!: MachinesCreateWithoutMaintenanceInput;
}
