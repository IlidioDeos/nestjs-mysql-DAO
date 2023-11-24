import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { AuthorService } from '../services/author.service';
import { Author } from '../models/author.class';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  async getAllAuthors(): Promise<Author[] | null> {
    return this.authorService.getAllAuthors();
  }

  @Get(':id')
  async getAuthorById(@Param('id') id: number): Promise<Author | null> {
    return this.authorService.getAuthorById(id);
  }

  @Post()
  async createAuthor(@Body() authorData: { cpf: number, name: string; stage_name: string }): Promise<Author | null> {
    const { cpf, name, stage_name } = authorData;
    return this.authorService.createAuthor(name, cpf, stage_name);
  }

  @Delete(':id')
  async deleteAuthor(@Param('id') id: number) {
    return this.authorService.deleteAuthor(id);
  }

  @Put(':id')
  async updateAuthor(@Param('id') id: number, @Body() authorData: { cpf: number, name: string; stage_name: string }): Promise<Author | null> {
    const { cpf, name, stage_name } = authorData;
    return this.authorService.updateAuthor(id, name, cpf, stage_name);
  }
}
