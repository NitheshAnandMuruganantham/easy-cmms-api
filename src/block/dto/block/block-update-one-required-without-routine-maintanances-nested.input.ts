import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutRoutine_maintanancesInput } from './block-create-without-routine-maintanances.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutRoutine_maintanancesInput } from './block-create-or-connect-without-routine-maintanances.input';
import { BlockUpsertWithoutRoutine_maintanancesInput } from './block-upsert-without-routine-maintanances.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { BlockUpdateWithoutRoutine_maintanancesInput } from './block-update-without-routine-maintanances.input';

@InputType()
export class BlockUpdateOneRequiredWithoutRoutine_maintanancesNestedInput {
  @Field(() => BlockCreateWithoutRoutine_maintanancesInput, { nullable: true })
  @Type(() => BlockCreateWithoutRoutine_maintanancesInput)
  create?: BlockCreateWithoutRoutine_maintanancesInput;

  @Field(() => BlockCreateOrConnectWithoutRoutine_maintanancesInput, {
    nullable: true,
  })
  @Type(() => BlockCreateOrConnectWithoutRoutine_maintanancesInput)
  connectOrCreate?: BlockCreateOrConnectWithoutRoutine_maintanancesInput;

  @Field(() => BlockUpsertWithoutRoutine_maintanancesInput, { nullable: true })
  @Type(() => BlockUpsertWithoutRoutine_maintanancesInput)
  upsert?: BlockUpsertWithoutRoutine_maintanancesInput;

  @Field(() => BlockWhereUniqueInput, { nullable: true })
  @Type(() => BlockWhereUniqueInput)
  connect?: BlockWhereUniqueInput;

  @Field(() => BlockUpdateWithoutRoutine_maintanancesInput, { nullable: true })
  @Type(() => BlockUpdateWithoutRoutine_maintanancesInput)
  update?: BlockUpdateWithoutRoutine_maintanancesInput;
}
