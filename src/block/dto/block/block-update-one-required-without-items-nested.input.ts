import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutItemsInput } from './block-create-without-items.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutItemsInput } from './block-create-or-connect-without-items.input';
import { BlockUpsertWithoutItemsInput } from './block-upsert-without-items.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { BlockUpdateWithoutItemsInput } from './block-update-without-items.input';

@InputType()
export class BlockUpdateOneRequiredWithoutItemsNestedInput {
  @Field(() => BlockCreateWithoutItemsInput, { nullable: true })
  @Type(() => BlockCreateWithoutItemsInput)
  create?: BlockCreateWithoutItemsInput;

  @Field(() => BlockCreateOrConnectWithoutItemsInput, { nullable: true })
  @Type(() => BlockCreateOrConnectWithoutItemsInput)
  connectOrCreate?: BlockCreateOrConnectWithoutItemsInput;

  @Field(() => BlockUpsertWithoutItemsInput, { nullable: true })
  @Type(() => BlockUpsertWithoutItemsInput)
  upsert?: BlockUpsertWithoutItemsInput;

  @Field(() => BlockWhereUniqueInput, { nullable: true })
  @Type(() => BlockWhereUniqueInput)
  connect?: BlockWhereUniqueInput;

  @Field(() => BlockUpdateWithoutItemsInput, { nullable: true })
  @Type(() => BlockUpdateWithoutItemsInput)
  update?: BlockUpdateWithoutItemsInput;
}
