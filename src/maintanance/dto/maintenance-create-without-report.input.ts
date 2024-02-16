import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { UsersCreateNestedOneWithoutMaintenanceInput } from '../../users/dto/users-create-nested-one-without-maintenance.input';
import { MachinesCreateNestedOneWithoutMaintenanceInput } from '../../machines/dto/machines/machines-create-nested-one-without-maintenance.input';
import { ReplacementsCreateNestedManyWithoutMaintenanceInput } from '../../replacements/dto/replacements-create-nested-many-without-maintenance.input';

@InputType()
export class MaintenanceCreateWithoutReportInput {
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

  @Field(() => UsersCreateNestedOneWithoutMaintenanceInput, { nullable: false })
  assignee!: UsersCreateNestedOneWithoutMaintenanceInput;

  @Field(() => MachinesCreateNestedOneWithoutMaintenanceInput, {
    nullable: false,
  })
  machines!: MachinesCreateNestedOneWithoutMaintenanceInput;

  @Field(() => ReplacementsCreateNestedManyWithoutMaintenanceInput, {
    nullable: true,
  })
  replacements?: ReplacementsCreateNestedManyWithoutMaintenanceInput;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;
}
