import { Controller, Get } from '@nestjs/common';

@Controller('author')
export class AuthorController {
  @Get()
  findAll(): string {
    return 'This is the author controller';
  }
}
