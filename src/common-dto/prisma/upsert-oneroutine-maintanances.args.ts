import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { routine_maintanancesWhereUniqueInput } from '../../routine-maintanances/dto/routine-maintanances-where-unique.input';
import { Type } from 'class-transformer';
import { routine_maintanancesCreateInput } from '../../routine-maintanances/dto/routine-maintanances-create.input';
import { routine_maintanancesUpdateInput } from '../../routine-maintanances/dto/routine-maintanances-update.input';

@ArgsType()
export class UpsertOneroutineMaintanancesArgs {
  @Field(() => routine_maintanancesWhereUniqueInput, { nullable: false })
  @Type(() => routine_maintanancesWhereUniqueInput)
  where!: routine_maintanancesWhereUniqueInput;

  @Field(() => routine_maintanancesCreateInput, { nullable: false })
  @Type(() => routine_maintanancesCreateInput)
  create!: routine_maintanancesCreateInput;

  @Field(() => routine_maintanancesUpdateInput, { nullable: false })
  @Type(() => routine_maintanancesUpdateInput)
  update!: routine_maintanancesUpdateInput;
}
