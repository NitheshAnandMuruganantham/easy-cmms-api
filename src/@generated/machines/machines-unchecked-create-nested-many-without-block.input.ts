import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutBlockInput } from './machines-create-without-block.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutBlockInput } from './machines-create-or-connect-without-block.input';
import { MachinesCreateManyBlockInputEnvelope } from './machines-create-many-block-input-envelope.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';

@InputType()
export class MachinesUncheckedCreateNestedManyWithoutBlockInput {

    @Field(() => [MachinesCreateWithoutBlockInput], {nullable:true})
    @Type(() => MachinesCreateWithoutBlockInput)
    create?: Array<MachinesCreateWithoutBlockInput>;

    @Field(() => [MachinesCreateOrConnectWithoutBlockInput], {nullable:true})
    @Type(() => MachinesCreateOrConnectWithoutBlockInput)
    connectOrCreate?: Array<MachinesCreateOrConnectWithoutBlockInput>;

    @Field(() => MachinesCreateManyBlockInputEnvelope, {nullable:true})
    @Type(() => MachinesCreateManyBlockInputEnvelope)
    createMany?: MachinesCreateManyBlockInputEnvelope;

    @Field(() => [MachinesWhereUniqueInput], {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    connect?: Array<MachinesWhereUniqueInput>;
}
