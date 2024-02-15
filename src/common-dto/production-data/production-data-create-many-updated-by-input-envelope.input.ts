import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { production_dataCreateManyUpdatedByInput } from './production-data-create-many-updated-by.input';
import { Type } from 'class-transformer';

@InputType()
export class production_dataCreateManyUpdatedByInputEnvelope {

    @Field(() => [production_dataCreateManyUpdatedByInput], {nullable:false})
    @Type(() => production_dataCreateManyUpdatedByInput)
    data!: Array<production_dataCreateManyUpdatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
