import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { MusicService } from '../services/music.service';
import { Music } from '../models/music.class';

@Controller('musics')
export class MusicController {
  constructor(private readonly musicService: MusicService) { }


  @Get()
  async getAllMusics(): Promise<Music[] | null> {
    return this.musicService.getAllMusics();
  }

  @Get(':id')
  async getMusicById(@Param('id') id: number): Promise<Music | null> {
    return this.musicService.getMusicById(id);
  }

  @Post()
  async createMusic(@Body() musicData: { title: string, lyrics: string, release_date: Date, duration: string, category_id: number, author_id: number }): Promise<Music | null> {
    const { title, lyrics, release_date, duration, category_id, author_id } = musicData;
    return this.musicService.createMusic(title, lyrics, release_date, duration, category_id, author_id);
  }

  @Delete(':id')
  async deleteMusic(@Param('id') id: number) {
    return this.musicService.deleteMusic(id);
  }

  @Put(':id')
  async updateMusic(@Param('id') id: number, @Body() musicData: { title: string, lyrics: string, release_date: Date, duration: string, category_id: number, author_id: number }): Promise<Music | null> {
    const { title, lyrics, release_date, duration, category_id, author_id } = musicData;
    return this.musicService.updateMusic(id, title, lyrics, release_date, duration, category_id, author_id);
  }
}