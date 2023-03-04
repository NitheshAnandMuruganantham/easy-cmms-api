import { Test, TestingModule } from '@nestjs/testing';
import { BlockResolver } from './block.resolver';
import { BlockService } from './block.service';

describe('BlockResolver', () => {
  let resolver: BlockResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlockResolver, BlockService],
    }).compile();

    resolver = module.get<BlockResolver>(BlockResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
