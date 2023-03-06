import { MailerModule } from '@nestjs-modules/mailer';
import { Module, NestModule } from '@nestjs/common';
import { createPrismaRedisCache } from 'prisma-redis-middleware';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config/dist';
import { PrismaModule, PrismaService } from 'nestjs-prisma';
import { TwilioModule } from 'nestjs-twilio';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { S3Service } from './s3/s3.service';
import { MailerService } from './mailer/mailer.service';
import { MessengerService } from './messenger/messenger.service';
import { CaslModule } from './casl/casl.module';
import { AppService } from './app.service';
import { BlockModule } from './block/block.module';
import { ItemCatagoryModule } from './item-catagory/item-catagory.module';
import { ItemsModule } from './items/items.module';
import { MachinesModule } from './machines/machines.module';
import { MaintananceModule } from './maintanance/maintanance.module';
import { ReplacementsModule } from './replacements/replacements.module';
import { ReportModule } from './report/report.module';
import { SectionModule } from './section/section.module';
import { UsersModule } from './users/users.module';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { TicketModule } from './ticket/ticket.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { getLogger } from 'log4js';
import { RoutineMaintanancesModule } from './routine-maintanances/routine-maintanances.module';
import { ScheduleModule } from '@nestjs/schedule/dist';
import { authMiddleware } from './middleware/auth';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    RedisModule.forRootAsync({
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return {
          config: {
            url: configService.getOrThrow('REDIS_URL'),
          },
        };
      },
    }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [
          createPrismaRedisCache({
            models: [
              { model: 'Block', cacheTime: 360 },
              { model: 'Sections', cacheTime: 360 },
              { model: 'Machines', cacheTime: 180 },
              { model: 'Machines', cacheTime: 180 },
              { model: 'Maintenance', cacheTime: 30 },
              { model: 'Maintenance', cacheTime: 30 },
              { model: 'Users', cacheTime: 30 },
              { model: 'Users', cacheTime: 30 },
              { model: 'Ticket', cacheTime: 30 },
              { model: 'routine_maintanances', cacheTime: 30 },
            ],
            storage: {
              type: 'memory',
              options: { invalidation: true, log: console },
            },
            onError(key) {
              console.log(key);
            },
            cacheTime: 300,
          }),
        ],
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: configService.get('SMTP_HOST'),
          port: configService.get('SMTP_PORT'),
          secure: true,
          defaults: {
            from: configService.get('SMTP_FROM'),
          },
          auth: {
            user: configService.get('SMTP_USERNAME'),
            pass: configService.get('SMTP_PASSWORD'),
          },
        },
      }),
    }),
    TwilioModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        accountSid: configService.get('TWILIO_ID'),
        authToken: configService.get('TWILIO_SECRET'),
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      introspection: true,
      cache: 'bounded',
      logger: getLogger(),
      cors: {
        origin: process.env.FRONTEND_URL,
        allowedHeaders: [
          'content-type',
          'anti-csrf',
          'rid',
          'fdi-version',
          'authorization',
          'st-auth-mode',
        ],
        methods: ['GET', 'PUT', 'POST', 'DELETE'],
        credentials: true,
      },
      autoSchemaFile: 'schema.gql',

      context: (ctx) => ctx,
    }),
    BlockModule,
    CaslModule,
    ItemCatagoryModule,
    ItemsModule,
    MachinesModule,
    MaintananceModule,
    ReplacementsModule,
    ReportModule,
    SectionModule,
    UsersModule,
    TicketModule,
    AuthModule,
    DashboardModule,
    RoutineMaintanancesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    S3Service,
    MailerService,
    MessengerService,
    PrismaService,
  ],
})
export class AppModule implements NestModule {
  constructor(private readonly config: ConfigService) {}
  configure(consumer) {
    consumer
      .apply(authMiddleware(this.config.getOrThrow('API_KEY')))
      .forRoutes('/graphql');
  }
}
