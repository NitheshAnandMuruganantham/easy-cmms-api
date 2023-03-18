import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { production_dataWhereUniqueInput } from './production-data-where-unique.input';
import { Type } from 'class-transformer';
import { production_dataUpdateWithoutUpdatedByInput } from './production-data-update-without-updated-by.input';

@InputType()
export class production_dataUpdateWithWhereUniqueWithoutUpdatedByInput {

    @Field(() => production_dataWhereUniqueInput, {nullable:false})
    @Type(() => production_dataWhereUniqueInput)
    where!: production_dataWhereUniqueInput;

    @Field(() => production_dataUpdateWithoutUpdatedByInput, {nullable:false})
    @Type(() => production_dataUpdateWithoutUpdatedByInput)
    data!: production_dataUpdateWithoutUpdatedByInput;
}
