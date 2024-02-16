import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ReplacementsUncheckedCreateNestedManyWithoutMaintenanceInput } from '../../replacements/dto/replacements-unchecked-create-nested-many-without-maintenance.input';

@InputType()
export class MaintenanceUncheckedCreateWithoutReportInput {
  @Field(() => String, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => Date, { nullable: false })
  from!: Date | string;

  @Field(() => Date, { nullable: false })
  to!: Date | string;

  @Field(() => Boolean, { nullable: false })
  resolved!: boolean;

  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;

  @Field(() => Boolean, { nullable: false })
  un_planned!: boolean;

  @Field(() => Date, { nullable: false })
  elapsed!: Date | string;

  @Field(() => String, { nullable: false })
  assignee_id!: bigint | number;

  @Field(() => String, { nullable: false })
  machine_id!: bigint | number;

  @Field(() => ReplacementsUncheckedCreateNestedManyWithoutMaintenanceInput, {
    nullable: true,
  })
  replacements?: ReplacementsUncheckedCreateNestedManyWithoutMaintenanceInput;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;
}
