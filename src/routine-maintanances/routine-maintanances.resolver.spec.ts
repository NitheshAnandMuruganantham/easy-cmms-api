import { Test, TestingModule } from '@nestjs/testing';
import { RoutineMaintanancesResolver } from './routine-maintanances.resolver';
import { RoutineMaintanancesService } from './routine-maintanances.service';

describe('RoutineMaintanancesResolver', () => {
  let resolver: RoutineMaintanancesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoutineMaintanancesResolver, RoutineMaintanancesService],
    }).compile();

    resolver = module.get<RoutineMaintanancesResolver>(
      RoutineMaintanancesResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
