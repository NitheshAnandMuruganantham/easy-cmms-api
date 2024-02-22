import { Test, TestingModule } from '@nestjs/testing';
import { MaintananceController } from './maintanance.controller';

describe('MaintananceController', () => {
  let controller: MaintananceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaintananceController],
    }).compile();

    controller = module.get<MaintananceController>(MaintananceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
