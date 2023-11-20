import { AuthorDao } from '../daos/author.dao';
import { Author } from '../models/author.class';

export class AuthorService {
  private authorDao: AuthorDao;

  constructor() {
    this.authorDao = new AuthorDao();
  }

  async createAuthor(name: string, cpf: number, stage_name: string): Promise<Author | null> {
    try {
      const newAuthor = new Author(null, cpf, name, stage_name);
      return await this.authorDao.createAuthor(newAuthor);
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
  }

  async getAuthorById(id: number): Promise<Author | null> {
    try {
      return await this.authorDao.getAuthorById(id);
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por ID: ${error.message}`);
    }
  }

  async deleteAuthor(id: number): Promise<Author | null> {
    try {
      return await this.authorDao.deleteAuthor(id);
    } catch (error) {
      throw new Error(`Erro ao deletar usuário: ${error.message}`);
    }
  }

  async getAllAuthors(): Promise<Author[] | null> {
    try {
      return await this.authorDao.getAllAuthors();
    } catch (error) {
      throw new Error(`Erro ao buscar todos os usuários: ${error.message}`);
    }
  }

  async updateAuthor(id: number, name: string, cpf: number, stage_name: string): Promise<Author | null> {
    try {
      const author = new Author(id, cpf, name, stage_name);
      return await this.authorDao.updateAuthor(author);
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
  }


}
