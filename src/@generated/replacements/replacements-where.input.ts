import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { ItemsRelationFilter } from '../items/items-relation-filter.input';
import { MaintenanceRelationFilter } from '../maintenance/maintenance-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class ReplacementsWhereInput {

    @Field(() => [ReplacementsWhereInput], {nullable:true})
    AND?: Array<ReplacementsWhereInput>;

    @Field(() => [ReplacementsWhereInput], {nullable:true})
    OR?: Array<ReplacementsWhereInput>;

    @Field(() => [ReplacementsWhereInput], {nullable:true})
    NOT?: Array<ReplacementsWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    quantity?: IntFilter;

    @Field(() => JsonFilter, {nullable:true})
    metadata?: JsonFilter;

    @Field(() => BigIntFilter, {nullable:true})
    item_id?: BigIntFilter;

    @Field(() => ItemsRelationFilter, {nullable:true})
    items?: ItemsRelationFilter;

    @Field(() => BigIntFilter, {nullable:true})
    maintanance_id?: BigIntFilter;

    @Field(() => MaintenanceRelationFilter, {nullable:true})
    maintenance?: MaintenanceRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    approved?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
