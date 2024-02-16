import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesCreateWithoutSection_machines_sectionTosectionInput } from './machines-create-without-section-machines-section-tosection.input';

@InputType()
export class MachinesCreateOrConnectWithoutSection_machines_sectionTosectionInput {
  @Field(() => MachinesWhereUniqueInput, { nullable: false })
  @Type(() => MachinesWhereUniqueInput)
  where!: MachinesWhereUniqueInput;

  @Field(() => MachinesCreateWithoutSection_machines_sectionTosectionInput, {
    nullable: false,
  })
  @Type(() => MachinesCreateWithoutSection_machines_sectionTosectionInput)
  create!: MachinesCreateWithoutSection_machines_sectionTosectionInput;
}
