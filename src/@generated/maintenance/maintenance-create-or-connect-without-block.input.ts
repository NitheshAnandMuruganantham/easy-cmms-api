import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateWithoutBlockInput } from './maintenance-create-without-block.input';

@InputType()
export class MaintenanceCreateOrConnectWithoutBlockInput {

    @Field(() => MaintenanceWhereUniqueInput, {nullable:false})
    @Type(() => MaintenanceWhereUniqueInput)
    where!: MaintenanceWhereUniqueInput;

    @Field(() => MaintenanceCreateWithoutBlockInput, {nullable:false})
    @Type(() => MaintenanceCreateWithoutBlockInput)
    create!: MaintenanceCreateWithoutBlockInput;
}
