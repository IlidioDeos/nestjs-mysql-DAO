import { Music } from 'src/models/music.class';
import { Author } from 'src/models/author.class';
import { MySqlConnection } from '../database/mysql-connection';
import { MusicAuthor } from '../models/music_author.class';

export class MusicAuthorDao {
  private db: MySqlConnection;

  constructor() {
    this.db = new MySqlConnection();
  }

  async getAuthorsByMusicId(musicId: number): Promise<any[]> {
    try {
      const query = 'SELECT a.* FROM author a INNER JOIN music_author ma ON a.id = ma.author_id WHERE ma.music_id = ?';
      const result = await this.db.query(query, [musicId]);

      return result[0];
    } catch (error) {
      throw new Error(`Erro ao buscar autores por ID da música: ${error.message}`);
    }
  }

  async getMusicByAuthorId(authorId: number): Promise<any[]> {
    try {
      const query = 'SELECT m.* FROM music m INNER JOIN music_author ma ON m.id = ma.music_id WHERE ma.author_id = ?';
      const result = await this.db.query(query, [authorId]);

      return result[0];
    } catch (error) {
      throw new Error(`Erro ao buscar músicas por ID do autor: ${error.message}`);
    }
  }

  async getMusicByAuthorName(authorName: string): Promise<any[]> {
    try {
      const query = `
        SELECT m.* 
        FROM music m 
        INNER JOIN music_author ma ON m.id = ma.music_id 
        INNER JOIN author a ON a.id = ma.author_id 
        WHERE a.name = ?
      `;
      const result = await this.db.query(query, [authorName]);

      return result[0]; // Retorna a lista de músicas do autor pelo nome do autor
    } catch (error) {
      throw new Error(`Erro ao buscar músicas pelo nome do autor: ${error.message}`);
    }
  }

  async getAuthorsByMusicName(musicName: string): Promise<any[]> {
    try {
      const query = `
        SELECT a.* 
        FROM author a 
        INNER JOIN music_author ma ON a.id = ma.author_id 
        INNER JOIN music m ON m.id = ma.music_id 
        WHERE m.title = ?
      `;
      const result = await this.db.query(query, [musicName]);

      return result[0]; // Retorna a lista de autores pela música pelo nome da música
    } catch (error) {
      throw new Error(`Erro ao buscar autores pelo nome da música: ${error.message}`);
    }
  }
}