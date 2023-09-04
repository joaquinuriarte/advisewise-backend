import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //TODO: IMPORTANT: Handle this. Should eliminate it in production
  await app.listen(4000);
}
bootstrap();
