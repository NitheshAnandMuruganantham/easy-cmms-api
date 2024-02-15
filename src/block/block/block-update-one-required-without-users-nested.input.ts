import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutUsersInput } from './block-create-without-users.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutUsersInput } from './block-create-or-connect-without-users.input';
import { BlockUpsertWithoutUsersInput } from './block-upsert-without-users.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { BlockUpdateWithoutUsersInput } from './block-update-without-users.input';

@InputType()
export class BlockUpdateOneRequiredWithoutUsersNestedInput {
  @Field(() => BlockCreateWithoutUsersInput, { nullable: true })
  @Type(() => BlockCreateWithoutUsersInput)
  create?: BlockCreateWithoutUsersInput;

  @Field(() => BlockCreateOrConnectWithoutUsersInput, { nullable: true })
  @Type(() => BlockCreateOrConnectWithoutUsersInput)
  connectOrCreate?: BlockCreateOrConnectWithoutUsersInput;

  @Field(() => BlockUpsertWithoutUsersInput, { nullable: true })
  @Type(() => BlockUpsertWithoutUsersInput)
  upsert?: BlockUpsertWithoutUsersInput;

  @Field(() => BlockWhereUniqueInput, { nullable: true })
  @Type(() => BlockWhereUniqueInput)
  connect?: BlockWhereUniqueInput;

  @Field(() => BlockUpdateWithoutUsersInput, { nullable: true })
  @Type(() => BlockUpdateWithoutUsersInput)
  update?: BlockUpdateWithoutUsersInput;
}
