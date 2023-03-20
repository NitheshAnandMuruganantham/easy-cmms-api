import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { production_dataCreateManyBlockInput } from './production-data-create-many-block.input';
import { Type } from 'class-transformer';

@InputType()
export class production_dataCreateManyBlockInputEnvelope {

    @Field(() => [production_dataCreateManyBlockInput], {nullable:false})
    @Type(() => production_dataCreateManyBlockInput)
    data!: Array<production_dataCreateManyBlockInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
