import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateWithoutMachinesInput } from './section-create-without-machines.input';
import { Type } from 'class-transformer';
import { SectionCreateOrConnectWithoutMachinesInput } from './section-create-or-connect-without-machines.input';
import { SectionUpsertWithoutMachinesInput } from './section-upsert-without-machines.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionUpdateWithoutMachinesInput } from './section-update-without-machines.input';

@InputType()
export class SectionUpdateOneRequiredWithoutMachinesNestedInput {
  @Field(() => SectionCreateWithoutMachinesInput, { nullable: true })
  @Type(() => SectionCreateWithoutMachinesInput)
  create?: SectionCreateWithoutMachinesInput;

  @Field(() => SectionCreateOrConnectWithoutMachinesInput, { nullable: true })
  @Type(() => SectionCreateOrConnectWithoutMachinesInput)
  connectOrCreate?: SectionCreateOrConnectWithoutMachinesInput;

  @Field(() => SectionUpsertWithoutMachinesInput, { nullable: true })
  @Type(() => SectionUpsertWithoutMachinesInput)
  upsert?: SectionUpsertWithoutMachinesInput;

  @Field(() => SectionWhereUniqueInput, { nullable: true })
  @Type(() => SectionWhereUniqueInput)
  connect?: SectionWhereUniqueInput;

  @Field(() => SectionUpdateWithoutMachinesInput, { nullable: true })
  @Type(() => SectionUpdateWithoutMachinesInput)
  update?: SectionUpdateWithoutMachinesInput;
}
