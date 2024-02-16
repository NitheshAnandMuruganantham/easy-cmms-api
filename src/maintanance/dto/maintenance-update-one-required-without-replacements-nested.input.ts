import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateWithoutReplacementsInput } from './maintenance-create-without-replacements.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateOrConnectWithoutReplacementsInput } from './maintenance-create-or-connect-without-replacements.input';
import { MaintenanceUpsertWithoutReplacementsInput } from './maintenance-upsert-without-replacements.input';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { MaintenanceUpdateWithoutReplacementsInput } from './maintenance-update-without-replacements.input';

@InputType()
export class MaintenanceUpdateOneRequiredWithoutReplacementsNestedInput {
  @Field(() => MaintenanceCreateWithoutReplacementsInput, { nullable: true })
  @Type(() => MaintenanceCreateWithoutReplacementsInput)
  create?: MaintenanceCreateWithoutReplacementsInput;

  @Field(() => MaintenanceCreateOrConnectWithoutReplacementsInput, {
    nullable: true,
  })
  @Type(() => MaintenanceCreateOrConnectWithoutReplacementsInput)
  connectOrCreate?: MaintenanceCreateOrConnectWithoutReplacementsInput;

  @Field(() => MaintenanceUpsertWithoutReplacementsInput, { nullable: true })
  @Type(() => MaintenanceUpsertWithoutReplacementsInput)
  upsert?: MaintenanceUpsertWithoutReplacementsInput;

  @Field(() => MaintenanceWhereUniqueInput, { nullable: true })
  @Type(() => MaintenanceWhereUniqueInput)
  connect?: MaintenanceWhereUniqueInput;

  @Field(() => MaintenanceUpdateWithoutReplacementsInput, { nullable: true })
  @Type(() => MaintenanceUpdateWithoutReplacementsInput)
  update?: MaintenanceUpdateWithoutReplacementsInput;
}
