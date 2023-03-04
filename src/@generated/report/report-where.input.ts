import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { MaintenanceRelationFilter } from '../maintenance/maintenance-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ReportWhereInput {

    @Field(() => [ReportWhereInput], {nullable:true})
    AND?: Array<ReportWhereInput>;

    @Field(() => [ReportWhereInput], {nullable:true})
    OR?: Array<ReportWhereInput>;

    @Field(() => [ReportWhereInput], {nullable:true})
    NOT?: Array<ReportWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    sign?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    tag?: JsonFilter;

    @Field(() => BigIntFilter, {nullable:true})
    validated?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    validated_sign?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    maintance_id?: BigIntFilter;

    @Field(() => MaintenanceRelationFilter, {nullable:true})
    maintenance?: MaintenanceRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
