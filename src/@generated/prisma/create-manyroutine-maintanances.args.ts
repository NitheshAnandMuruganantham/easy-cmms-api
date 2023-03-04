import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { routine_maintanancesCreateManyInput } from '../routine-maintanances/routine-maintanances-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyroutineMaintanancesArgs {

    @Field(() => [routine_maintanancesCreateManyInput], {nullable:false})
    @Type(() => routine_maintanancesCreateManyInput)
    data!: Array<routine_maintanancesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
