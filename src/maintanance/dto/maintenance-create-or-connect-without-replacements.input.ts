import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateWithoutReplacementsInput } from './maintenance-create-without-replacements.input';

@InputType()
export class MaintenanceCreateOrConnectWithoutReplacementsInput {
  @Field(() => MaintenanceWhereUniqueInput, { nullable: false })
  @Type(() => MaintenanceWhereUniqueInput)
  where!: MaintenanceWhereUniqueInput;

  @Field(() => MaintenanceCreateWithoutReplacementsInput, { nullable: false })
  @Type(() => MaintenanceCreateWithoutReplacementsInput)
  create!: MaintenanceCreateWithoutReplacementsInput;
}
