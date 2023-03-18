import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersScalarWhereInput } from './users-scalar-where.input';
import { Type } from 'class-transformer';
import { UsersUpdateManyMutationInput } from './users-update-many-mutation.input';

@InputType()
export class UsersUpdateManyWithWhereWithoutBlockInput {

    @Field(() => UsersScalarWhereInput, {nullable:false})
    @Type(() => UsersScalarWhereInput)
    where!: UsersScalarWhereInput;

    @Field(() => UsersUpdateManyMutationInput, {nullable:false})
    @Type(() => UsersUpdateManyMutationInput)
    data!: UsersUpdateManyMutationInput;
}
