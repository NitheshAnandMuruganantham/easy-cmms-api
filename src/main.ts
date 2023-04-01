require('json-bigint-patch');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { envAppConfiguration } from './getAzureConfigration';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { urlencoded, json } from 'express';
import { SupertokensExceptionFilter } from './auth/auth.filter';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalFilters(new PrismaClientExceptionFilter());
  app.useGlobalFilters(new SupertokensExceptionFilter());
  app.enableCors({
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
  });
  app.use(json({ limit: '50mb' }));
  await app.listen(8000);
}

if (process.env.CUSTOMCONNSTR_APP_CONFIGURATION_URL) {
  envAppConfiguration({
    appConfigConnectionString: process.env.CUSTOMCONNSTR_APP_CONFIGURATION_URL,
  }).then(() => {
    bootstrap();
  });
} else {
  bootstrap();
}
