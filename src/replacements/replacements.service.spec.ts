import { Test, TestingModule } from '@nestjs/testing';
import { ReplacementsService } from './replacements.service';

describe('ReplacementsService', () => {
  let service: ReplacementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReplacementsService],
    }).compile();

    service = module.get<ReplacementsService>(ReplacementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
