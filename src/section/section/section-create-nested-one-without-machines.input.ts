import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateWithoutMachinesInput } from './section-create-without-machines.input';
import { Type } from 'class-transformer';
import { SectionCreateOrConnectWithoutMachinesInput } from './section-create-or-connect-without-machines.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';

@InputType()
export class SectionCreateNestedOneWithoutMachinesInput {
  @Field(() => SectionCreateWithoutMachinesInput, { nullable: true })
  @Type(() => SectionCreateWithoutMachinesInput)
  create?: SectionCreateWithoutMachinesInput;

  @Field(() => SectionCreateOrConnectWithoutMachinesInput, { nullable: true })
  @Type(() => SectionCreateOrConnectWithoutMachinesInput)
  connectOrCreate?: SectionCreateOrConnectWithoutMachinesInput;

  @Field(() => SectionWhereUniqueInput, { nullable: true })
  @Type(() => SectionWhereUniqueInput)
  connect?: SectionWhereUniqueInput;
}
