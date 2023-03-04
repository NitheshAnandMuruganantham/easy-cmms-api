import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutReplacementsInput } from './items-create-without-replacements.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutReplacementsInput } from './items-create-or-connect-without-replacements.input';
import { ItemsUpsertWithoutReplacementsInput } from './items-upsert-without-replacements.input';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateWithoutReplacementsInput } from './items-update-without-replacements.input';

@InputType()
export class ItemsUpdateOneRequiredWithoutReplacementsNestedInput {

    @Field(() => ItemsCreateWithoutReplacementsInput, {nullable:true})
    @Type(() => ItemsCreateWithoutReplacementsInput)
    create?: ItemsCreateWithoutReplacementsInput;

    @Field(() => ItemsCreateOrConnectWithoutReplacementsInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutReplacementsInput)
    connectOrCreate?: ItemsCreateOrConnectWithoutReplacementsInput;

    @Field(() => ItemsUpsertWithoutReplacementsInput, {nullable:true})
    @Type(() => ItemsUpsertWithoutReplacementsInput)
    upsert?: ItemsUpsertWithoutReplacementsInput;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: ItemsWhereUniqueInput;

    @Field(() => ItemsUpdateWithoutReplacementsInput, {nullable:true})
    @Type(() => ItemsUpdateWithoutReplacementsInput)
    update?: ItemsUpdateWithoutReplacementsInput;
}
