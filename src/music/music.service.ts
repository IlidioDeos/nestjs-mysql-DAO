import { Injectable } from '@nestjs/common';

@Injectable()
export class MusicService {
  findAll(): string {
    return 'This is the musica service';
  }
}
