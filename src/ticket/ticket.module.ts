import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketResolver } from './ticket.resolver';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import { S3Service } from 'src/s3/s3.service';

@Module({
  providers: [TicketResolver, TicketService, CaslAbilityFactory, S3Service],
})
export class TicketModule {}
