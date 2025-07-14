// src/user/user.controller.ts

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// The controller is prefixed with the 'user' path.
// So, all routes in this controller will start with /user.
@Controller('user')
export class UserController {
  // The UserService is injected, just like in the AppController.
  constructor(private readonly userService: UserService) {}

  // Handles POST /user requests.
  // The @Body() decorator extracts the entire request body from the incoming request.
  // `CreateUserDto` is a Data Transfer Object that defines the expected shape of the body.
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // Handles GET /user requests.
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // Handles GET /user/:id requests (e.g., /user/123).
  // The @Param('id') decorator extracts the `id` parameter from the URL.
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  // Handles PATCH /user/:id requests.
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  // Handles DELETE /user/:id requests.
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}