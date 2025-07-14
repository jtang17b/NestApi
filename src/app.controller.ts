// src/app.controller.ts

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// The @Controller() decorator defines a basic controller.
// You can pass a string to it to create a route prefix, e.g., @Controller('app').
@Controller()
export class AppController {
  // This is an example of Dependency Injection.
  // NestJS injects the `AppService` instance into our controller through the constructor.
  // `private readonly` is a TypeScript shorthand to declare and initialize the property in one place.
  constructor(private readonly appService: AppService) {}

  // The @Get() decorator tells Nest to create a handler for a specific endpoint for GET requests.
  // Since no path is specified, it maps to the root of the controller.
  @Get()
  getHello(): string {
    // The controller calls the service to get the data.
    // This keeps the controller lean and focused on handling the request/response cycle.
    return this.appService.getHello();
  }
}