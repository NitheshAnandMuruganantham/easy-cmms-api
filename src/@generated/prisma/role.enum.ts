import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    MANAGER = "MANAGER",
    SUPERVISOR = "SUPERVISOR",
    ENGINEER = "ENGINEER",
    GUEST = "GUEST",
    FITTER = "FITTER",
    PRODUCTION_CONTROLLER = "PRODUCTION_CONTROLLER",
    INPUT_CONTROLLER = "INPUT_CONTROLLER",
    ADMIN = "ADMIN"
}


registerEnumType(Role, { name: 'Role', description: undefined })
