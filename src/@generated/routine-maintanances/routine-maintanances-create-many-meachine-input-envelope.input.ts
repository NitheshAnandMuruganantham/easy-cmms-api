import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesCreateManyMeachineInput } from './routine-maintanances-create-many-meachine.input';
import { Type } from 'class-transformer';

@InputType()
export class routine_maintanancesCreateManyMeachineInputEnvelope {

    @Field(() => [routine_maintanancesCreateManyMeachineInput], {nullable:false})
    @Type(() => routine_maintanancesCreateManyMeachineInput)
    data!: Array<routine_maintanancesCreateManyMeachineInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
