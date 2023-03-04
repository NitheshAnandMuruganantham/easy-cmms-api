import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';
import { Type } from 'class-transformer';
import { ReplacementsCreateWithoutMaintenanceInput } from './replacements-create-without-maintenance.input';

@InputType()
export class ReplacementsCreateOrConnectWithoutMaintenanceInput {

    @Field(() => ReplacementsWhereUniqueInput, {nullable:false})
    @Type(() => ReplacementsWhereUniqueInput)
    where!: ReplacementsWhereUniqueInput;

    @Field(() => ReplacementsCreateWithoutMaintenanceInput, {nullable:false})
    @Type(() => ReplacementsCreateWithoutMaintenanceInput)
    create!: ReplacementsCreateWithoutMaintenanceInput;
}
