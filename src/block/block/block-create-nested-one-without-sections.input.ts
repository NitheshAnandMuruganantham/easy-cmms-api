import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutSectionsInput } from './block-create-without-sections.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutSectionsInput } from './block-create-or-connect-without-sections.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@InputType()
export class BlockCreateNestedOneWithoutSectionsInput {

    @Field(() => BlockCreateWithoutSectionsInput, {nullable:true})
    @Type(() => BlockCreateWithoutSectionsInput)
    create?: BlockCreateWithoutSectionsInput;

    @Field(() => BlockCreateOrConnectWithoutSectionsInput, {nullable:true})
    @Type(() => BlockCreateOrConnectWithoutSectionsInput)
    connectOrCreate?: BlockCreateOrConnectWithoutSectionsInput;

    @Field(() => BlockWhereUniqueInput, {nullable:true})
    @Type(() => BlockWhereUniqueInput)
    connect?: BlockWhereUniqueInput;
}
