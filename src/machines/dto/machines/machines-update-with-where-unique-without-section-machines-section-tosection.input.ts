import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesUpdateWithoutSection_machines_sectionTosectionInput } from './machines-update-without-section-machines-section-tosection.input';

@InputType()
export class MachinesUpdateWithWhereUniqueWithoutSection_machines_sectionTosectionInput {
  @Field(() => MachinesWhereUniqueInput, { nullable: false })
  @Type(() => MachinesWhereUniqueInput)
  where!: MachinesWhereUniqueInput;

  @Field(() => MachinesUpdateWithoutSection_machines_sectionTosectionInput, {
    nullable: false,
  })
  @Type(() => MachinesUpdateWithoutSection_machines_sectionTosectionInput)
  data!: MachinesUpdateWithoutSection_machines_sectionTosectionInput;
}
