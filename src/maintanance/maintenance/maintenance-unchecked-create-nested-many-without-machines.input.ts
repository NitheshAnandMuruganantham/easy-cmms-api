import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateWithoutMachinesInput } from './maintenance-create-without-machines.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateOrConnectWithoutMachinesInput } from './maintenance-create-or-connect-without-machines.input';
import { MaintenanceCreateManyMachinesInputEnvelope } from './maintenance-create-many-machines-input-envelope.input';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';

@InputType()
export class MaintenanceUncheckedCreateNestedManyWithoutMachinesInput {

    @Field(() => [MaintenanceCreateWithoutMachinesInput], {nullable:true})
    @Type(() => MaintenanceCreateWithoutMachinesInput)
    create?: Array<MaintenanceCreateWithoutMachinesInput>;

    @Field(() => [MaintenanceCreateOrConnectWithoutMachinesInput], {nullable:true})
    @Type(() => MaintenanceCreateOrConnectWithoutMachinesInput)
    connectOrCreate?: Array<MaintenanceCreateOrConnectWithoutMachinesInput>;

    @Field(() => MaintenanceCreateManyMachinesInputEnvelope, {nullable:true})
    @Type(() => MaintenanceCreateManyMachinesInputEnvelope)
    createMany?: MaintenanceCreateManyMachinesInputEnvelope;

    @Field(() => [MaintenanceWhereUniqueInput], {nullable:true})
    @Type(() => MaintenanceWhereUniqueInput)
    connect?: Array<MaintenanceWhereUniqueInput>;
}
