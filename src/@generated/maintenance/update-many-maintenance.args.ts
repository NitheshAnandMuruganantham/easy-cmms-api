import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaintenanceUpdateManyMutationInput } from './maintenance-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MaintenanceWhereInput } from './maintenance-where.input';

@ArgsType()
export class UpdateManyMaintenanceArgs {

    @Field(() => MaintenanceUpdateManyMutationInput, {nullable:false})
    @Type(() => MaintenanceUpdateManyMutationInput)
    data!: MaintenanceUpdateManyMutationInput;

    @Field(() => MaintenanceWhereInput, {nullable:true})
    @Type(() => MaintenanceWhereInput)
    where?: MaintenanceWhereInput;
}
