import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from './customers.service';

describe('CustomersService', () => {
  let service: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomersService],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should add customer to list and get all customers', () => {
    expect(service.findAll()).toEqual([]);
    service.create('nancy');
    expect(service.findAll()).toEqual(['nancy']);
  });
});
