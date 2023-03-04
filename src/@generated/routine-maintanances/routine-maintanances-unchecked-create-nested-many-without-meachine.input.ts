import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesCreateWithoutMeachineInput } from './routine-maintanances-create-without-meachine.input';
import { Type } from 'class-transformer';
import { routine_maintanancesCreateOrConnectWithoutMeachineInput } from './routine-maintanances-create-or-connect-without-meachine.input';
import { routine_maintanancesCreateManyMeachineInputEnvelope } from './routine-maintanances-create-many-meachine-input-envelope.input';
import { routine_maintanancesWhereUniqueInput } from './routine-maintanances-where-unique.input';

@InputType()
export class routine_maintanancesUncheckedCreateNestedManyWithoutMeachineInput {

    @Field(() => [routine_maintanancesCreateWithoutMeachineInput], {nullable:true})
    @Type(() => routine_maintanancesCreateWithoutMeachineInput)
    create?: Array<routine_maintanancesCreateWithoutMeachineInput>;

    @Field(() => [routine_maintanancesCreateOrConnectWithoutMeachineInput], {nullable:true})
    @Type(() => routine_maintanancesCreateOrConnectWithoutMeachineInput)
    connectOrCreate?: Array<routine_maintanancesCreateOrConnectWithoutMeachineInput>;

    @Field(() => routine_maintanancesCreateManyMeachineInputEnvelope, {nullable:true})
    @Type(() => routine_maintanancesCreateManyMeachineInputEnvelope)
    createMany?: routine_maintanancesCreateManyMeachineInputEnvelope;

    @Field(() => [routine_maintanancesWhereUniqueInput], {nullable:true})
    @Type(() => routine_maintanancesWhereUniqueInput)
    connect?: Array<routine_maintanancesWhereUniqueInput>;
}
