import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { production_dataWhereUniqueInput } from './production-data-where-unique.input';
import { Type } from 'class-transformer';
import { production_dataCreateWithoutUpdatedByInput } from './production-data-create-without-updated-by.input';

@InputType()
export class production_dataCreateOrConnectWithoutUpdatedByInput {

    @Field(() => production_dataWhereUniqueInput, {nullable:false})
    @Type(() => production_dataWhereUniqueInput)
    where!: production_dataWhereUniqueInput;

    @Field(() => production_dataCreateWithoutUpdatedByInput, {nullable:false})
    @Type(() => production_dataCreateWithoutUpdatedByInput)
    create!: production_dataCreateWithoutUpdatedByInput;
}
