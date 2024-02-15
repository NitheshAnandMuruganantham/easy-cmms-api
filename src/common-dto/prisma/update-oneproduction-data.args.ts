import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { production_dataUpdateInput } from '../production-data/production-data-update.input';
import { Type } from 'class-transformer';
import { production_dataWhereUniqueInput } from '../production-data/production-data-where-unique.input';

@ArgsType()
export class UpdateOneproductionDataArgs {

    @Field(() => production_dataUpdateInput, {nullable:false})
    @Type(() => production_dataUpdateInput)
    data!: production_dataUpdateInput;

    @Field(() => production_dataWhereUniqueInput, {nullable:false})
    @Type(() => production_dataWhereUniqueInput)
    where!: production_dataWhereUniqueInput;
}
