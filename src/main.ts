require('json-bigint-patch');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    allowedHeaders: '*',
    methods: '*',
    credentials: true,
  });

  app.use(json({ limit: '50mb' }));
  app.enableShutdownHooks();
  await app.listen(process.env.PORT || 8000);
}

bootstrap();
