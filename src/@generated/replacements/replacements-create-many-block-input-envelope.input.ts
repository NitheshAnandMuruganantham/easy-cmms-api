import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsCreateManyBlockInput } from './replacements-create-many-block.input';
import { Type } from 'class-transformer';

@InputType()
export class ReplacementsCreateManyBlockInputEnvelope {

    @Field(() => [ReplacementsCreateManyBlockInput], {nullable:false})
    @Type(() => ReplacementsCreateManyBlockInput)
    data!: Array<ReplacementsCreateManyBlockInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
