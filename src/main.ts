require('json-bigint-patch');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';
import { SupertokensExceptionFilter } from './auth/auth.filter';
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
  await app.listen(process.env.PORT || 8000);
}

bootstrap();
