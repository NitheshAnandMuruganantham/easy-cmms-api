import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    MANAGER = "MANAGER",
    SUPERVISOR = "SUPERVISOR",
    ENGINEER = "ENGINEER",
    GUEST = "GUEST",
    FITTER = "FITTER",
    ADMIN = "ADMIN"
}


registerEnumType(Role, { name: 'Role', description: undefined })
