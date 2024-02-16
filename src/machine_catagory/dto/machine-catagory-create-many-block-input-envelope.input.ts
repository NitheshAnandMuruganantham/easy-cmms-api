import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machine_catagoryCreateManyBlockInput } from './machine-catagory-create-many-block.input';
import { Type } from 'class-transformer';

@InputType()
export class machine_catagoryCreateManyBlockInputEnvelope {
  @Field(() => [machine_catagoryCreateManyBlockInput], { nullable: false })
  @Type(() => machine_catagoryCreateManyBlockInput)
  data!: Array<machine_catagoryCreateManyBlockInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
