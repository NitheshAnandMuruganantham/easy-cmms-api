import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { ReplacementsUncheckedCreateNestedManyWithoutMaintenanceInput } from '../replacements/replacements-unchecked-create-nested-many-without-maintenance.input';
import { ReportsUncheckedCreateNestedManyWithoutMaintenanceInput } from '../reports/reports-unchecked-create-nested-many-without-maintenance.input';
import { TicketUncheckedCreateNestedOneWithoutMaintenanceInput } from '../ticket/ticket-unchecked-create-nested-one-without-maintenance.input';

@InputType()
export class MaintenanceUncheckedCreateInput {

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

    @Field(() => GraphQLBigInt, {nullable:false})
    assignee_id!: bigint | number;

    @Field(() => GraphQLBigInt, {nullable:false})
    machine_id!: bigint | number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ReplacementsUncheckedCreateNestedManyWithoutMaintenanceInput, {nullable:true})
    replacements?: ReplacementsUncheckedCreateNestedManyWithoutMaintenanceInput;

    @Field(() => ReportsUncheckedCreateNestedManyWithoutMaintenanceInput, {nullable:true})
    reports?: ReportsUncheckedCreateNestedManyWithoutMaintenanceInput;

    @Field(() => TicketUncheckedCreateNestedOneWithoutMaintenanceInput, {nullable:true})
    ticket?: TicketUncheckedCreateNestedOneWithoutMaintenanceInput;
}
