import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { block_settingsCreateManyBlockInput } from './block-settings-create-many-block.input';
import { Type } from 'class-transformer';

@InputType()
export class block_settingsCreateManyBlockInputEnvelope {
  @Field(() => [block_settingsCreateManyBlockInput], { nullable: false })
  @Type(() => block_settingsCreateManyBlockInput)
  data!: Array<block_settingsCreateManyBlockInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
