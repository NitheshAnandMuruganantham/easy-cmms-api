import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutSectionInput } from './machines-create-without-section.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutSectionInput } from './machines-create-or-connect-without-section.input';
import { MachinesCreateManySectionInputEnvelope } from './machines-create-many-section-input-envelope.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';

@InputType()
export class MachinesCreateNestedManyWithoutSectionInput {
  @Field(() => [MachinesCreateWithoutSectionInput], { nullable: true })
  @Type(() => MachinesCreateWithoutSectionInput)
  create?: Array<MachinesCreateWithoutSectionInput>;

  @Field(() => [MachinesCreateOrConnectWithoutSectionInput], { nullable: true })
  @Type(() => MachinesCreateOrConnectWithoutSectionInput)
  connectOrCreate?: Array<MachinesCreateOrConnectWithoutSectionInput>;

  @Field(() => MachinesCreateManySectionInputEnvelope, { nullable: true })
  @Type(() => MachinesCreateManySectionInputEnvelope)
  createMany?: MachinesCreateManySectionInputEnvelope;

  @Field(() => [MachinesWhereUniqueInput], { nullable: true })
  @Type(() => MachinesWhereUniqueInput)
  connect?: Array<MachinesWhereUniqueInput>;
}
