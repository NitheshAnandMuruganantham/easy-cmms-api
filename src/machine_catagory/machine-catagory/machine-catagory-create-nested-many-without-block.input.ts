import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machine_catagoryCreateWithoutBlockInput } from './machine-catagory-create-without-block.input';
import { Type } from 'class-transformer';
import { machine_catagoryCreateOrConnectWithoutBlockInput } from './machine-catagory-create-or-connect-without-block.input';
import { machine_catagoryCreateManyBlockInputEnvelope } from './machine-catagory-create-many-block-input-envelope.input';
import { machine_catagoryWhereUniqueInput } from './machine-catagory-where-unique.input';

@InputType()
export class machine_catagoryCreateNestedManyWithoutBlockInput {
  @Field(() => [machine_catagoryCreateWithoutBlockInput], { nullable: true })
  @Type(() => machine_catagoryCreateWithoutBlockInput)
  create?: Array<machine_catagoryCreateWithoutBlockInput>;

  @Field(() => [machine_catagoryCreateOrConnectWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => machine_catagoryCreateOrConnectWithoutBlockInput)
  connectOrCreate?: Array<machine_catagoryCreateOrConnectWithoutBlockInput>;

  @Field(() => machine_catagoryCreateManyBlockInputEnvelope, { nullable: true })
  @Type(() => machine_catagoryCreateManyBlockInputEnvelope)
  createMany?: machine_catagoryCreateManyBlockInputEnvelope;

  @Field(() => [machine_catagoryWhereUniqueInput], { nullable: true })
  @Type(() => machine_catagoryWhereUniqueInput)
  connect?: Array<machine_catagoryWhereUniqueInput>;
}
