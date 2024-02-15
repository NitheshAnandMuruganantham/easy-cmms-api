import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutMaintenanceInput } from './users-create-without-maintenance.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutMaintenanceInput } from './users-create-or-connect-without-maintenance.input';
import { UsersUpsertWithoutMaintenanceInput } from './users-upsert-without-maintenance.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { UsersUpdateWithoutMaintenanceInput } from './users-update-without-maintenance.input';

@InputType()
export class UsersUpdateOneRequiredWithoutMaintenanceNestedInput {
  @Field(() => UsersCreateWithoutMaintenanceInput, { nullable: true })
  @Type(() => UsersCreateWithoutMaintenanceInput)
  create?: UsersCreateWithoutMaintenanceInput;

  @Field(() => UsersCreateOrConnectWithoutMaintenanceInput, { nullable: true })
  @Type(() => UsersCreateOrConnectWithoutMaintenanceInput)
  connectOrCreate?: UsersCreateOrConnectWithoutMaintenanceInput;

  @Field(() => UsersUpsertWithoutMaintenanceInput, { nullable: true })
  @Type(() => UsersUpsertWithoutMaintenanceInput)
  upsert?: UsersUpsertWithoutMaintenanceInput;

  @Field(() => UsersWhereUniqueInput, { nullable: true })
  @Type(() => UsersWhereUniqueInput)
  connect?: UsersWhereUniqueInput;

  @Field(() => UsersUpdateWithoutMaintenanceInput, { nullable: true })
  @Type(() => UsersUpdateWithoutMaintenanceInput)
  update?: UsersUpdateWithoutMaintenanceInput;
}
