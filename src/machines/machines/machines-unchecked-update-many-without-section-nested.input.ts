import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutSectionInput } from './machines-create-without-section.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutSectionInput } from './machines-create-or-connect-without-section.input';
import { MachinesUpsertWithWhereUniqueWithoutSectionInput } from './machines-upsert-with-where-unique-without-section.input';
import { MachinesCreateManySectionInputEnvelope } from './machines-create-many-section-input-envelope.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { MachinesUpdateWithWhereUniqueWithoutSectionInput } from './machines-update-with-where-unique-without-section.input';
import { MachinesUpdateManyWithWhereWithoutSectionInput } from './machines-update-many-with-where-without-section.input';
import { MachinesScalarWhereInput } from './machines-scalar-where.input';

@InputType()
export class MachinesUncheckedUpdateManyWithoutSectionNestedInput {

    @Field(() => [MachinesCreateWithoutSectionInput], {nullable:true})
    @Type(() => MachinesCreateWithoutSectionInput)
    create?: Array<MachinesCreateWithoutSectionInput>;

    @Field(() => [MachinesCreateOrConnectWithoutSectionInput], {nullable:true})
    @Type(() => MachinesCreateOrConnectWithoutSectionInput)
    connectOrCreate?: Array<MachinesCreateOrConnectWithoutSectionInput>;

    @Field(() => [MachinesUpsertWithWhereUniqueWithoutSectionInput], {nullable:true})
    @Type(() => MachinesUpsertWithWhereUniqueWithoutSectionInput)
    upsert?: Array<MachinesUpsertWithWhereUniqueWithoutSectionInput>;

    @Field(() => MachinesCreateManySectionInputEnvelope, {nullable:true})
    @Type(() => MachinesCreateManySectionInputEnvelope)
    createMany?: MachinesCreateManySectionInputEnvelope;

    @Field(() => [MachinesWhereUniqueInput], {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    set?: Array<MachinesWhereUniqueInput>;

    @Field(() => [MachinesWhereUniqueInput], {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    disconnect?: Array<MachinesWhereUniqueInput>;

    @Field(() => [MachinesWhereUniqueInput], {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    delete?: Array<MachinesWhereUniqueInput>;

    @Field(() => [MachinesWhereUniqueInput], {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    connect?: Array<MachinesWhereUniqueInput>;

    @Field(() => [MachinesUpdateWithWhereUniqueWithoutSectionInput], {nullable:true})
    @Type(() => MachinesUpdateWithWhereUniqueWithoutSectionInput)
    update?: Array<MachinesUpdateWithWhereUniqueWithoutSectionInput>;

    @Field(() => [MachinesUpdateManyWithWhereWithoutSectionInput], {nullable:true})
    @Type(() => MachinesUpdateManyWithWhereWithoutSectionInput)
    updateMany?: Array<MachinesUpdateManyWithWhereWithoutSectionInput>;

    @Field(() => [MachinesScalarWhereInput], {nullable:true})
    @Type(() => MachinesScalarWhereInput)
    deleteMany?: Array<MachinesScalarWhereInput>;
}
