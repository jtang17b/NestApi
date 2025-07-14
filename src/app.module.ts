// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

// The @Module() decorator provides metadata that Nest makes use of to organize the application structure.
@Module({
  // `imports` is a list of modules that this module depends on.
  // We import `UserModule` here to make its exported providers available to this module.
  imports: [UserModule],

  // `controllers` are responsible for handling incoming requests and returning responses.
  controllers: [AppController],

  // `providers` are services, repositories, factories, etc. that can be injected into other components.
  // They handle the business logic.
  providers: [AppService],
})
export class AppModule {}