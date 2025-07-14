// src/app.service.ts

import { Injectable } from '@nestjs/common';

// The @Injectable() decorator marks this class as a provider that can be managed by the NestJS IoC container.
@Injectable()
export class AppService {
  // This method contains the actual logic, which in this simple case is just returning a string.
  // In a real-world application, this is where you would fetch data from a database, call other APIs, etc.
  getHello(): string {
    return 'Hello World!';
  }
}