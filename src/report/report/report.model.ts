import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Maintenance } from '../../maintanance/maintenance/maintenance.model';

@ObjectType()
export class Report {
  @Field(() => ID, { nullable: false })
  id!: bigint;

  @Field(() => String, { nullable: false })
  sign!: string;

  @Field(() => GraphQLJSON, { nullable: false })
  tag!: any;

  @Field(() => String, { nullable: false })
  validated!: bigint;

  @Field(() => String, { nullable: false })
  validated_sign!: bigint;

  @Field(() => String, { nullable: false })
  maintance_id!: bigint;

  @Field(() => Maintenance, { nullable: false })
  maintenance?: Maintenance;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;
}
