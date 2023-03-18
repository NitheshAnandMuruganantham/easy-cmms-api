import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { production_dataCreateWithoutUpdatedByInput } from './production-data-create-without-updated-by.input';
import { Type } from 'class-transformer';
import { production_dataCreateOrConnectWithoutUpdatedByInput } from './production-data-create-or-connect-without-updated-by.input';
import { production_dataCreateManyUpdatedByInputEnvelope } from './production-data-create-many-updated-by-input-envelope.input';
import { production_dataWhereUniqueInput } from './production-data-where-unique.input';

@InputType()
export class production_dataUncheckedCreateNestedManyWithoutUpdatedByInput {

    @Field(() => [production_dataCreateWithoutUpdatedByInput], {nullable:true})
    @Type(() => production_dataCreateWithoutUpdatedByInput)
    create?: Array<production_dataCreateWithoutUpdatedByInput>;

    @Field(() => [production_dataCreateOrConnectWithoutUpdatedByInput], {nullable:true})
    @Type(() => production_dataCreateOrConnectWithoutUpdatedByInput)
    connectOrCreate?: Array<production_dataCreateOrConnectWithoutUpdatedByInput>;

    @Field(() => production_dataCreateManyUpdatedByInputEnvelope, {nullable:true})
    @Type(() => production_dataCreateManyUpdatedByInputEnvelope)
    createMany?: production_dataCreateManyUpdatedByInputEnvelope;

    @Field(() => [production_dataWhereUniqueInput], {nullable:true})
    @Type(() => production_dataWhereUniqueInput)
    connect?: Array<production_dataWhereUniqueInput>;
}
