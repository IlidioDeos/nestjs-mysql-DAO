import { Controller, Get } from '@nestjs/common';

@Controller('music')
export class MusicController {
  @Get()
  findAll(): string {
    return 'This is the music controller';
  }
}
