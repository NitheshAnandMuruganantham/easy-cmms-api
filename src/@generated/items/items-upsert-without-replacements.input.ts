import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsUpdateWithoutReplacementsInput } from './items-update-without-replacements.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutReplacementsInput } from './items-create-without-replacements.input';

@InputType()
export class ItemsUpsertWithoutReplacementsInput {

    @Field(() => ItemsUpdateWithoutReplacementsInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutReplacementsInput)
    update!: ItemsUpdateWithoutReplacementsInput;

    @Field(() => ItemsCreateWithoutReplacementsInput, {nullable:false})
    @Type(() => ItemsCreateWithoutReplacementsInput)
    create!: ItemsCreateWithoutReplacementsInput;
}
