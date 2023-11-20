import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

   // Configura o middleware para servir arquivos estáticos para a rota '/user'
   app.useStaticAssets(join(__dirname, '..', './src/views/user/'), { prefix: '/user' });

   // Configura o middleware para servir arquivos estáticos para a rota '/author'
   app.useStaticAssets(join(__dirname, '..', './src/views/author/'), { prefix: '/author' });

  await app.listen(3000);
}
bootstrap();

