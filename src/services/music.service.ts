import { MusicDao } from '../daos/music.dao';
import { Music } from '../models/music.class';

export class MusicService {
  private musicDao: MusicDao;

  constructor() {
    this.musicDao = new MusicDao();
  }

  async createMusic(title: string, lyrics: string, release_date: Date, duration: number): Promise<Music | null> {
    try {
      const newMusic = new Music(null, title, lyrics, release_date, duration);
      return await this.musicDao.createMusic(newMusic);
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
  }

  async getMusicById(id: number): Promise<Music | null> {
    try {
      return await this.musicDao.getMusicById(id);
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por ID: ${error.message}`);
    }
  }

  async deleteMusic(id: number): Promise<Music | null> {
    try {
      return await this.musicDao.deleteMusic(id);
    } catch (error) {
      throw new Error(`Erro ao deletar usuário: ${error.message}`);
    }
  }

  async getAllMusics(): Promise<Music[] | null> {
    try {
      return await this.musicDao.getAllMusics();
    } catch (error) {
      throw new Error(`Erro ao buscar todos os usuários: ${error.message}`);
    }
  }

  async updateMusic(id: number, title: string, lyrics: string, release_date: Date, duration: number): Promise<Music | null> {
    try {
      const music = new Music(id, title, lyrics, release_date, duration);
      return await this.musicDao.updateMusic(music);
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
  }


}
