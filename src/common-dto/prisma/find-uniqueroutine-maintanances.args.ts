import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { routine_maintanancesWhereUniqueInput } from '../../routine-maintanances/routine-maintanances/routine-maintanances-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueroutineMaintanancesArgs {
  @Field(() => routine_maintanancesWhereUniqueInput, { nullable: false })
  @Type(() => routine_maintanancesWhereUniqueInput)
  where!: routine_maintanancesWhereUniqueInput;
}
