import { Test, TestingModule } from '@nestjs/testing';
import { ProductionDataResolver } from './production.resolver';
import { ProductionService } from './production.service';

describe('BlockResolver', () => {
  let resolver: ProductionDataResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductionDataResolver, ProductionService],
    }).compile();

    resolver = module.get<ProductionDataResolver>(ProductionDataResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
