import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutItemsInput } from './machines-create-without-items.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutItemsInput } from './machines-create-or-connect-without-items.input';
import { MachinesUpsertWithWhereUniqueWithoutItemsInput } from './machines-upsert-with-where-unique-without-items.input';
import { MachinesCreateManyItemsInputEnvelope } from './machines-create-many-items-input-envelope.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { MachinesUpdateWithWhereUniqueWithoutItemsInput } from './machines-update-with-where-unique-without-items.input';
import { MachinesUpdateManyWithWhereWithoutItemsInput } from './machines-update-many-with-where-without-items.input';
import { MachinesScalarWhereInput } from './machines-scalar-where.input';

@InputType()
export class MachinesUpdateManyWithoutItemsNestedInput {

    @Field(() => [MachinesCreateWithoutItemsInput], {nullable:true})
    @Type(() => MachinesCreateWithoutItemsInput)
    create?: Array<MachinesCreateWithoutItemsInput>;

    @Field(() => [MachinesCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => MachinesCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<MachinesCreateOrConnectWithoutItemsInput>;

    @Field(() => [MachinesUpsertWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => MachinesUpsertWithWhereUniqueWithoutItemsInput)
    upsert?: Array<MachinesUpsertWithWhereUniqueWithoutItemsInput>;

    @Field(() => MachinesCreateManyItemsInputEnvelope, {nullable:true})
    @Type(() => MachinesCreateManyItemsInputEnvelope)
    createMany?: MachinesCreateManyItemsInputEnvelope;

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

    @Field(() => [MachinesUpdateWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => MachinesUpdateWithWhereUniqueWithoutItemsInput)
    update?: Array<MachinesUpdateWithWhereUniqueWithoutItemsInput>;

    @Field(() => [MachinesUpdateManyWithWhereWithoutItemsInput], {nullable:true})
    @Type(() => MachinesUpdateManyWithWhereWithoutItemsInput)
    updateMany?: Array<MachinesUpdateManyWithWhereWithoutItemsInput>;

    @Field(() => [MachinesScalarWhereInput], {nullable:true})
    @Type(() => MachinesScalarWhereInput)
    deleteMany?: Array<MachinesScalarWhereInput>;
}
