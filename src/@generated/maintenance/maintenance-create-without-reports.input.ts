import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { UsersCreateNestedOneWithoutMaintenanceInput } from '../users/users-create-nested-one-without-maintenance.input';
import { MachinesCreateNestedOneWithoutMaintenanceInput } from '../machines/machines-create-nested-one-without-maintenance.input';
import { ReplacementsCreateNestedManyWithoutMaintenanceInput } from '../replacements/replacements-create-nested-many-without-maintenance.input';
import { TicketCreateNestedOneWithoutMaintenanceInput } from '../ticket/ticket-create-nested-one-without-maintenance.input';
import { BlockCreateNestedOneWithoutMaintenanceInput } from '../block/block-create-nested-one-without-maintenance.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class MaintenanceCreateWithoutReportsInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    photo?: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    from!: Date | string;

    @Field(() => Date, {nullable:false})
    to!: Date | string;

    @Field(() => Boolean, {nullable:false})
    resolved!: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Boolean, {nullable:false})
    un_planned!: boolean;

    @Field(() => Date, {nullable:true})
    elapsed?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UsersCreateNestedOneWithoutMaintenanceInput, {nullable:false})
    assignee!: UsersCreateNestedOneWithoutMaintenanceInput;

    @Field(() => MachinesCreateNestedOneWithoutMaintenanceInput, {nullable:false})
    machines!: MachinesCreateNestedOneWithoutMaintenanceInput;

    @Field(() => ReplacementsCreateNestedManyWithoutMaintenanceInput, {nullable:true})
    replacements?: ReplacementsCreateNestedManyWithoutMaintenanceInput;

    @Field(() => TicketCreateNestedOneWithoutMaintenanceInput, {nullable:true})
    ticket?: TicketCreateNestedOneWithoutMaintenanceInput;

    @HideField()
    block!: BlockCreateNestedOneWithoutMaintenanceInput;
}
