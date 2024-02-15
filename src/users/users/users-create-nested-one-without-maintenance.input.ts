import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutMaintenanceInput } from './users-create-without-maintenance.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutMaintenanceInput } from './users-create-or-connect-without-maintenance.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class UsersCreateNestedOneWithoutMaintenanceInput {

    @Field(() => UsersCreateWithoutMaintenanceInput, {nullable:true})
    @Type(() => UsersCreateWithoutMaintenanceInput)
    create?: UsersCreateWithoutMaintenanceInput;

    @Field(() => UsersCreateOrConnectWithoutMaintenanceInput, {nullable:true})
    @Type(() => UsersCreateOrConnectWithoutMaintenanceInput)
    connectOrCreate?: UsersCreateOrConnectWithoutMaintenanceInput;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    @Type(() => UsersWhereUniqueInput)
    connect?: UsersWhereUniqueInput;
}
