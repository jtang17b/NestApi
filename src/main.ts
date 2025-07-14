// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // NestFactory.create() creates a Nest application instance.
  // The `AppModule` is the root module of the application, which we'll see next.
  const app = await NestFactory.create(AppModule);

  // The application listens for incoming HTTP requests on port 3000.
  await app.listen(3000);
}
bootstrap();