import { UserDao } from '../daos/user.dao';
import { User } from '../models/user.class';

export class UserService {
  private userDao: UserDao;

  constructor() {
    this.userDao = new UserDao();
  }

  async createUser(name: string, cpf: number, email: string): Promise<User | null> {
    try {
      const newUser = new User(null, cpf, name, email);
      return await this.userDao.createUser(newUser);
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
  }

  async getUserById(id: number): Promise<User | null> {
    try {
      return await this.userDao.getUserById(id);
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por ID: ${error.message}`);
    }
  }

  async updateUser(id: number, cpf: number, name: string, email: string): Promise<User | null> {
    try {
      const updatedUser = new User(id, cpf, name, email);
      return await this.userDao.updateUser(updatedUser);
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
  }

  async deleteUser(id: number): Promise<User | null> {
    try {
      return await this.userDao.deleteUser(id);
    } catch (error) {
      throw new Error(`Erro ao deletar usuário: ${error.message}`);
    }
  }

  async getAllUsers(): Promise<User[] | null> {
    try {
      return await this.userDao.getAllUsers();
    } catch (error) {
      throw new Error(`Erro ao buscar todos os usuários: ${error.message}`);
    }
  }
}
