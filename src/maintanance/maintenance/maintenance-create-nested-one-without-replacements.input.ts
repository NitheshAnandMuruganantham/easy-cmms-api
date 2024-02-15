import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateWithoutReplacementsInput } from './maintenance-create-without-replacements.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateOrConnectWithoutReplacementsInput } from './maintenance-create-or-connect-without-replacements.input';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';

@InputType()
export class MaintenanceCreateNestedOneWithoutReplacementsInput {

    @Field(() => MaintenanceCreateWithoutReplacementsInput, {nullable:true})
    @Type(() => MaintenanceCreateWithoutReplacementsInput)
    create?: MaintenanceCreateWithoutReplacementsInput;

    @Field(() => MaintenanceCreateOrConnectWithoutReplacementsInput, {nullable:true})
    @Type(() => MaintenanceCreateOrConnectWithoutReplacementsInput)
    connectOrCreate?: MaintenanceCreateOrConnectWithoutReplacementsInput;

    @Field(() => MaintenanceWhereUniqueInput, {nullable:true})
    @Type(() => MaintenanceWhereUniqueInput)
    connect?: MaintenanceWhereUniqueInput;
}
