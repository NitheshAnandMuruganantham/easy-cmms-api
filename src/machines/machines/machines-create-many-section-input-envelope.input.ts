import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateManySectionInput } from './machines-create-many-section.input';
import { Type } from 'class-transformer';

@InputType()
export class MachinesCreateManySectionInputEnvelope {
  @Field(() => [MachinesCreateManySectionInput], { nullable: false })
  @Type(() => MachinesCreateManySectionInput)
  data!: Array<MachinesCreateManySectionInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
