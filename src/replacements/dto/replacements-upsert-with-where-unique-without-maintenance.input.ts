import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';
import { Type } from 'class-transformer';
import { ReplacementsUpdateWithoutMaintenanceInput } from './replacements-update-without-maintenance.input';
import { ReplacementsCreateWithoutMaintenanceInput } from './replacements-create-without-maintenance.input';

@InputType()
export class ReplacementsUpsertWithWhereUniqueWithoutMaintenanceInput {
  @Field(() => ReplacementsWhereUniqueInput, { nullable: false })
  @Type(() => ReplacementsWhereUniqueInput)
  where!: ReplacementsWhereUniqueInput;

  @Field(() => ReplacementsUpdateWithoutMaintenanceInput, { nullable: false })
  @Type(() => ReplacementsUpdateWithoutMaintenanceInput)
  update!: ReplacementsUpdateWithoutMaintenanceInput;

  @Field(() => ReplacementsCreateWithoutMaintenanceInput, { nullable: false })
  @Type(() => ReplacementsCreateWithoutMaintenanceInput)
  create!: ReplacementsCreateWithoutMaintenanceInput;
}
