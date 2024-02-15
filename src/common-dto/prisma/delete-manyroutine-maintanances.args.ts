import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { routine_maintanancesWhereInput } from '../../routine-maintanances/routine-maintanances/routine-maintanances-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyroutineMaintanancesArgs {
  @Field(() => routine_maintanancesWhereInput, { nullable: true })
  @Type(() => routine_maintanancesWhereInput)
  where?: routine_maintanancesWhereInput;
}
