import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsCreateWithoutBlockInput } from './replacements-create-without-block.input';
import { Type } from 'class-transformer';
import { ReplacementsCreateOrConnectWithoutBlockInput } from './replacements-create-or-connect-without-block.input';
import { ReplacementsUpsertWithWhereUniqueWithoutBlockInput } from './replacements-upsert-with-where-unique-without-block.input';
import { ReplacementsCreateManyBlockInputEnvelope } from './replacements-create-many-block-input-envelope.input';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';
import { ReplacementsUpdateWithWhereUniqueWithoutBlockInput } from './replacements-update-with-where-unique-without-block.input';
import { ReplacementsUpdateManyWithWhereWithoutBlockInput } from './replacements-update-many-with-where-without-block.input';
import { ReplacementsScalarWhereInput } from './replacements-scalar-where.input';

@InputType()
export class ReplacementsUncheckedUpdateManyWithoutBlockNestedInput {

    @Field(() => [ReplacementsCreateWithoutBlockInput], {nullable:true})
    @Type(() => ReplacementsCreateWithoutBlockInput)
    create?: Array<ReplacementsCreateWithoutBlockInput>;

    @Field(() => [ReplacementsCreateOrConnectWithoutBlockInput], {nullable:true})
    @Type(() => ReplacementsCreateOrConnectWithoutBlockInput)
    connectOrCreate?: Array<ReplacementsCreateOrConnectWithoutBlockInput>;

    @Field(() => [ReplacementsUpsertWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => ReplacementsUpsertWithWhereUniqueWithoutBlockInput)
    upsert?: Array<ReplacementsUpsertWithWhereUniqueWithoutBlockInput>;

    @Field(() => ReplacementsCreateManyBlockInputEnvelope, {nullable:true})
    @Type(() => ReplacementsCreateManyBlockInputEnvelope)
    createMany?: ReplacementsCreateManyBlockInputEnvelope;

    @Field(() => [ReplacementsWhereUniqueInput], {nullable:true})
    @Type(() => ReplacementsWhereUniqueInput)
    set?: Array<ReplacementsWhereUniqueInput>;

    @Field(() => [ReplacementsWhereUniqueInput], {nullable:true})
    @Type(() => ReplacementsWhereUniqueInput)
    disconnect?: Array<ReplacementsWhereUniqueInput>;

    @Field(() => [ReplacementsWhereUniqueInput], {nullable:true})
    @Type(() => ReplacementsWhereUniqueInput)
    delete?: Array<ReplacementsWhereUniqueInput>;

    @Field(() => [ReplacementsWhereUniqueInput], {nullable:true})
    @Type(() => ReplacementsWhereUniqueInput)
    connect?: Array<ReplacementsWhereUniqueInput>;

    @Field(() => [ReplacementsUpdateWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => ReplacementsUpdateWithWhereUniqueWithoutBlockInput)
    update?: Array<ReplacementsUpdateWithWhereUniqueWithoutBlockInput>;

    @Field(() => [ReplacementsUpdateManyWithWhereWithoutBlockInput], {nullable:true})
    @Type(() => ReplacementsUpdateManyWithWhereWithoutBlockInput)
    updateMany?: Array<ReplacementsUpdateManyWithWhereWithoutBlockInput>;

    @Field(() => [ReplacementsScalarWhereInput], {nullable:true})
    @Type(() => ReplacementsScalarWhereInput)
    deleteMany?: Array<ReplacementsScalarWhereInput>;
}
