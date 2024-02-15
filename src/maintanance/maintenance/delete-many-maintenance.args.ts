import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaintenanceWhereInput } from './maintenance-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMaintenanceArgs {

    @Field(() => MaintenanceWhereInput, {nullable:true})
    @Type(() => MaintenanceWhereInput)
    where?: MaintenanceWhereInput;
}
