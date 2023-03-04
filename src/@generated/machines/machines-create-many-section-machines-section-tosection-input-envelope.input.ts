import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateManySection_machines_sectionTosectionInput } from './machines-create-many-section-machines-section-tosection.input';
import { Type } from 'class-transformer';

@InputType()
export class MachinesCreateManySection_machines_sectionTosectionInputEnvelope {

    @Field(() => [MachinesCreateManySection_machines_sectionTosectionInput], {nullable:false})
    @Type(() => MachinesCreateManySection_machines_sectionTosectionInput)
    data!: Array<MachinesCreateManySection_machines_sectionTosectionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
