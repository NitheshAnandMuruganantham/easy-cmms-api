import { registerEnumType } from '@nestjs/graphql';

export enum UsersOrderByRelevanceFieldEnum {
    phone = "phone",
    user_auth_id = "user_auth_id",
    name = "name"
}


registerEnumType(UsersOrderByRelevanceFieldEnum, { name: 'UsersOrderByRelevanceFieldEnum', description: undefined })
