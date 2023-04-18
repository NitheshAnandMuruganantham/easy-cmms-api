import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsCreateWithoutBlockInput } from './sections-create-without-block.input';
import { Type } from 'class-transformer';
import { SectionsCreateOrConnectWithoutBlockInput } from './sections-create-or-connect-without-block.input';
import { SectionsCreateManyBlockInputEnvelope } from './sections-create-many-block-input-envelope.input';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';

@InputType()
export class SectionsCreateNestedManyWithoutBlockInput {

    @Field(() => [SectionsCreateWithoutBlockInput], {nullable:true})
    @Type(() => SectionsCreateWithoutBlockInput)
    create?: Array<SectionsCreateWithoutBlockInput>;

    @Field(() => [SectionsCreateOrConnectWithoutBlockInput], {nullable:true})
    @Type(() => SectionsCreateOrConnectWithoutBlockInput)
    connectOrCreate?: Array<SectionsCreateOrConnectWithoutBlockInput>;

    @Field(() => SectionsCreateManyBlockInputEnvelope, {nullable:true})
    @Type(() => SectionsCreateManyBlockInputEnvelope)
    createMany?: SectionsCreateManyBlockInputEnvelope;

    @Field(() => [SectionsWhereUniqueInput], {nullable:true})
    @Type(() => SectionsWhereUniqueInput)
    connect?: Array<SectionsWhereUniqueInput>;
}
