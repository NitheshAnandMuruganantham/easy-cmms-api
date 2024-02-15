import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesUpdateWithoutBlockInput } from './machines-update-without-block.input';

@InputType()
export class MachinesUpdateWithWhereUniqueWithoutBlockInput {
  @Field(() => MachinesWhereUniqueInput, { nullable: false })
  @Type(() => MachinesWhereUniqueInput)
  where!: MachinesWhereUniqueInput;

  @Field(() => MachinesUpdateWithoutBlockInput, { nullable: false })
  @Type(() => MachinesUpdateWithoutBlockInput)
  data!: MachinesUpdateWithoutBlockInput;
}
