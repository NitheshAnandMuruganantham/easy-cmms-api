import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../../common-dto/prisma/role.enum';

@InputType()
export class UsersCreateextra_rolesInput {
  @Field(() => [Role], { nullable: false })
  set!: Array<keyof typeof Role>;
}
