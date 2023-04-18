import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutSectionsInput } from './block-create-without-sections.input';

@InputType()
export class BlockCreateOrConnectWithoutSectionsInput {

    @Field(() => BlockWhereUniqueInput, {nullable:false})
    @Type(() => BlockWhereUniqueInput)
    where!: BlockWhereUniqueInput;

    @Field(() => BlockCreateWithoutSectionsInput, {nullable:false})
    @Type(() => BlockCreateWithoutSectionsInput)
    create!: BlockCreateWithoutSectionsInput;
}
