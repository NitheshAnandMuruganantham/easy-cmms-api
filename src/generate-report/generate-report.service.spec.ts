import { Test, TestingModule } from '@nestjs/testing';
import { GenerateReportService } from './generate-report.service';

describe('GenerateReportService', () => {
  let service: GenerateReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateReportService],
    }).compile();

    service = module.get<GenerateReportService>(GenerateReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
