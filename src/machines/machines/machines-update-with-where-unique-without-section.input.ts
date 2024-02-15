import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesUpdateWithoutSectionInput } from './machines-update-without-section.input';

@InputType()
export class MachinesUpdateWithWhereUniqueWithoutSectionInput {
  @Field(() => MachinesWhereUniqueInput, { nullable: false })
  @Type(() => MachinesWhereUniqueInput)
  where!: MachinesWhereUniqueInput;

  @Field(() => MachinesUpdateWithoutSectionInput, { nullable: false })
  @Type(() => MachinesUpdateWithoutSectionInput)
  data!: MachinesUpdateWithoutSectionInput;
}
