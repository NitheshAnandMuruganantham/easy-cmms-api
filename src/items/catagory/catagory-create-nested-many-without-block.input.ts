import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { catagoryCreateWithoutBlockInput } from './catagory-create-without-block.input';
import { Type } from 'class-transformer';
import { catagoryCreateOrConnectWithoutBlockInput } from './catagory-create-or-connect-without-block.input';
import { catagoryCreateManyBlockInputEnvelope } from './catagory-create-many-block-input-envelope.input';
import { catagoryWhereUniqueInput } from './catagory-where-unique.input';

@InputType()
export class catagoryCreateNestedManyWithoutBlockInput {
  @Field(() => [catagoryCreateWithoutBlockInput], { nullable: true })
  @Type(() => catagoryCreateWithoutBlockInput)
  create?: Array<catagoryCreateWithoutBlockInput>;

  @Field(() => [catagoryCreateOrConnectWithoutBlockInput], { nullable: true })
  @Type(() => catagoryCreateOrConnectWithoutBlockInput)
  connectOrCreate?: Array<catagoryCreateOrConnectWithoutBlockInput>;

  @Field(() => catagoryCreateManyBlockInputEnvelope, { nullable: true })
  @Type(() => catagoryCreateManyBlockInputEnvelope)
  createMany?: catagoryCreateManyBlockInputEnvelope;

  @Field(() => [catagoryWhereUniqueInput], { nullable: true })
  @Type(() => catagoryWhereUniqueInput)
  connect?: Array<catagoryWhereUniqueInput>;
}
