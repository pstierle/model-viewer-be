import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  //await app.listen(3000, '192.168.178.26');
  await app.listen(3000);
}
bootstrap();
