import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutMachinesInput } from './items-create-without-machines.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutMachinesInput } from './items-create-or-connect-without-machines.input';
import { ItemsUpsertWithoutMachinesInput } from './items-upsert-without-machines.input';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateWithoutMachinesInput } from './items-update-without-machines.input';

@InputType()
export class ItemsUpdateOneWithoutMachinesNestedInput {
  @Field(() => ItemsCreateWithoutMachinesInput, { nullable: true })
  @Type(() => ItemsCreateWithoutMachinesInput)
  create?: ItemsCreateWithoutMachinesInput;

  @Field(() => ItemsCreateOrConnectWithoutMachinesInput, { nullable: true })
  @Type(() => ItemsCreateOrConnectWithoutMachinesInput)
  connectOrCreate?: ItemsCreateOrConnectWithoutMachinesInput;

  @Field(() => ItemsUpsertWithoutMachinesInput, { nullable: true })
  @Type(() => ItemsUpsertWithoutMachinesInput)
  upsert?: ItemsUpsertWithoutMachinesInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => ItemsWhereUniqueInput, { nullable: true })
  @Type(() => ItemsWhereUniqueInput)
  connect?: ItemsWhereUniqueInput;

  @Field(() => ItemsUpdateWithoutMachinesInput, { nullable: true })
  @Type(() => ItemsUpdateWithoutMachinesInput)
  update?: ItemsUpdateWithoutMachinesInput;
}
