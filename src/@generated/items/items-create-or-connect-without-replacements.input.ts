import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutReplacementsInput } from './items-create-without-replacements.input';

@InputType()
export class ItemsCreateOrConnectWithoutReplacementsInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: ItemsWhereUniqueInput;

    @Field(() => ItemsCreateWithoutReplacementsInput, {nullable:false})
    @Type(() => ItemsCreateWithoutReplacementsInput)
    create!: ItemsCreateWithoutReplacementsInput;
}
