import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MachinesCreateManyInput } from './machines-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMachinesArgs {
  @Field(() => [MachinesCreateManyInput], { nullable: false })
  @Type(() => MachinesCreateManyInput)
  data!: Array<MachinesCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
