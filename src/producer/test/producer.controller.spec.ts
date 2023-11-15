import { Test, TestingModule } from '@nestjs/testing';
import { ProducerController } from '../Producer.controller';
import { ProducerService } from '../producer.service';

describe('ProducerController', () => {
  let controller: ProducerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducerController],
      providers: [ProducerService],
    }).compile();

    controller = module.get<ProducerController>(ProducerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "This is the producer controller"', () => {
    expect(controller.findAll()).toBe('This is the producer controller');
  });
});
