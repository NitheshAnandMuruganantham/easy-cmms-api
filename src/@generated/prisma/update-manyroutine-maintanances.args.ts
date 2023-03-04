import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { routine_maintanancesUpdateManyMutationInput } from '../routine-maintanances/routine-maintanances-update-many-mutation.input';
import { Type } from 'class-transformer';
import { routine_maintanancesWhereInput } from '../routine-maintanances/routine-maintanances-where.input';

@ArgsType()
export class UpdateManyroutineMaintanancesArgs {

    @Field(() => routine_maintanancesUpdateManyMutationInput, {nullable:false})
    @Type(() => routine_maintanancesUpdateManyMutationInput)
    data!: routine_maintanancesUpdateManyMutationInput;

    @Field(() => routine_maintanancesWhereInput, {nullable:true})
    @Type(() => routine_maintanancesWhereInput)
    where?: routine_maintanancesWhereInput;
}
