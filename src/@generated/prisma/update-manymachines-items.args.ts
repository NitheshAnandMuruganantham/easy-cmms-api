import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machines_itemsUpdateManyMutationInput } from '../machines-items/machines-items-update-many-mutation.input';
import { Type } from 'class-transformer';
import { machines_itemsWhereInput } from '../machines-items/machines-items-where.input';

@ArgsType()
export class UpdateManymachinesItemsArgs {

    @Field(() => machines_itemsUpdateManyMutationInput, {nullable:false})
    @Type(() => machines_itemsUpdateManyMutationInput)
    data!: machines_itemsUpdateManyMutationInput;

    @Field(() => machines_itemsWhereInput, {nullable:true})
    @Type(() => machines_itemsWhereInput)
    where?: machines_itemsWhereInput;
}
