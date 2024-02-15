import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionsWhereInput } from './sections-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySectionsArgs {

    @Field(() => SectionsWhereInput, {nullable:true})
    @Type(() => SectionsWhereInput)
    where?: SectionsWhereInput;
}
