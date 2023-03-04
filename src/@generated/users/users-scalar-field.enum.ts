import { registerEnumType } from '@nestjs/graphql';

export enum UsersScalarFieldEnum {
    id = "id",
    profile = "profile",
    phone = "phone",
    user_auth_id = "user_auth_id",
    name = "name",
    created_at = "created_at",
    updated_at = "updated_at",
    role = "role"
}


registerEnumType(UsersScalarFieldEnum, { name: 'UsersScalarFieldEnum', description: undefined })
