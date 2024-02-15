import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesUpdateWithoutItemsInput } from './machines-update-without-items.input';
import { MachinesCreateWithoutItemsInput } from './machines-create-without-items.input';

@InputType()
export class MachinesUpsertWithWhereUniqueWithoutItemsInput {
  @Field(() => MachinesWhereUniqueInput, { nullable: false })
  @Type(() => MachinesWhereUniqueInput)
  where!: MachinesWhereUniqueInput;

  @Field(() => MachinesUpdateWithoutItemsInput, { nullable: false })
  @Type(() => MachinesUpdateWithoutItemsInput)
  update!: MachinesUpdateWithoutItemsInput;

  @Field(() => MachinesCreateWithoutItemsInput, { nullable: false })
  @Type(() => MachinesCreateWithoutItemsInput)
  create!: MachinesCreateWithoutItemsInput;
}
