import { MySqlConnection } from '../database/mysql-connection';
import { Music } from '../models/music.class';

export class MusicDao {
  private db: MySqlConnection;

  constructor() {
    this.db = new MySqlConnection();
  }

  async createMusic(music: Music): Promise<Music | null> {
    try {
      const query = 'INSERT INTO musics (title, lyrics, release_date, duration, category_id, author_id) VALUES (?, ?, ?, ?, ?, ?)';
      const result = await this.db.query(query, [music.title, music.lyrics, music.release_date, music.duration, music.category_id, music.author_id]);



      if (result && result.insertId) {
        music.id = result.insertId;
        return music;
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
  }

  async getMusicById(id: number): Promise<Music | null> {
    try {
      const query = 'SELECT * FROM musics WHERE id = ?';
      const results = await this.db.query(query, [id]);

      if (results && results.length > 0) {
        const musicData = results[0];
        return new Music(musicData.id, musicData.title, musicData.lyrics, musicData.release_date, musicData.duration, musicData.category_id, musicData.author_id);
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por ID: ${error.message}`);
    }
  }

  async deleteMusic(id: number): Promise<Music | null> {
    try {
      const query = 'DELETE FROM musics WHERE id = ?';
      const result = await this.db.query(query, [id]);

      if (result && result.affectedRows > 0) {
        return null;
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao deletar usuário: ${error.message}`);
    }
  }

  async getAllMusics(): Promise<Music[]> {
    try {
      const query = 'SELECT * FROM musics';
      const results = await this.db.query(query);

      return results.map((musicData: any) => new Music(musicData.id, musicData.title, musicData.lyrics, musicData.release_date, musicData.duration, musicData.category_id, musicData.author_id));
    } catch (error) {
      throw new Error(`Erro ao buscar todos os usuários: ${error.message}`);
    }
  }

  async updateMusic(music: Music): Promise<Music | null> {
    try {
      let releaseDate = music.release_date;
      if (!(releaseDate instanceof Date) || isNaN(releaseDate.getTime())) {
        releaseDate = new Date(); // Define uma data padrão se a data não for válida
      }
  
      const query = 'UPDATE musics SET title = ?, lyrics = ?, release_date = ?, duration = ?, category_id = ?, author_id = ? WHERE id = ?';
      const result = await this.db.query(query, [music.title, music.lyrics, releaseDate, music.duration, music.category_id, music.author_id, music.id]);
  
      if (result && result.affectedRows > 0) {
        return music;
      }
  
      return null;
    } catch (error) {
      throw new Error(`Erro ao atualizar música: ${error.message}`);
    }
  }

  async getMusicReleaseDateById(id: number): Promise<Date | null> {
    try {
      const query = 'SELECT release_date FROM musics WHERE id = ?';
      const results = await this.db.query(query, [id]);

      if (results && results.length > 0) {
        return results[0].release_date;
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao obter a data de lançamento da música: ${error.message}`);
    }
  }

}
