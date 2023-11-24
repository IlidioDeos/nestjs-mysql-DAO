import { Injectable } from '@nestjs/common';
import { MusicAuthorDao } from '../daos/music_author.dao';

@Injectable()
export class MusicAuthorService {
  constructor(private readonly musicAuthorDao: MusicAuthorDao) {}

  async getAuthorsByMusicId(musicId: number): Promise<any[]> {
    return this.musicAuthorDao.getAuthorsByMusicId(musicId);
  }

  async getMusicByAuthorId(authorId: number): Promise<any[]> {
    return this.musicAuthorDao.getMusicByAuthorId(authorId);
  }

  async getMusicByAuthorName(authorName: string): Promise<any[]> {
    return this.musicAuthorDao.getMusicByAuthorName(authorName);
  }

  async getAuthorsByMusicName(musicName: string): Promise<any[]> {
    return this.musicAuthorDao.getAuthorsByMusicName(musicName);
  }
}
