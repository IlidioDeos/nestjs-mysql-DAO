import { MusicAuthorDao } from '../daos/music_author.dao';
import { MusicAuthor } from '../models/music_author.class';

export class MusicAuthorService {
  private musicAuthorDao: MusicAuthorDao;

  constructor() {
    this.musicAuthorDao = new MusicAuthorDao();
  }

  async createMusicAuthor(music_id: number, author_id: number): Promise<MusicAuthor | null> {
    try {
      const newMusicAuthor = new MusicAuthor(music_id, author_id);
      return await this.musicAuthorDao.createMusicAuthor(newMusicAuthor);
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
  }

  async getMusicAuthorById(music_id: number): Promise<MusicAuthor | null> {
    try {
      return await this.musicAuthorDao.getMusicAuthorById(music_id);
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por ID: ${error.message}`);
    }
  }

  async deleteMusicAuthor(music_id: number): Promise<MusicAuthor | null> {
    try {
      return await this.musicAuthorDao.deleteMusicAuthor(music_id);
    } catch (error) {
      throw new Error(`Erro ao deletar usuário: ${error.message}`);
    }
  }

  async getAllMusicAuthors(): Promise<MusicAuthor[] | null> {
    try {
      return await this.musicAuthorDao.getAllMusicAuthors();
    } catch (error) {
      throw new Error(`Erro ao buscar todos os usuários: ${error.message}`);
    }
  }

  async updateMusicAuthor(music_id: number, author_id: number): Promise<MusicAuthor | null> {
    try {
      const musicAuthor = new MusicAuthor(music_id, author_id);
      return await this.musicAuthorDao.updateMusicAuthor(musicAuthor);
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
  }


}
