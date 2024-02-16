import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';
import { Type } from 'class-transformer';
import { ReplacementsUpdateWithoutMaintenanceInput } from './replacements-update-without-maintenance.input';

@InputType()
export class ReplacementsUpdateWithWhereUniqueWithoutMaintenanceInput {
  @Field(() => ReplacementsWhereUniqueInput, { nullable: false })
  @Type(() => ReplacementsWhereUniqueInput)
  where!: ReplacementsWhereUniqueInput;

  @Field(() => ReplacementsUpdateWithoutMaintenanceInput, { nullable: false })
  @Type(() => ReplacementsUpdateWithoutMaintenanceInput)
  data!: ReplacementsUpdateWithoutMaintenanceInput;
}
