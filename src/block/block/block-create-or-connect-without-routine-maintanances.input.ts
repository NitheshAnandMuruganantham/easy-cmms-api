import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutRoutine_maintanancesInput } from './block-create-without-routine-maintanances.input';

@InputType()
export class BlockCreateOrConnectWithoutRoutine_maintanancesInput {
  @Field(() => BlockWhereUniqueInput, { nullable: false })
  @Type(() => BlockWhereUniqueInput)
  where!: BlockWhereUniqueInput;

  @Field(() => BlockCreateWithoutRoutine_maintanancesInput, { nullable: false })
  @Type(() => BlockCreateWithoutRoutine_maintanancesInput)
  create!: BlockCreateWithoutRoutine_maintanancesInput;
}
