import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutBlockInput } from './items-update-without-block.input';

@InputType()
export class ItemsUpdateWithWhereUniqueWithoutBlockInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: ItemsWhereUniqueInput;

    @Field(() => ItemsUpdateWithoutBlockInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutBlockInput)
    data!: ItemsUpdateWithoutBlockInput;
}
