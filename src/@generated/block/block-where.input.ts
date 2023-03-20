import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MachinesListRelationFilter } from '../machines/machines-list-relation-filter.input';
import { UsersListRelationFilter } from '../users/users-list-relation-filter.input';
import { Block_settingsListRelationFilter } from '../prisma/block-settings-list-relation-filter.input';
import { Production_dataListRelationFilter } from '../prisma/production-data-list-relation-filter.input';

@InputType()
export class BlockWhereInput {

    @Field(() => [BlockWhereInput], {nullable:true})
    AND?: Array<BlockWhereInput>;

    @Field(() => [BlockWhereInput], {nullable:true})
    OR?: Array<BlockWhereInput>;

    @Field(() => [BlockWhereInput], {nullable:true})
    NOT?: Array<BlockWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    location?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    Mailings?: StringNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => MachinesListRelationFilter, {nullable:true})
    machines?: MachinesListRelationFilter;

    @Field(() => UsersListRelationFilter, {nullable:true})
    Users?: UsersListRelationFilter;

    @Field(() => Block_settingsListRelationFilter, {nullable:true})
    block_settings?: Block_settingsListRelationFilter;

    @Field(() => Production_dataListRelationFilter, {nullable:true})
    production_data?: Production_dataListRelationFilter;
}
