import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { CaslAbilityFactory } from 'src/casl/casl.ability';

@Module({
  providers: [UsersResolver, UsersService, CaslAbilityFactory],
})
export class UsersModule {}
