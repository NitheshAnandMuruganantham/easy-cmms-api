import { Test, TestingModule } from '@nestjs/testing';
import { SectionResolver } from './machine_catagory.resolver';
import { SectionService } from './machine_catagory.service';

describe('SectionResolver', () => {
  let resolver: SectionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SectionResolver, SectionService],
    }).compile();

    resolver = module.get<SectionResolver>(SectionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
