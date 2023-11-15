import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  findAll(): string {
    return 'This is the category service';
  }
}
