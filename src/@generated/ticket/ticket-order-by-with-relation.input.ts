import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { UsersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { MaintenanceOrderByWithRelationInput } from '../maintenance/maintenance-order-by-with-relation.input';
import { MachinesOrderByWithRelationInput } from '../machines/machines-order-by-with-relation.input';

@InputType()
export class TicketOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    photos?: keyof typeof SortOrder;

    @HideField()
    user_id?: keyof typeof SortOrder;

    @HideField()
    user?: UsersOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    maintenance_id?: keyof typeof SortOrder;

    @Field(() => MaintenanceOrderByWithRelationInput, {nullable:true})
    maintenance?: MaintenanceOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    machine_id?: keyof typeof SortOrder;

    @Field(() => MachinesOrderByWithRelationInput, {nullable:true})
    machines?: MachinesOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;
}
