import { MySqlConnection } from '../database/mysql-connection';
import { MusicAuthor } from '../models/music_author.class';

export class MusicAuthorDao {
  private db: MySqlConnection;

  constructor() {
    this.db = new MySqlConnection();
  }

  async createMusicAuthor(musicAuthor: MusicAuthor): Promise<MusicAuthor | null> {
    try {
      const query = 'INSERT INTO music_authors (music_id, author_id) VALUES (?, ?)';
      const result = await this.db.query(query, [musicAuthor.music_id, musicAuthor.author_id]);

      if (result && result.insertId) {
        musicAuthor.music_id = result.insertId;
        return musicAuthor;
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
  }

  async getMusicAuthorById(music_id: number): Promise<MusicAuthor | null> {
    try {
      const query = 'SELECT * FROM music_authors WHERE music_id = ?';
      const results = await this.db.query(query, [music_id]);

      if (results && results.length > 0) {
        const musicAuthorData = results[0];
        return new MusicAuthor(musicAuthorData.music_id, musicAuthorData.author_id);
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por ID: ${error.message}`);
    }
  }

  async deleteMusicAuthor(music_id: number): Promise<MusicAuthor | null> {
    try {
      const query = 'DELETE FROM music_authors WHERE music_id = ?';
      const result = await this.db.query(query, [music_id]);

      if (result && result.affectedRows > 0) {
        return null;
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao deletar usuário: ${error.message}`);
    }
  }

  async getAllMusicAuthors(): Promise<MusicAuthor[]> {
    try {
      const query = 'SELECT * FROM music_authors';
      const results = await this.db.query(query);

      return results.map((musicAuthorData: any) => new MusicAuthor(musicAuthorData.music_id, musicAuthorData.author_id));
    } catch (error) {
      throw new Error(`Erro ao buscar todos os usuários: ${error.message}`);
    }
  }

  //Update musicAuthor
  async updateMusicAuthor(musicAuthor: MusicAuthor): Promise<MusicAuthor | null> {
    try {
      const query = 'UPDATE music_authors SET music_id = ?, author_id = ?';
      const result = await this.db.query(query, [musicAuthor.music_id, musicAuthor.author_id]);

      if (result && result.affectedRows > 0) {
        return musicAuthor;
      }

      return null;
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
  }

}
