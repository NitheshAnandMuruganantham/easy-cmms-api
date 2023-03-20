import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { production_dataWhereUniqueInput } from './production-data-where-unique.input';
import { Type } from 'class-transformer';
import { production_dataCreateWithoutBlockInput } from './production-data-create-without-block.input';

@InputType()
export class production_dataCreateOrConnectWithoutBlockInput {

    @Field(() => production_dataWhereUniqueInput, {nullable:false})
    @Type(() => production_dataWhereUniqueInput)
    where!: production_dataWhereUniqueInput;

    @Field(() => production_dataCreateWithoutBlockInput, {nullable:false})
    @Type(() => production_dataCreateWithoutBlockInput)
    create!: production_dataCreateWithoutBlockInput;
}
