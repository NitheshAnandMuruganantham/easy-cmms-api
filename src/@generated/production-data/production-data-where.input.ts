import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { Type } from 'class-transformer';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UsersRelationFilter } from '../users/users-relation-filter.input';

@InputType()
export class production_dataWhereInput {

    @Field(() => [production_dataWhereInput], {nullable:true})
    AND?: Array<production_dataWhereInput>;

    @Field(() => [production_dataWhereInput], {nullable:true})
    OR?: Array<production_dataWhereInput>;

    @Field(() => [production_dataWhereInput], {nullable:true})
    NOT?: Array<production_dataWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => JsonFilter, {nullable:true})
    @Type(() => JsonFilter)
    data?: JsonFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    from?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    to?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => BigIntFilter, {nullable:true})
    updated_by?: BigIntFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    updatedBy?: UsersRelationFilter;
}
