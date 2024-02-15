import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsCreateWithoutMachinesInput } from './sections-create-without-machines.input';
import { Type } from 'class-transformer';
import { SectionsCreateOrConnectWithoutMachinesInput } from './sections-create-or-connect-without-machines.input';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';

@InputType()
export class SectionsCreateNestedOneWithoutMachinesInput {
  @Field(() => SectionsCreateWithoutMachinesInput, { nullable: true })
  @Type(() => SectionsCreateWithoutMachinesInput)
  create?: SectionsCreateWithoutMachinesInput;

  @Field(() => SectionsCreateOrConnectWithoutMachinesInput, { nullable: true })
  @Type(() => SectionsCreateOrConnectWithoutMachinesInput)
  connectOrCreate?: SectionsCreateOrConnectWithoutMachinesInput;

  @Field(() => SectionsWhereUniqueInput, { nullable: true })
  @Type(() => SectionsWhereUniqueInput)
  connect?: SectionsWhereUniqueInput;
}
