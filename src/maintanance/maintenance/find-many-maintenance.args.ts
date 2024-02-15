import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaintenanceWhereInput } from './maintenance-where.input';
import { Type } from 'class-transformer';
import { MaintenanceOrderByWithRelationAndSearchRelevanceInput } from './maintenance-order-by-with-relation-and-search-relevance.input';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MaintenanceScalarFieldEnum } from './maintenance-scalar-field.enum';

@ArgsType()
export class FindManyMaintenanceArgs {
  @Field(() => MaintenanceWhereInput, { nullable: true })
  @Type(() => MaintenanceWhereInput)
  where?: MaintenanceWhereInput;

  @Field(() => [MaintenanceOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<MaintenanceOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => MaintenanceWhereUniqueInput, { nullable: true })
  cursor?: MaintenanceWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [MaintenanceScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof MaintenanceScalarFieldEnum>;
}
