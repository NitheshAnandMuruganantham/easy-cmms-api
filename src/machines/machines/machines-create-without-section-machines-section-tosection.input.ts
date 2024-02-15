import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { BlockCreateNestedOneWithoutMachinesInput } from '../../block/block/block-create-nested-one-without-machines.input';
import { MaintenanceCreateNestedManyWithoutMachinesInput } from '../../maintanance/maintenance/maintenance-create-nested-many-without-machines.input';

@InputType()
export class MachinesCreateWithoutSection_machines_sectionTosectionInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  label!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  profile?: any;

  @Field(() => Int, { nullable: false })
  priority!: number;

  @Field(() => BlockCreateNestedOneWithoutMachinesInput, { nullable: false })
  block!: BlockCreateNestedOneWithoutMachinesInput;

  @Field(() => MaintenanceCreateNestedManyWithoutMachinesInput, {
    nullable: true,
  })
  maintenance?: MaintenanceCreateNestedManyWithoutMachinesInput;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;
}
