import { registerEnumType } from '@nestjs/graphql';

export enum InvoicesScalarFieldEnum {
  id = 'id',
  total = 'total',
  invoice_date = 'invoice_date',
  number = 'number',
  block_id = 'block_id',
  created_at = 'created_at',
  updated_at = 'updated_at',
}

registerEnumType(InvoicesScalarFieldEnum, {
  name: 'InvoicesScalarFieldEnum',
  description: undefined,
});
