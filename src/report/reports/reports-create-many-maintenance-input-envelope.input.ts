import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportsCreateManyMaintenanceInput } from './reports-create-many-maintenance.input';
import { Type } from 'class-transformer';

@InputType()
export class ReportsCreateManyMaintenanceInputEnvelope {
  @Field(() => [ReportsCreateManyMaintenanceInput], { nullable: false })
  @Type(() => ReportsCreateManyMaintenanceInput)
  data!: Array<ReportsCreateManyMaintenanceInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
