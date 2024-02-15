import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesCreateWithoutAssigneeInput } from './routine-maintanances-create-without-assignee.input';
import { Type } from 'class-transformer';
import { routine_maintanancesCreateOrConnectWithoutAssigneeInput } from './routine-maintanances-create-or-connect-without-assignee.input';
import { routine_maintanancesCreateManyAssigneeInputEnvelope } from './routine-maintanances-create-many-assignee-input-envelope.input';
import { routine_maintanancesWhereUniqueInput } from './routine-maintanances-where-unique.input';

@InputType()
export class routine_maintanancesUncheckedCreateNestedManyWithoutAssigneeInput {

    @Field(() => [routine_maintanancesCreateWithoutAssigneeInput], {nullable:true})
    @Type(() => routine_maintanancesCreateWithoutAssigneeInput)
    create?: Array<routine_maintanancesCreateWithoutAssigneeInput>;

    @Field(() => [routine_maintanancesCreateOrConnectWithoutAssigneeInput], {nullable:true})
    @Type(() => routine_maintanancesCreateOrConnectWithoutAssigneeInput)
    connectOrCreate?: Array<routine_maintanancesCreateOrConnectWithoutAssigneeInput>;

    @Field(() => routine_maintanancesCreateManyAssigneeInputEnvelope, {nullable:true})
    @Type(() => routine_maintanancesCreateManyAssigneeInputEnvelope)
    createMany?: routine_maintanancesCreateManyAssigneeInputEnvelope;

    @Field(() => [routine_maintanancesWhereUniqueInput], {nullable:true})
    @Type(() => routine_maintanancesWhereUniqueInput)
    connect?: Array<routine_maintanancesWhereUniqueInput>;
}
