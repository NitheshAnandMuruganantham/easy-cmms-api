import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { HideField } from '@nestjs/graphql';
import { Role } from '../../common-dto/prisma/role.enum';
import { UsersCreateextra_rolesInput } from './users-createextra-roles.input';
import { MaintenanceCreateNestedManyWithoutAssigneeInput } from '../../maintanance/dto/maintenance-create-nested-many-without-assignee.input';
import { TicketCreateNestedManyWithoutUserInput } from '../../ticket/dto/ticket-create-nested-many-without-user.input';
import { routine_maintanancesCreateNestedManyWithoutAssigneeInput } from '../../routine-maintanances/dto/routine-maintanances-create-nested-many-without-assignee.input';

@InputType()
export class UsersCreateWithoutBlockInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => GraphQLJSON, { nullable: true })
  profile?: any;

  @Field(() => String, { nullable: false })
  phone!: string;

  @HideField()
  user_auth_id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Role, { nullable: false })
  role!: keyof typeof Role;

  @Field(() => UsersCreateextra_rolesInput, { nullable: true })
  extra_roles?: UsersCreateextra_rolesInput;

  @Field(() => String, { nullable: true })
  role_alias?: string;

  @Field(() => MaintenanceCreateNestedManyWithoutAssigneeInput, {
    nullable: true,
  })
  maintenance?: MaintenanceCreateNestedManyWithoutAssigneeInput;

  @Field(() => TicketCreateNestedManyWithoutUserInput, { nullable: true })
  ticket?: TicketCreateNestedManyWithoutUserInput;

  @Field(() => routine_maintanancesCreateNestedManyWithoutAssigneeInput, {
    nullable: true,
  })
  routine_maintanances?: routine_maintanancesCreateNestedManyWithoutAssigneeInput;
}
