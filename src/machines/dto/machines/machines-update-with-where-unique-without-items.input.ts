import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesUpdateWithoutItemsInput } from './machines-update-without-items.input';

@InputType()
export class MachinesUpdateWithWhereUniqueWithoutItemsInput {
  @Field(() => MachinesWhereUniqueInput, { nullable: false })
  @Type(() => MachinesWhereUniqueInput)
  where!: MachinesWhereUniqueInput;

  @Field(() => MachinesUpdateWithoutItemsInput, { nullable: false })
  @Type(() => MachinesUpdateWithoutItemsInput)
  data!: MachinesUpdateWithoutItemsInput;
}
