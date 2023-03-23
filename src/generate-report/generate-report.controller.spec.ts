import { Test, TestingModule } from '@nestjs/testing';
import { GenerateReportController } from './generate-report.controller';
import { GenerateReportService } from './generate-report.service';

describe('GenerateReportController', () => {
  let controller: GenerateReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerateReportController],
      providers: [GenerateReportService],
    }).compile();

    controller = module.get<GenerateReportController>(GenerateReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
