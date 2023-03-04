import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { routine_maintanancesCreateInput } from '../routine-maintanances/routine-maintanances-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneroutineMaintanancesArgs {

    @Field(() => routine_maintanancesCreateInput, {nullable:false})
    @Type(() => routine_maintanancesCreateInput)
    data!: routine_maintanancesCreateInput;
}
