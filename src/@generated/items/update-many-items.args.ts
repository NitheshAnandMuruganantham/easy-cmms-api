import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemsUpdateManyMutationInput } from './items-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ItemsWhereInput } from './items-where.input';

@ArgsType()
export class UpdateManyItemsArgs {

    @Field(() => ItemsUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemsUpdateManyMutationInput)
    data!: ItemsUpdateManyMutationInput;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: ItemsWhereInput;
}
