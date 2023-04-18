import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutSectionsInput } from './block-create-without-sections.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutSectionsInput } from './block-create-or-connect-without-sections.input';
import { BlockUpsertWithoutSectionsInput } from './block-upsert-without-sections.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { BlockUpdateWithoutSectionsInput } from './block-update-without-sections.input';

@InputType()
export class BlockUpdateOneRequiredWithoutSectionsNestedInput {

    @Field(() => BlockCreateWithoutSectionsInput, {nullable:true})
    @Type(() => BlockCreateWithoutSectionsInput)
    create?: BlockCreateWithoutSectionsInput;

    @Field(() => BlockCreateOrConnectWithoutSectionsInput, {nullable:true})
    @Type(() => BlockCreateOrConnectWithoutSectionsInput)
    connectOrCreate?: BlockCreateOrConnectWithoutSectionsInput;

    @Field(() => BlockUpsertWithoutSectionsInput, {nullable:true})
    @Type(() => BlockUpsertWithoutSectionsInput)
    upsert?: BlockUpsertWithoutSectionsInput;

    @Field(() => BlockWhereUniqueInput, {nullable:true})
    @Type(() => BlockWhereUniqueInput)
    connect?: BlockWhereUniqueInput;

    @Field(() => BlockUpdateWithoutSectionsInput, {nullable:true})
    @Type(() => BlockUpdateWithoutSectionsInput)
    update?: BlockUpdateWithoutSectionsInput;
}
