import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsCreateWithoutBlockInput } from './sections-create-without-block.input';
import { Type } from 'class-transformer';
import { SectionsCreateOrConnectWithoutBlockInput } from './sections-create-or-connect-without-block.input';
import { SectionsUpsertWithWhereUniqueWithoutBlockInput } from './sections-upsert-with-where-unique-without-block.input';
import { SectionsCreateManyBlockInputEnvelope } from './sections-create-many-block-input-envelope.input';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';
import { SectionsUpdateWithWhereUniqueWithoutBlockInput } from './sections-update-with-where-unique-without-block.input';
import { SectionsUpdateManyWithWhereWithoutBlockInput } from './sections-update-many-with-where-without-block.input';
import { SectionsScalarWhereInput } from './sections-scalar-where.input';

@InputType()
export class SectionsUncheckedUpdateManyWithoutBlockNestedInput {

    @Field(() => [SectionsCreateWithoutBlockInput], {nullable:true})
    @Type(() => SectionsCreateWithoutBlockInput)
    create?: Array<SectionsCreateWithoutBlockInput>;

    @Field(() => [SectionsCreateOrConnectWithoutBlockInput], {nullable:true})
    @Type(() => SectionsCreateOrConnectWithoutBlockInput)
    connectOrCreate?: Array<SectionsCreateOrConnectWithoutBlockInput>;

    @Field(() => [SectionsUpsertWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => SectionsUpsertWithWhereUniqueWithoutBlockInput)
    upsert?: Array<SectionsUpsertWithWhereUniqueWithoutBlockInput>;

    @Field(() => SectionsCreateManyBlockInputEnvelope, {nullable:true})
    @Type(() => SectionsCreateManyBlockInputEnvelope)
    createMany?: SectionsCreateManyBlockInputEnvelope;

    @Field(() => [SectionsWhereUniqueInput], {nullable:true})
    @Type(() => SectionsWhereUniqueInput)
    set?: Array<SectionsWhereUniqueInput>;

    @Field(() => [SectionsWhereUniqueInput], {nullable:true})
    @Type(() => SectionsWhereUniqueInput)
    disconnect?: Array<SectionsWhereUniqueInput>;

    @Field(() => [SectionsWhereUniqueInput], {nullable:true})
    @Type(() => SectionsWhereUniqueInput)
    delete?: Array<SectionsWhereUniqueInput>;

    @Field(() => [SectionsWhereUniqueInput], {nullable:true})
    @Type(() => SectionsWhereUniqueInput)
    connect?: Array<SectionsWhereUniqueInput>;

    @Field(() => [SectionsUpdateWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => SectionsUpdateWithWhereUniqueWithoutBlockInput)
    update?: Array<SectionsUpdateWithWhereUniqueWithoutBlockInput>;

    @Field(() => [SectionsUpdateManyWithWhereWithoutBlockInput], {nullable:true})
    @Type(() => SectionsUpdateManyWithWhereWithoutBlockInput)
    updateMany?: Array<SectionsUpdateManyWithWhereWithoutBlockInput>;

    @Field(() => [SectionsScalarWhereInput], {nullable:true})
    @Type(() => SectionsScalarWhereInput)
    deleteMany?: Array<SectionsScalarWhereInput>;
}
