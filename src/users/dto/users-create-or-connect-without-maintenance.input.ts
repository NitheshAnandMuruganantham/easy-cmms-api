import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutMaintenanceInput } from './users-create-without-maintenance.input';

@InputType()
export class UsersCreateOrConnectWithoutMaintenanceInput {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: UsersWhereUniqueInput;

  @Field(() => UsersCreateWithoutMaintenanceInput, { nullable: false })
  @Type(() => UsersCreateWithoutMaintenanceInput)
  create!: UsersCreateWithoutMaintenanceInput;
}
