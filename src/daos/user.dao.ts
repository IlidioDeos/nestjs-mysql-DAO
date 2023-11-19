import { MySqlConnection } from '../database/mysql-connection';
import { User } from '../models/user.class';

export class UserDao {
  private db: MySqlConnection;

  constructor() {
    this.db = new MySqlConnection();
  }

  async createUser(user: User): Promise<User | null> {
    try {
      const query = 'INSERT INTO users (id, cpf, name, email) VALUES (?, ?, ?, ?)';
      const result = await this.db.query(query, [user.id, user.cpf, user.name, user.email]);

      if (result && result.insertId) {
        user.id = result.insertId;
        return user;
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
  }

  async getUserById(id: number): Promise<User | null> {
    try {
      const query = 'SELECT * FROM users WHERE id = ?';
      const results = await this.db.query(query, [id]);

      if (results && results.length > 0) {
        const userData = results[0];
        return new User(userData.id, userData.cpf, userData.name, userData.email);
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por ID: ${error.message}`);
    }
  }

  async updateUser(user: User): Promise<User | null> {
    try {
      const query = 'UPDATE users SET cpf = ?, name = ?, email = ? WHERE id = ?';
      const result = await this.db.query(query, [user.id, user.cpf, user.name, user.email]);

      if (result && result.affectedRows > 0) {
        return user;
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
  }

  async deleteUser(id: number): Promise<User | null> {
    try {
      const query = 'DELETE FROM users WHERE id = ?';
      const result = await this.db.query(query, [id]);

      if (result && result.affectedRows > 0) {
        return null;
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao deletar usuário: ${error.message}`);
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const query = 'SELECT * FROM users';
      const results = await this.db.query(query);

      return results.map((userData: any) => new User(userData.id, userData.cpf, userData.name, userData.email));
    } catch (error) {
      throw new Error(`Erro ao buscar todos os usuários: ${error.message}`);
    }
  }
}
