import { Test, TestingModule } from '@nestjs/testing';
import { AuthorService } from '../author.service';

describe('AuthorService', () => {
  let service: AuthorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorService],
    }).compile();

    service = module.get<AuthorService>(AuthorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return "This is the author service"', () => {
    expect(service.findAll()).toBe('This is the author service');
  });
});
