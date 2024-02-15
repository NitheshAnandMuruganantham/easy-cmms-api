import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutItemsInput } from './machines-create-without-items.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutItemsInput } from './machines-create-or-connect-without-items.input';
import { MachinesCreateManyItemsInputEnvelope } from './machines-create-many-items-input-envelope.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';

@InputType()
export class MachinesCreateNestedManyWithoutItemsInput {
  @Field(() => [MachinesCreateWithoutItemsInput], { nullable: true })
  @Type(() => MachinesCreateWithoutItemsInput)
  create?: Array<MachinesCreateWithoutItemsInput>;

  @Field(() => [MachinesCreateOrConnectWithoutItemsInput], { nullable: true })
  @Type(() => MachinesCreateOrConnectWithoutItemsInput)
  connectOrCreate?: Array<MachinesCreateOrConnectWithoutItemsInput>;

  @Field(() => MachinesCreateManyItemsInputEnvelope, { nullable: true })
  @Type(() => MachinesCreateManyItemsInputEnvelope)
  createMany?: MachinesCreateManyItemsInputEnvelope;

  @Field(() => [MachinesWhereUniqueInput], { nullable: true })
  @Type(() => MachinesWhereUniqueInput)
  connect?: Array<MachinesWhereUniqueInput>;
}
