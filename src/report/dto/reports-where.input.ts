import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../common-dto/prisma/big-int-filter.input';
import { StringFilter } from '../../common-dto/prisma/string-filter.input';
import { JsonFilter } from '../../common-dto/prisma/json-filter.input';
import { DateTimeFilter } from '../../common-dto/prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { MaintenanceRelationFilter } from '../../maintanance/dto/maintenance-relation-filter.input';
import { BlockRelationFilter } from '../../block/dto/block/block-relation-filter.input';

@InputType()
export class ReportsWhereInput {
  @Field(() => [ReportsWhereInput], { nullable: true })
  AND?: Array<ReportsWhereInput>;

  @Field(() => [ReportsWhereInput], { nullable: true })
  OR?: Array<ReportsWhereInput>;

  @Field(() => [ReportsWhereInput], { nullable: true })
  NOT?: Array<ReportsWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => StringFilter, { nullable: true })
  report?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  sign?: StringFilter;

  @Field(() => JsonFilter, { nullable: true })
  tag?: JsonFilter;

  @Field(() => BigIntFilter, { nullable: true })
  validated?: BigIntFilter;

  @Field(() => BigIntFilter, { nullable: true })
  validated_sign?: BigIntFilter;

  @Field(() => BigIntFilter, { nullable: true })
  maintance_id?: BigIntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @HideField()
  block_id?: BigIntFilter;

  @Field(() => MaintenanceRelationFilter, { nullable: true })
  maintenance?: MaintenanceRelationFilter;

  @HideField()
  block?: BlockRelationFilter;
}
