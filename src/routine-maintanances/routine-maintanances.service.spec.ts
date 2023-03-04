import { Test, TestingModule } from '@nestjs/testing';
import { RoutineMaintanancesService } from './routine-maintanances.service';

describe('RoutineMaintanancesService', () => {
  let service: RoutineMaintanancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoutineMaintanancesService],
    }).compile();

    service = module.get<RoutineMaintanancesService>(RoutineMaintanancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
