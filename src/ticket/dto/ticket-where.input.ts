import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../common-dto/prisma/big-int-filter.input';
import { StringFilter } from '../../common-dto/prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { BigIntNullableFilter } from '../../common-dto/prisma/big-int-nullable-filter.input';
import { Enumticket_statusFilter } from '../../common-dto/prisma/enumticket-status-filter.input';
import { DateTimeFilter } from '../../common-dto/prisma/date-time-filter.input';
import { UsersRelationFilter } from '../../users/dto/users-relation-filter.input';
import { MaintenanceRelationFilter } from '../../maintanance/dto/maintenance-relation-filter.input';
import { MachinesRelationFilter } from '../../machines/dto/machines/machines-relation-filter.input';
import { BlockRelationFilter } from '../../block/dto/block/block-relation-filter.input';

@InputType()
export class TicketWhereInput {
  @Field(() => [TicketWhereInput], { nullable: true })
  AND?: Array<TicketWhereInput>;

  @Field(() => [TicketWhereInput], { nullable: true })
  OR?: Array<TicketWhereInput>;

  @Field(() => [TicketWhereInput], { nullable: true })
  NOT?: Array<TicketWhereInput>;

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  photos?: StringFilter;

  @HideField()
  user_id?: BigIntFilter;

  @Field(() => BigIntNullableFilter, { nullable: true })
  maintenance_id?: BigIntNullableFilter;

  @Field(() => BigIntFilter, { nullable: true })
  machine_id?: BigIntFilter;

  @Field(() => Enumticket_statusFilter, { nullable: true })
  status?: Enumticket_statusFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @HideField()
  block_id?: BigIntFilter;

  @HideField()
  user?: UsersRelationFilter;

  @Field(() => MaintenanceRelationFilter, { nullable: true })
  maintenance?: MaintenanceRelationFilter;

  @Field(() => MachinesRelationFilter, { nullable: true })
  machines?: MachinesRelationFilter;

  @HideField()
  block?: BlockRelationFilter;
}
