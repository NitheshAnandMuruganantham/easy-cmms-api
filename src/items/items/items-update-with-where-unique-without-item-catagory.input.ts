import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutItemCatagoryInput } from './items-update-without-item-catagory.input';

@InputType()
export class ItemsUpdateWithWhereUniqueWithoutItemCatagoryInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: ItemsWhereUniqueInput;

    @Field(() => ItemsUpdateWithoutItemCatagoryInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutItemCatagoryInput)
    data!: ItemsUpdateWithoutItemCatagoryInput;
}
