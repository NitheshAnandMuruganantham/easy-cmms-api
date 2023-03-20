import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { production_dataWhereUniqueInput } from './production-data-where-unique.input';
import { Type } from 'class-transformer';
import { production_dataUpdateWithoutBlockInput } from './production-data-update-without-block.input';

@InputType()
export class production_dataUpdateWithWhereUniqueWithoutBlockInput {

    @Field(() => production_dataWhereUniqueInput, {nullable:false})
    @Type(() => production_dataWhereUniqueInput)
    where!: production_dataWhereUniqueInput;

    @Field(() => production_dataUpdateWithoutBlockInput, {nullable:false})
    @Type(() => production_dataUpdateWithoutBlockInput)
    data!: production_dataUpdateWithoutBlockInput;
}
