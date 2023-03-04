import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesCreateWithoutMeachineInput } from './routine-maintanances-create-without-meachine.input';
import { Type } from 'class-transformer';
import { routine_maintanancesCreateOrConnectWithoutMeachineInput } from './routine-maintanances-create-or-connect-without-meachine.input';
import { routine_maintanancesUpsertWithWhereUniqueWithoutMeachineInput } from './routine-maintanances-upsert-with-where-unique-without-meachine.input';
import { routine_maintanancesCreateManyMeachineInputEnvelope } from './routine-maintanances-create-many-meachine-input-envelope.input';
import { routine_maintanancesWhereUniqueInput } from './routine-maintanances-where-unique.input';
import { routine_maintanancesUpdateWithWhereUniqueWithoutMeachineInput } from './routine-maintanances-update-with-where-unique-without-meachine.input';
import { routine_maintanancesUpdateManyWithWhereWithoutMeachineInput } from './routine-maintanances-update-many-with-where-without-meachine.input';
import { routine_maintanancesScalarWhereInput } from './routine-maintanances-scalar-where.input';

@InputType()
export class routine_maintanancesUncheckedUpdateManyWithoutMeachineNestedInput {

    @Field(() => [routine_maintanancesCreateWithoutMeachineInput], {nullable:true})
    @Type(() => routine_maintanancesCreateWithoutMeachineInput)
    create?: Array<routine_maintanancesCreateWithoutMeachineInput>;

    @Field(() => [routine_maintanancesCreateOrConnectWithoutMeachineInput], {nullable:true})
    @Type(() => routine_maintanancesCreateOrConnectWithoutMeachineInput)
    connectOrCreate?: Array<routine_maintanancesCreateOrConnectWithoutMeachineInput>;

    @Field(() => [routine_maintanancesUpsertWithWhereUniqueWithoutMeachineInput], {nullable:true})
    @Type(() => routine_maintanancesUpsertWithWhereUniqueWithoutMeachineInput)
    upsert?: Array<routine_maintanancesUpsertWithWhereUniqueWithoutMeachineInput>;

    @Field(() => routine_maintanancesCreateManyMeachineInputEnvelope, {nullable:true})
    @Type(() => routine_maintanancesCreateManyMeachineInputEnvelope)
    createMany?: routine_maintanancesCreateManyMeachineInputEnvelope;

    @Field(() => [routine_maintanancesWhereUniqueInput], {nullable:true})
    @Type(() => routine_maintanancesWhereUniqueInput)
    set?: Array<routine_maintanancesWhereUniqueInput>;

    @Field(() => [routine_maintanancesWhereUniqueInput], {nullable:true})
    @Type(() => routine_maintanancesWhereUniqueInput)
    disconnect?: Array<routine_maintanancesWhereUniqueInput>;

    @Field(() => [routine_maintanancesWhereUniqueInput], {nullable:true})
    @Type(() => routine_maintanancesWhereUniqueInput)
    delete?: Array<routine_maintanancesWhereUniqueInput>;

    @Field(() => [routine_maintanancesWhereUniqueInput], {nullable:true})
    @Type(() => routine_maintanancesWhereUniqueInput)
    connect?: Array<routine_maintanancesWhereUniqueInput>;

    @Field(() => [routine_maintanancesUpdateWithWhereUniqueWithoutMeachineInput], {nullable:true})
    @Type(() => routine_maintanancesUpdateWithWhereUniqueWithoutMeachineInput)
    update?: Array<routine_maintanancesUpdateWithWhereUniqueWithoutMeachineInput>;

    @Field(() => [routine_maintanancesUpdateManyWithWhereWithoutMeachineInput], {nullable:true})
    @Type(() => routine_maintanancesUpdateManyWithWhereWithoutMeachineInput)
    updateMany?: Array<routine_maintanancesUpdateManyWithWhereWithoutMeachineInput>;

    @Field(() => [routine_maintanancesScalarWhereInput], {nullable:true})
    @Type(() => routine_maintanancesScalarWhereInput)
    deleteMany?: Array<routine_maintanancesScalarWhereInput>;
}
