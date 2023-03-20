import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { production_dataScalarWhereInput } from './production-data-scalar-where.input';
import { Type } from 'class-transformer';
import { production_dataUpdateManyMutationInput } from './production-data-update-many-mutation.input';

@InputType()
export class production_dataUpdateManyWithWhereWithoutBlockInput {

    @Field(() => production_dataScalarWhereInput, {nullable:false})
    @Type(() => production_dataScalarWhereInput)
    where!: production_dataScalarWhereInput;

    @Field(() => production_dataUpdateManyMutationInput, {nullable:false})
    @Type(() => production_dataUpdateManyMutationInput)
    data!: production_dataUpdateManyMutationInput;
}
