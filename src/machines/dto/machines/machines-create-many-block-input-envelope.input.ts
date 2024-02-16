import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateManyBlockInput } from './machines-create-many-block.input';
import { Type } from 'class-transformer';

@InputType()
export class MachinesCreateManyBlockInputEnvelope {
  @Field(() => [MachinesCreateManyBlockInput], { nullable: false })
  @Type(() => MachinesCreateManyBlockInput)
  data!: Array<MachinesCreateManyBlockInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
