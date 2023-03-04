import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesCreateWithoutMaintenanceInput } from './machines-create-without-maintenance.input';

@InputType()
export class MachinesCreateOrConnectWithoutMaintenanceInput {

    @Field(() => MachinesWhereUniqueInput, {nullable:false})
    @Type(() => MachinesWhereUniqueInput)
    where!: MachinesWhereUniqueInput;

    @Field(() => MachinesCreateWithoutMaintenanceInput, {nullable:false})
    @Type(() => MachinesCreateWithoutMaintenanceInput)
    create!: MachinesCreateWithoutMaintenanceInput;
}
