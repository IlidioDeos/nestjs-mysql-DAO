import { Controller, Get } from '@nestjs/common';

@Controller('producer')
export class ProducerController {
  @Get()
  findAll(): string {
    return 'This is the producer controller';
  }
}
