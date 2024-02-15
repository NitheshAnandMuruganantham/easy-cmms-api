import { registerEnumType } from '@nestjs/graphql';

export enum ReportsOrderByRelevanceFieldEnum {
    report = "report",
    sign = "sign"
}


registerEnumType(ReportsOrderByRelevanceFieldEnum, { name: 'ReportsOrderByRelevanceFieldEnum', description: undefined })
