import { Injectable } from '@nestjs/common';
import {
  ReplacementsCreateInput,
  ReplacementsOrderByWithRelationInput,
  ReplacementsUpdateInput,
  ReplacementsWhereInput,
} from 'src/@generated/replacements';
import { PrismaService } from 'nestjs-prisma';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import { ForbiddenError, subject } from '@casl/ability';
import { accessibleBy } from '@casl/prisma';

@Injectable()
export class ReplacementsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly caslFactory: CaslAbilityFactory,
  ) {}

  async create(
    session: SessionContainer,
    createReplacementInput: ReplacementsCreateInput,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan('create', 'Replacements');
    return this.prisma.replacements.create({ data: createReplacementInput });
  }

  async findAll(
    session: SessionContainer,
    where: ReplacementsWhereInput,
    orderBy: ReplacementsOrderByWithRelationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);

    ForbiddenError.from(ability).throwUnlessCan('read', 'Replacements');
    return this.prisma.replacements.findMany({
      where: {
        AND: [accessibleBy(ability).Replacements, where],
      },
      orderBy,
      take: limit,
      skip: offset,
    });
  }

  async findOne(session: SessionContainer, id: number) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);
    const canGet = await this.prisma.replacements.findUnique({ where: { id } });

    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Replacements', canGet),
    );
    return canGet;
  }

  async update(
    session: SessionContainer,
    id: number,
    updateReplacementInput: ReplacementsUpdateInput,
  ) {
    const canUpdate = await this.prisma.replacements.findUnique({
      where: { id },
    });
    const ability = await this.caslFactory.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'update',
      subject('Replacements', canUpdate),
    );

    return this.prisma.replacements.update({
      where: { id },
      data: updateReplacementInput,
    });
  }

  async remove(session: SessionContainer, id: number) {
    const canRemove = await this.prisma.replacements.findUnique({
      where: { id },
    });
    const ability = await this.caslFactory.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'delete',
      subject('Replacements', canRemove),
    );

    return this.prisma.replacements.delete({ where: { id } });
  }

  async item(session: SessionContainer, id: bigint) {
    const canGet = await this.prisma.items.findUnique({
      where: { id },
    });
    const ability = await this.caslFactory.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Items', canGet),
    );

    return canGet;
  }

  async maintenance(session: SessionContainer, id: bigint) {
    const ability = await this.caslFactory.getCurrentUserAbility(session);
    const toget = await this.prisma.maintenance.findUnique({ where: { id } });
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Maintenance', toget),
    );
    return toget;
  }
}
