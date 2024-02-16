import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesUpdateWithoutSection_machines_sectionTosectionInput } from './machines-update-without-section-machines-section-tosection.input';
import { MachinesCreateWithoutSection_machines_sectionTosectionInput } from './machines-create-without-section-machines-section-tosection.input';

@InputType()
export class MachinesUpsertWithWhereUniqueWithoutSection_machines_sectionTosectionInput {
  @Field(() => MachinesWhereUniqueInput, { nullable: false })
  @Type(() => MachinesWhereUniqueInput)
  where!: MachinesWhereUniqueInput;

  @Field(() => MachinesUpdateWithoutSection_machines_sectionTosectionInput, {
    nullable: false,
  })
  @Type(() => MachinesUpdateWithoutSection_machines_sectionTosectionInput)
  update!: MachinesUpdateWithoutSection_machines_sectionTosectionInput;

  @Field(() => MachinesCreateWithoutSection_machines_sectionTosectionInput, {
    nullable: false,
  })
  @Type(() => MachinesCreateWithoutSection_machines_sectionTosectionInput)
  create!: MachinesCreateWithoutSection_machines_sectionTosectionInput;
}
