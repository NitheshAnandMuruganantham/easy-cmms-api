import { ForbiddenError } from '@casl/ability';
import { accessibleBy } from '@casl/prisma';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  MachinesOrderByWithRelationInput,
  MachinesWhereInput,
} from 'src/@generated/machines';

import {
  SectionCreateInput,
  SectionOrderByWithRelationInput,
  SectionUpdateInput,
  SectionWhereInput,
} from 'src/@generated/section';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import { SessionContainer } from 'supertokens-node/recipe/session';

@Injectable()
export class SectionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly caslFactory: CaslAbilityFactory,
  ) {}

  async create(
    session: SessionContainer,
    createSectionInput: SectionCreateInput,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan('create', 'Section');
    return this.prisma.sections.create({ data: createSectionInput });
  }

  async findAll(
    session: SessionContainer,
    where: SectionWhereInput,
    orderBy: SectionOrderByWithRelationInput,
    skip: number,
    take: number,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan('read', 'Section');

    return this.prisma.sections.findMany({
      where,
      orderBy,
      skip,
      take,
    });
  }

  async findOne(session: SessionContainer, id: number) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan('read', 'Section');

    return this.prisma.sections.findUnique({ where: { id } });
  }

  async update(
    session: SessionContainer,
    id: number,
    updateSectionInput: SectionUpdateInput,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan('update', 'Section');

    return this.prisma.sections.update({
      where: { id },
      data: updateSectionInput,
    });
  }

  async remove(session: SessionContainer, id: number) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan('delete', 'Section');
    return this.prisma.sections.delete({ where: { id } });
  }

  async machines(
    session: SessionContainer,
    id: bigint,
    where: MachinesWhereInput,
    orderBy: MachinesOrderByWithRelationInput,
    skip: number,
    take: number,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan('read', 'Section');

    return this.prisma.sections.findUnique({ where: { id } }).machines({
      where: {
        AND: [accessibleBy(ability, 'read').Sections, where],
      },
      orderBy,
      skip,
      take,
    });
  }
}
