import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configura o middleware para servir arquivos estáticos
  app.useStaticAssets(join(__dirname, '..', './src/views/user/')); // Substitua 'views' pelo seu diretório de arquivos estáticos

  await app.listen(3000);
}
bootstrap();

