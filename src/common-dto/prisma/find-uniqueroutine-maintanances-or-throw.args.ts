import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { routine_maintanancesWhereUniqueInput } from '../../routine-maintanances/dto/routine-maintanances-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueroutineMaintanancesOrThrowArgs {
  @Field(() => routine_maintanancesWhereUniqueInput, { nullable: false })
  @Type(() => routine_maintanancesWhereUniqueInput)
  where!: routine_maintanancesWhereUniqueInput;
}
