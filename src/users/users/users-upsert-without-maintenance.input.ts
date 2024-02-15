import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersUpdateWithoutMaintenanceInput } from './users-update-without-maintenance.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutMaintenanceInput } from './users-create-without-maintenance.input';

@InputType()
export class UsersUpsertWithoutMaintenanceInput {

    @Field(() => UsersUpdateWithoutMaintenanceInput, {nullable:false})
    @Type(() => UsersUpdateWithoutMaintenanceInput)
    update!: UsersUpdateWithoutMaintenanceInput;

    @Field(() => UsersCreateWithoutMaintenanceInput, {nullable:false})
    @Type(() => UsersCreateWithoutMaintenanceInput)
    create!: UsersCreateWithoutMaintenanceInput;
}
