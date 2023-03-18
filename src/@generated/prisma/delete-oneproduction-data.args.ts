import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { production_dataWhereUniqueInput } from '../production-data/production-data-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneproductionDataArgs {

    @Field(() => production_dataWhereUniqueInput, {nullable:false})
    @Type(() => production_dataWhereUniqueInput)
    where!: production_dataWhereUniqueInput;
}
