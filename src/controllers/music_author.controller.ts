import { Controller, Get, Param } from '@nestjs/common';
import { MusicAuthorService } from '../services/music_author.service';

@Controller('music_authors')
export class MusicAuthorController {
  constructor(private readonly musicAuthorService: MusicAuthorService) {}

  @Get('authors/:musicId')
  async findAuthorsByMusicId(@Param('musicId') musicId: number) {
    return this.musicAuthorService.getAuthorsByMusicId(musicId);
  }

  @Get('music/:authorId')
  async findMusicByAuthorId(@Param('authorId') authorId: number) {
    return this.musicAuthorService.getMusicByAuthorId(authorId);
  }

  @Get('music-by-author/:authorName')
  async findMusicByAuthorName(@Param('authorName') authorName: string) {
    return this.musicAuthorService.getMusicByAuthorName(authorName);
  }

  @Get('authors-by-music/:musicName')
  async findAuthorsByMusicName(@Param('musicName') musicName: string) {
    return this.musicAuthorService.getAuthorsByMusicName(musicName);
  }
}
