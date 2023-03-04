import { Test, TestingModule } from '@nestjs/testing';
import { ReplacementsResolver } from './replacements.resolver';
import { ReplacementsService } from './replacements.service';

describe('ReplacementsResolver', () => {
  let resolver: ReplacementsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReplacementsResolver, ReplacementsService],
    }).compile();

    resolver = module.get<ReplacementsResolver>(ReplacementsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
