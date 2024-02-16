import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsCreateManyMaintenanceInput } from './replacements-create-many-maintenance.input';
import { Type } from 'class-transformer';

@InputType()
export class ReplacementsCreateManyMaintenanceInputEnvelope {
  @Field(() => [ReplacementsCreateManyMaintenanceInput], { nullable: false })
  @Type(() => ReplacementsCreateManyMaintenanceInput)
  data!: Array<ReplacementsCreateManyMaintenanceInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
