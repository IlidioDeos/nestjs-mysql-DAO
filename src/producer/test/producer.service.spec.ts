import { Test, TestingModule } from '@nestjs/testing';
import { ProducerService } from '../producer.service';

describe('ProducerService', () => {
  let service: ProducerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProducerService],
    }).compile();

    service = module.get<ProducerService>(ProducerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return "This is the producer service"', () => {
    expect(service.findAll()).toBe('This is the producer service');
  });
});
