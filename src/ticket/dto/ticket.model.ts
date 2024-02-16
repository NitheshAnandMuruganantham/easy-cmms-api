import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';
import { ticket_status } from '../../common-dto/prisma/ticket-status.enum';
import { Users } from '../../users/dto/users.model';
import { Maintenance } from '../../maintanance/dto/maintenance.model';
import { Machines } from '../../machines/dto/machines/machines.model';
import { Block } from '../../block/dto/block/block.model';

@ObjectType()
export class Ticket {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  id!: bigint;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: false })
  photos!: string;

  @Field(() => GraphQLBigInt, { nullable: false })
  user_id!: bigint;

  @Field(() => GraphQLBigInt, { nullable: true })
  maintenance_id!: bigint | null;

  @Field(() => GraphQLBigInt, { nullable: false })
  machine_id!: bigint;

  @Field(() => ticket_status, { nullable: false })
  status!: keyof typeof ticket_status;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => GraphQLBigInt, { nullable: false })
  block_id!: bigint;

  @Field(() => Users, { nullable: false })
  user?: Users;

  @Field(() => Maintenance, { nullable: true })
  maintenance?: Maintenance | null;

  @Field(() => Machines, { nullable: false })
  machines?: Machines;

  @Field(() => Block, { nullable: false })
  block?: Block;
}
