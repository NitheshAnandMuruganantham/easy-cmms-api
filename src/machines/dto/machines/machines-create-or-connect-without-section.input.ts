import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesCreateWithoutSectionInput } from './machines-create-without-section.input';

@InputType()
export class MachinesCreateOrConnectWithoutSectionInput {
  @Field(() => MachinesWhereUniqueInput, { nullable: false })
  @Type(() => MachinesWhereUniqueInput)
  where!: MachinesWhereUniqueInput;

  @Field(() => MachinesCreateWithoutSectionInput, { nullable: false })
  @Type(() => MachinesCreateWithoutSectionInput)
  create!: MachinesCreateWithoutSectionInput;
}
