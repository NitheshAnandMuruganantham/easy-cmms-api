import { registerEnumType } from '@nestjs/graphql';

export enum ReportScalarFieldEnum {
  id = 'id',
  sign = 'sign',
  tag = 'tag',
  validated = 'validated',
  validated_sign = 'validated_sign',
  maintance_id = 'maintance_id',
  created_at = 'created_at',
  updated_at = 'updated_at',
}

registerEnumType(ReportScalarFieldEnum, {
  name: 'ReportScalarFieldEnum',
  description: undefined,
});
