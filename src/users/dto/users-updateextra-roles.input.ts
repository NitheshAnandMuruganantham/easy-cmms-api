import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../../common-dto/prisma/role.enum';

@InputType()
export class UsersUpdateextra_rolesInput {
  @Field(() => [Role], { nullable: true })
  set?: Array<keyof typeof Role>;

  @Field(() => [Role], { nullable: true })
  push?: Array<keyof typeof Role>;
}
