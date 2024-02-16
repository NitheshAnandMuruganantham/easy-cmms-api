import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { MachinesUncheckedCreateNestedManyWithoutMachine_catagoryInput } from '../../machines/dto/machines/machines-unchecked-create-nested-many-without-machine-catagory.input';

@InputType()
export class machine_catagoryUncheckedCreateInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @HideField()
  block_id!: bigint | number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => MachinesUncheckedCreateNestedManyWithoutMachine_catagoryInput, {
    nullable: true,
  })
  machines?: MachinesUncheckedCreateNestedManyWithoutMachine_catagoryInput;
}
