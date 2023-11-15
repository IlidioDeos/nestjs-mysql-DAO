import { Injectable } from '@nestjs/common';

@Injectable()
export class ProducerService {
  findAll(): string {
    return 'This is the producer service';
  }
}
