import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { catagoryCreateManyBlockInput } from './catagory-create-many-block.input';
import { Type } from 'class-transformer';

@InputType()
export class catagoryCreateManyBlockInputEnvelope {

    @Field(() => [catagoryCreateManyBlockInput], {nullable:false})
    @Type(() => catagoryCreateManyBlockInput)
    data!: Array<catagoryCreateManyBlockInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
