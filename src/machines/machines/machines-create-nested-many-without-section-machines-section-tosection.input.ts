import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutSection_machines_sectionTosectionInput } from './machines-create-without-section-machines-section-tosection.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutSection_machines_sectionTosectionInput } from './machines-create-or-connect-without-section-machines-section-tosection.input';
import { MachinesCreateManySection_machines_sectionTosectionInputEnvelope } from './machines-create-many-section-machines-section-tosection-input-envelope.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';

@InputType()
export class MachinesCreateNestedManyWithoutSection_machines_sectionTosectionInput {
  @Field(() => [MachinesCreateWithoutSection_machines_sectionTosectionInput], {
    nullable: true,
  })
  @Type(() => MachinesCreateWithoutSection_machines_sectionTosectionInput)
  create?: Array<MachinesCreateWithoutSection_machines_sectionTosectionInput>;

  @Field(
    () => [
      MachinesCreateOrConnectWithoutSection_machines_sectionTosectionInput,
    ],
    { nullable: true },
  )
  @Type(
    () => MachinesCreateOrConnectWithoutSection_machines_sectionTosectionInput,
  )
  connectOrCreate?: Array<MachinesCreateOrConnectWithoutSection_machines_sectionTosectionInput>;

  @Field(
    () => MachinesCreateManySection_machines_sectionTosectionInputEnvelope,
    { nullable: true },
  )
  @Type(() => MachinesCreateManySection_machines_sectionTosectionInputEnvelope)
  createMany?: MachinesCreateManySection_machines_sectionTosectionInputEnvelope;

  @Field(() => [MachinesWhereUniqueInput], { nullable: true })
  @Type(() => MachinesWhereUniqueInput)
  connect?: Array<MachinesWhereUniqueInput>;
}
