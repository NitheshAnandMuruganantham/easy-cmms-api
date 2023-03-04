import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutReplacements_scheduledInput } from './items-create-without-replacements-scheduled.input';

@InputType()
export class ItemsCreateOrConnectWithoutReplacements_scheduledInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: ItemsWhereUniqueInput;

    @Field(() => ItemsCreateWithoutReplacements_scheduledInput, {nullable:false})
    @Type(() => ItemsCreateWithoutReplacements_scheduledInput)
    create!: ItemsCreateWithoutReplacements_scheduledInput;
}
