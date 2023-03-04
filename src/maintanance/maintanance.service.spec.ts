import { Test, TestingModule } from '@nestjs/testing';
import { MaintananceService } from './maintanance.service';

describe('MaintananceService', () => {
  let service: MaintananceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintananceService],
    }).compile();

    service = module.get<MaintananceService>(MaintananceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
