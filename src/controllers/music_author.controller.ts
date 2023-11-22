import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { MusicAuthorService } from '../services/music_author.service';
import { MusicAuthor } from '../models/music_author.class';

@Controller('musicAuthors')
export class MusicAuthorController {
  constructor(private readonly musicAuthorService: MusicAuthorService) { }


  @Get()
  async getAllMusicAuthors(): Promise<MusicAuthor[] | null> {
    return this.musicAuthorService.getAllMusicAuthors();
  }

  @Get(':author_id')
  async getMusicAuthorByAuthorId(@Param('author_id') author_id: number): Promise<MusicAuthor | null> {
    return this.musicAuthorService.getMusicAuthorById(author_id);
  }

  @Get(':music_id')
  async getMusicAuthorByMusicId(@Param('music_id') music_id: number): Promise<MusicAuthor | null> {
    return this.musicAuthorService.getMusicAuthorById(music_id);
  }

  @Post()
  async createMusicAuthor(@Body() musicAuthorData: { music_id: number, author_id: number }): Promise<MusicAuthor | null> {
    const { music_id, author_id } = musicAuthorData;
    return this.musicAuthorService.createMusicAuthor(music_id, author_id);
  }

  @Delete(':author_id')
  async deleteMusicAuthorByAuthorId(@Param('author_id') author_id: number) {
    return this.musicAuthorService.deleteMusicAuthor(author_id);
  }

  @Delete(':music_id')
  async deleteMusicAuthorByMusicId(@Param('music_id') music_id: number) {
    return this.musicAuthorService.deleteMusicAuthor(music_id);
  }

  @Put('music/:music_id/author/:author_id')
async updateMusicAuthor(
  @Body() musicAuthorData: { music_id: number, author_id: number }
): Promise<MusicAuthor | null> {
  const { music_id: updatedMusicId, author_id: updatedAuthorId } = musicAuthorData;
  return this.musicAuthorService.updateMusicAuthor(updatedMusicId, updatedAuthorId);
}
}
