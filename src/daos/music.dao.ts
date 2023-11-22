import { MySqlConnection } from '../database/mysql-connection';
import { Music } from '../models/music.class';

export class MusicDao {
  private db: MySqlConnection;

  constructor() {
    this.db = new MySqlConnection();
  }

  async createMusic(music: Music): Promise<Music | null> {
    try {
      const query = 'INSERT INTO musics (id, title, lyrics, release_date, duration) VALUES (?, ?, ?, ?, ?)';
      const result = await this.db.query(query, [music.id, music.title, music.lyrics, music.release_date, music.duration]);

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
        return new Music(musicData.id, musicData.title, musicData.lyrics, musicData.release_date, musicData.duration);
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

      return results.map((musicData: any) => new Music(musicData.id, musicData.title, musicData.lyrics, musicData.release_date, musicData.duration));
    } catch (error) {
      throw new Error(`Erro ao buscar todos os usuários: ${error.message}`);
    }
  }

  //Update music
  async updateMusic(music: Music): Promise<Music | null> {
    try {
      const query = 'UPDATE musics SET title = ?, lyrics = ?, release_date = ?, duration = ? WHERE id = ?';
      const result = await this.db.query(query, [music.id, music.title, music.lyrics, music.release_date, music.duration]);

      if (result && result.affectedRows > 0) {
        return music;
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
  }

}
