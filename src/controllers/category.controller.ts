import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.class';

@Controller('categorys')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }


  @Get()
  async getAllCategorys(): Promise<Category[] | null> {
    return this.categoryService.getAllCategorys();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: number): Promise<Category | null> {
    return this.categoryService.getCategoryById(id);
  }

  @Post()
  async createCategory(@Body() categoryData: { name: string }): Promise<Category | null> {
    const { name } = categoryData;
    return this.categoryService.createCategory(name);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: number) {
    return this.categoryService.deleteCategory(id);
  }

  @Put(':id')
  async updateCategory(@Param('id') id: number, @Body() categoryData: { name: string }): Promise<Category | null> {
    const { name } = categoryData;
    return this.categoryService.updateCategory(id, name);
  }

}
