import { Test, TestingModule } from '@nestjs/testing';
import { MaintananceResolver } from './maintanance.resolver';
import { MaintananceService } from './maintanance.service';

describe('MaintananceResolver', () => {
  let resolver: MaintananceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintananceResolver, MaintananceService],
    }).compile();

    resolver = module.get<MaintananceResolver>(MaintananceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
