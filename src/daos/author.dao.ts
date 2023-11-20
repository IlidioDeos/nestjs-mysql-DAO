import { MySqlConnection } from '../database/mysql-connection';
import { Author } from '../models/author.class';

export class AuthorDao {
  private db: MySqlConnection;

  constructor() {
    this.db = new MySqlConnection();
  }

  async createAuthor(author: Author): Promise<Author | null> {
    try {
      const query = 'INSERT INTO authors (id, cpf, name, stage_name) VALUES (?, ?, ?, ?)';
      const result = await this.db.query(query, [author.id, author.cpf, author.name, author.stage_name]);

      if (result && result.insertId) {
        author.id = result.insertId;
        return author;
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
  }

  async getAuthorById(id: number): Promise<Author | null> {
    try {
      const query = 'SELECT * FROM authors WHERE id = ?';
      const results = await this.db.query(query, [id]);

      if (results && results.length > 0) {
        const authorData = results[0];
        return new Author(authorData.id, authorData.cpf, authorData.name, authorData.stage_name);
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por ID: ${error.message}`);
    }
  }

  async deleteAuthor(id: number): Promise<Author | null> {
    try {
      const query = 'DELETE FROM authors WHERE id = ?';
      const result = await this.db.query(query, [id]);

      if (result && result.affectedRows > 0) {
        return null;
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao deletar usuário: ${error.message}`);
    }
  }

  async getAllAuthors(): Promise<Author[]> {
    try {
      const query = 'SELECT * FROM authors';
      const results = await this.db.query(query);

      return results.map((authorData: any) => new Author(authorData.id, authorData.cpf, authorData.name, authorData.stage_name));
    } catch (error) {
      throw new Error(`Erro ao buscar todos os usuários: ${error.message}`);
    }
  }

  //Update author
  async updateAuthor(author: Author): Promise<Author | null> {
    try {
      const query = 'UPDATE authors SET name = ?, cpf = ?, stage_name = ? WHERE id = ?';
      const result = await this.db.query(query, [author.name, author.cpf, author.stage_name, author.id]);

      if (result && result.affectedRows > 0) {
        return author;
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
  }

}
