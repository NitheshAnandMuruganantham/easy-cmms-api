require('json-bigint-patch');
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SupertokensExceptionFilter } from './auth/auth.filter';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new PrismaClientExceptionFilter());
  app.useGlobalFilters(new SupertokensExceptionFilter());
  app.enableCors({
    origin: 'http://localhost:5173',
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

  await app.listen(process.env.PORT);
}
bootstrap();
