import { MusicDao } from '../daos/music.dao';
import { Music } from '../models/music.class';

export class MusicService {
  private musicDao: MusicDao;

  constructor() {
    this.musicDao = new MusicDao();
  }

  async createMusic(title: string, lyrics: string, release_date: Date, duration: string, category_id: number, author_id: number): Promise<Music | null> {
    try {
      const newMusic = new Music(null, title, lyrics, release_date, duration, category_id, author_id);
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

  async updateMusic(id: number, title: string, lyrics: string, release_date: Date, duration: string, category_id: number, author_id: number): Promise<Music | null> {
    try {
      // Verifica e formata a data se necessário
      const formattedDate = (release_date instanceof Date && !isNaN(release_date.getTime())) ? release_date : new Date();
  
      const music = new Music(id, title, lyrics, formattedDate, duration, category_id, author_id);
      return await this.musicDao.updateMusic(music);
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
  }
  async getMusicReleaseDateById(id: number): Promise<Date | null> {
    try {
      return await this.musicDao.getMusicReleaseDateById(id);
    } catch (error) {
      throw new Error(`Erro ao obter a data de lançamento da música: ${error.message}`);
    }
  }


}
