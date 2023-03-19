import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';

@InputType()
export class UsersCreateextra_rolesInput {

    @Field(() => [Role], {nullable:false})
    set!: Array<keyof typeof Role>;
}