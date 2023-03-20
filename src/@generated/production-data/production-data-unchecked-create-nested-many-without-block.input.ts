import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { production_dataCreateWithoutBlockInput } from './production-data-create-without-block.input';
import { Type } from 'class-transformer';
import { production_dataCreateOrConnectWithoutBlockInput } from './production-data-create-or-connect-without-block.input';
import { production_dataCreateManyBlockInputEnvelope } from './production-data-create-many-block-input-envelope.input';
import { production_dataWhereUniqueInput } from './production-data-where-unique.input';

@InputType()
export class production_dataUncheckedCreateNestedManyWithoutBlockInput {

    @Field(() => [production_dataCreateWithoutBlockInput], {nullable:true})
    @Type(() => production_dataCreateWithoutBlockInput)
    create?: Array<production_dataCreateWithoutBlockInput>;

    @Field(() => [production_dataCreateOrConnectWithoutBlockInput], {nullable:true})
    @Type(() => production_dataCreateOrConnectWithoutBlockInput)
    connectOrCreate?: Array<production_dataCreateOrConnectWithoutBlockInput>;

    @Field(() => production_dataCreateManyBlockInputEnvelope, {nullable:true})
    @Type(() => production_dataCreateManyBlockInputEnvelope)
    createMany?: production_dataCreateManyBlockInputEnvelope;

    @Field(() => [production_dataWhereUniqueInput], {nullable:true})
    @Type(() => production_dataWhereUniqueInput)
    connect?: Array<production_dataWhereUniqueInput>;
}
