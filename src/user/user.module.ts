// src/user/user.module.ts

import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

// This is a feature module. It encapsulates everything related to the "user" feature.
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}