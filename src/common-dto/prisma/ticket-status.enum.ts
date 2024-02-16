import { registerEnumType } from '@nestjs/graphql';

export enum ticket_status {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  PENDING = 'PENDING',
}

registerEnumType(ticket_status, {
  name: 'ticket_status',
  description: undefined,
});
