import { Test, TestingModule } from '@nestjs/testing';
import { ItemCatagoryService } from './item-catagory.service';

describe('ItemCatagoryService', () => {
  let service: ItemCatagoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemCatagoryService],
    }).compile();

    service = module.get<ItemCatagoryService>(ItemCatagoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
