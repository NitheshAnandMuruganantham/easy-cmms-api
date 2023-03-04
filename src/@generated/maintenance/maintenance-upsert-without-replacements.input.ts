import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceUpdateWithoutReplacementsInput } from './maintenance-update-without-replacements.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateWithoutReplacementsInput } from './maintenance-create-without-replacements.input';

@InputType()
export class MaintenanceUpsertWithoutReplacementsInput {

    @Field(() => MaintenanceUpdateWithoutReplacementsInput, {nullable:false})
    @Type(() => MaintenanceUpdateWithoutReplacementsInput)
    update!: MaintenanceUpdateWithoutReplacementsInput;

    @Field(() => MaintenanceCreateWithoutReplacementsInput, {nullable:false})
    @Type(() => MaintenanceCreateWithoutReplacementsInput)
    create!: MaintenanceCreateWithoutReplacementsInput;
}
