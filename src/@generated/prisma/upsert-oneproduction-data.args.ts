import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { production_dataWhereUniqueInput } from '../production-data/production-data-where-unique.input';
import { Type } from 'class-transformer';
import { production_dataCreateInput } from '../production-data/production-data-create.input';
import { production_dataUpdateInput } from '../production-data/production-data-update.input';

@ArgsType()
export class UpsertOneproductionDataArgs {

    @Field(() => production_dataWhereUniqueInput, {nullable:false})
    @Type(() => production_dataWhereUniqueInput)
    where!: production_dataWhereUniqueInput;

    @Field(() => production_dataCreateInput, {nullable:false})
    @Type(() => production_dataCreateInput)
    create!: production_dataCreateInput;

    @Field(() => production_dataUpdateInput, {nullable:false})
    @Type(() => production_dataUpdateInput)
    update!: production_dataUpdateInput;
}
