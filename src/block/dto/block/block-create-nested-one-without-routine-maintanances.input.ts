import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutRoutine_maintanancesInput } from './block-create-without-routine-maintanances.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutRoutine_maintanancesInput } from './block-create-or-connect-without-routine-maintanances.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@InputType()
export class BlockCreateNestedOneWithoutRoutine_maintanancesInput {
  @Field(() => BlockCreateWithoutRoutine_maintanancesInput, { nullable: true })
  @Type(() => BlockCreateWithoutRoutine_maintanancesInput)
  create?: BlockCreateWithoutRoutine_maintanancesInput;

  @Field(() => BlockCreateOrConnectWithoutRoutine_maintanancesInput, {
    nullable: true,
  })
  @Type(() => BlockCreateOrConnectWithoutRoutine_maintanancesInput)
  connectOrCreate?: BlockCreateOrConnectWithoutRoutine_maintanancesInput;

  @Field(() => BlockWhereUniqueInput, { nullable: true })
  @Type(() => BlockWhereUniqueInput)
  connect?: BlockWhereUniqueInput;
}
