import { CategoryDao } from '../daos/category.dao';
import { Category } from '../models/category.class';

export class CategoryService {
  private categoryDao: CategoryDao;

  constructor() {
    this.categoryDao = new CategoryDao();
  }

  async createCategory(name: string): Promise<Category | null> {
    try {
      const newCategory = new Category(null, name);
      return await this.categoryDao.createCategory(newCategory);
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
  }

  async getCategoryById(id: number): Promise<Category | null> {
    try {
      return await this.categoryDao.getCategoryById(id);
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por ID: ${error.message}`);
    }
  }

  async deleteCategory(id: number): Promise<Category | null> {
    try {
      return await this.categoryDao.deleteCategory(id);
    } catch (error) {
      throw new Error(`Erro ao deletar usuário: ${error.message}`);
    }
  }

  async getAllCategorys(): Promise<Category[] | null> {
    try {
      return await this.categoryDao.getAllCategorys();
    } catch (error) {
      throw new Error(`Erro ao buscar todos os usuários: ${error.message}`);
    }
  }

  async updateCategory(id: number, name: string): Promise<Category | null> {
    try {
      const category = new Category(id, name);
      return await this.categoryDao.updateCategory(category);
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
  }


}
