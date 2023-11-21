import { MySqlConnection } from '../database/mysql-connection';
import { Category } from '../models/category.class';

export class CategoryDao {
  private db: MySqlConnection;

  constructor() {
    this.db = new MySqlConnection();
  }

  async createCategory(category: Category): Promise<Category | null> {
    try {
      const query = 'INSERT INTO categorys (id, name) VALUES (?, ?)';
      const result = await this.db.query(query, [category.id,  category.name]);

      if (result && result.insertId) {
        category.id = result.insertId;
        return category;
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
  }

  async getCategoryById(id: number): Promise<Category | null> {
    try {
      const query = 'SELECT * FROM categorys WHERE id = ?';
      const results = await this.db.query(query, [id]);

      if (results && results.length > 0) {
        const categoryData = results[0];
        return new Category(categoryData.id,  categoryData.name, );
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por ID: ${error.message}`);
    }
  }

  async deleteCategory(id: number): Promise<Category | null> {
    try {
      const query = 'DELETE FROM categorys WHERE id = ?';
      const result = await this.db.query(query, [id]);

      if (result && result.affectedRows > 0) {
        return null;
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao deletar usuário: ${error.message}`);
    }
  }

  async getAllCategorys(): Promise<Category[]> {
    try {
      const query = 'SELECT * FROM categorys';
      const results = await this.db.query(query);

      return results.map((categoryData: any) => new Category(categoryData.id, categoryData.name));
    } catch (error) {
      throw new Error(`Erro ao buscar todos os usuários: ${error.message}`);
    }
  }

  //Update category
  async updateCategory(category: Category): Promise<Category | null> {
    try {
      const query = 'UPDATE categorys SET name = ? WHERE id = ?';
      const result = await this.db.query(query, [category.name, category.id]);

      if (result && result.affectedRows > 0) {
        return category;
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
  }

}
