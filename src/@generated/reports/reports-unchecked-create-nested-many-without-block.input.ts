import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportsCreateWithoutBlockInput } from './reports-create-without-block.input';
import { Type } from 'class-transformer';
import { ReportsCreateOrConnectWithoutBlockInput } from './reports-create-or-connect-without-block.input';
import { ReportsCreateManyBlockInputEnvelope } from './reports-create-many-block-input-envelope.input';
import { ReportsWhereUniqueInput } from './reports-where-unique.input';

@InputType()
export class ReportsUncheckedCreateNestedManyWithoutBlockInput {

    @Field(() => [ReportsCreateWithoutBlockInput], {nullable:true})
    @Type(() => ReportsCreateWithoutBlockInput)
    create?: Array<ReportsCreateWithoutBlockInput>;

    @Field(() => [ReportsCreateOrConnectWithoutBlockInput], {nullable:true})
    @Type(() => ReportsCreateOrConnectWithoutBlockInput)
    connectOrCreate?: Array<ReportsCreateOrConnectWithoutBlockInput>;

    @Field(() => ReportsCreateManyBlockInputEnvelope, {nullable:true})
    @Type(() => ReportsCreateManyBlockInputEnvelope)
    createMany?: ReportsCreateManyBlockInputEnvelope;

    @Field(() => [ReportsWhereUniqueInput], {nullable:true})
    @Type(() => ReportsWhereUniqueInput)
    connect?: Array<ReportsWhereUniqueInput>;
}
