import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { EnumRoleNullableListFilter } from '../prisma/enum-role-nullable-list-filter.input';

@InputType()
export class UsersScalarWhereInput {

    @Field(() => [UsersScalarWhereInput], {nullable:true})
    AND?: Array<UsersScalarWhereInput>;

    @Field(() => [UsersScalarWhereInput], {nullable:true})
    OR?: Array<UsersScalarWhereInput>;

    @Field(() => [UsersScalarWhereInput], {nullable:true})
    NOT?: Array<UsersScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => JsonFilter, {nullable:true})
    profile?: JsonFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @HideField()
    user_auth_id?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @HideField()
    blockId?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => EnumRoleNullableListFilter, {nullable:true})
    extra_roles?: EnumRoleNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    role_alias?: StringFilter;
}
