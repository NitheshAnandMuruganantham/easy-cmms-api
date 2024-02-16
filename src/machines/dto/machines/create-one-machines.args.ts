import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MachinesCreateInput } from './machines-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMachinesArgs {
  @Field(() => MachinesCreateInput, { nullable: false })
  @Type(() => MachinesCreateInput)
  data!: MachinesCreateInput;
}
