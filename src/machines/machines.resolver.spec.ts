import { Test, TestingModule } from '@nestjs/testing';
import { MachinesResolver } from './machines.resolver';
import { MachinesService } from './machines.service';

describe('MachinesResolver', () => {
  let resolver: MachinesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MachinesResolver, MachinesService],
    }).compile();

    resolver = module.get<MachinesResolver>(MachinesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
