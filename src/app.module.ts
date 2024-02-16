import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config/dist';
import { PrismaModule, PrismaService } from 'nestjs-prisma';
import { TwilioModule } from 'nestjs-twilio';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { S3Service } from './s3/s3.service';
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
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { TicketModule } from './ticket/ticket.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { getLogger } from 'log4js';
import { RoutineMaintanancesModule } from './routine-maintanances/routine-maintanances.module';
import { ScheduleModule } from '@nestjs/schedule/dist';
import { MachineCatagoriesModule } from './machine_catagory/machine_catagory.module';
import { GenerateReportModule } from './generate-report/generate-report.module';
import { CronModule } from './cron/cron.module';
import { join } from 'path';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {},
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        template: {
          dir: join(__dirname, '../templates'),
          adapter: new HandlebarsAdapter(),
        },
        defaults: {
          from: `${configService.get('SMTP_FROM_NAME')} <${configService.get(
            'SMTP_FROM',
          )}>`,
        },
        transport: {
          host: configService.get('SMTP_HOST'),
          port: configService.get('SMTP_PORT'),
          secure: false,
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
      imports: [ConfigModule],
      isGlobal: true,
      useFactory: (configService: ConfigService) => ({
        accountSid: configService.get('TWILIO_ID'),
        authToken: configService.get('TWILIO_SECRET'),
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      introspection: true,
      cache: 'bounded',
      logger: getLogger(),
      sortSchema: true,
      autoSchemaFile: true,
      context: (ctx) => ctx,
    }),
    BlockModule,
    CaslModule,
    ItemCatagoryModule,
    ItemsModule,
    MachinesModule,
    MaintananceModule,
    ReplacementsModule,
    InvoicesModule,
    MachineCatagoriesModule,
    ReportModule,
    SectionModule,
    UsersModule,
    TicketModule,
    AuthModule,
    DashboardModule,
    RoutineMaintanancesModule,
    GenerateReportModule,
    CronModule,
  ],
  controllers: [AppController],
  providers: [AppService, S3Service, PrismaService],
})
export class AppModule {}
