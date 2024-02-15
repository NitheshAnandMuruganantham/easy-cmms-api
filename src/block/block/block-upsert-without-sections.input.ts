import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockUpdateWithoutSectionsInput } from './block-update-without-sections.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutSectionsInput } from './block-create-without-sections.input';

@InputType()
export class BlockUpsertWithoutSectionsInput {
  @Field(() => BlockUpdateWithoutSectionsInput, { nullable: false })
  @Type(() => BlockUpdateWithoutSectionsInput)
  update!: BlockUpdateWithoutSectionsInput;

  @Field(() => BlockCreateWithoutSectionsInput, { nullable: false })
  @Type(() => BlockCreateWithoutSectionsInput)
  create!: BlockCreateWithoutSectionsInput;
}
