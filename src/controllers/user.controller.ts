import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.class';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }


  @Get()
  async getAllUsers(): Promise<User[] | null> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User | null> {
    return this.userService.getUserById(id);
  }

  @Post()
  async createUser(@Body() userData: { cpf: number, name: string; email: string }): Promise<User | null> {
    const { cpf, name, email } = userData;
    return this.userService.createUser(name, cpf, email);
  }


  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() userData: Partial<User>) {
    return this.userService.updateUser(id, userData.cpf, userData.name, userData.email);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
