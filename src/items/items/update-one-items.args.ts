import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemsUpdateInput } from './items-update.input';
import { Type } from 'class-transformer';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@ArgsType()
export class UpdateOneItemsArgs {

    @Field(() => ItemsUpdateInput, {nullable:false})
    @Type(() => ItemsUpdateInput)
    data!: ItemsUpdateInput;

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: ItemsWhereUniqueInput;
}
