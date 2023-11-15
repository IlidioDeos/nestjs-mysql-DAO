import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../User.controller';
import { UserService } from '../user.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "This is the user controller"', () => {
    expect(controller.findAll()).toBe('This is the user controller');
  });
});
