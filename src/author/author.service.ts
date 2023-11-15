import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  findAll(): string {
    return 'This is the author service';
  }
}
