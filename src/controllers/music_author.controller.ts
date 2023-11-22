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

  @Get(':id')
  async getMusicAuthorById(@Param('id') id: number): Promise<MusicAuthor | null> {
    return this.musicAuthorService.getMusicAuthorById(id);
  }

  @Post()
  async createMusicAuthor(@Body() musicAuthorData: { music_id: number, author_id: number }): Promise<MusicAuthor | null> {
    const { music_id, author_id } = musicAuthorData;
    return this.musicAuthorService.createMusicAuthor(music_id, author_id);
  }

  @Delete(':id')
  async deleteMusicAuthor(@Param('id') id: number) {
    return this.musicAuthorService.deleteMusicAuthor(id);
  }

  @Put(':id')
  async updateMusicAuthor(@Param('id') id: number, @Body() musicAuthorData: { music_id: number, author_id: number }): Promise<MusicAuthor | null> {
    const { music_id, author_id } = musicAuthorData;
    return this.musicAuthorService.updateMusicAuthor(music_id, author_id);
  }

}
