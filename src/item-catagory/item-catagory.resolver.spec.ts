import { Test, TestingModule } from '@nestjs/testing';
import { ItemCatagoryResolver } from './item-catagory.resolver';
import { ItemCatagoryService } from './item-catagory.service';

describe('ItemCatagoryResolver', () => {
  let resolver: ItemCatagoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemCatagoryResolver, ItemCatagoryService],
    }).compile();

    resolver = module.get<ItemCatagoryResolver>(ItemCatagoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
