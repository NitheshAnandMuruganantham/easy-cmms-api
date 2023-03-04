import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateInput } from './maintenance-create.input';
import { MaintenanceUpdateInput } from './maintenance-update.input';

@ArgsType()
export class UpsertOneMaintenanceArgs {

    @Field(() => MaintenanceWhereUniqueInput, {nullable:false})
    @Type(() => MaintenanceWhereUniqueInput)
    where!: MaintenanceWhereUniqueInput;

    @Field(() => MaintenanceCreateInput, {nullable:false})
    @Type(() => MaintenanceCreateInput)
    create!: MaintenanceCreateInput;

    @Field(() => MaintenanceUpdateInput, {nullable:false})
    @Type(() => MaintenanceUpdateInput)
    update!: MaintenanceUpdateInput;
}
