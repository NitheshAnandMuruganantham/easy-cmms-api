import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MachinesListRelationFilter } from '../machines/machines-list-relation-filter.input';
import { BlockRelationFilter } from '../block/block-relation-filter.input';

@InputType()
export class SectionsWhereInput {

    @Field(() => [SectionsWhereInput], {nullable:true})
    AND?: Array<SectionsWhereInput>;

    @Field(() => [SectionsWhereInput], {nullable:true})
    OR?: Array<SectionsWhereInput>;

    @Field(() => [SectionsWhereInput], {nullable:true})
    NOT?: Array<SectionsWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @HideField()
    block_id?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => MachinesListRelationFilter, {nullable:true})
    machines?: MachinesListRelationFilter;

    @HideField()
    block?: BlockRelationFilter;
}
