import { Test, TestingModule } from '@nestjs/testing';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';

describe('CustomersController', () => {
  let controller: CustomersController;
  let service: CustomersService;
  let createSpy: jasmine.Spy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController],
      providers: [CustomersService]
    }).compile();

    controller = module.get<CustomersController>(CustomersController);
    service = module.get<CustomersService>(CustomersService);

    createSpy = spyOn(service, 'create').and.callFake(() => {});
    spyOn(service, 'findAll').and.returnValue([
      'Ed',
      'Nancy',
      'Taylor'
    ]);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get customer list', () => {
    const result = controller.getCustomerList();
    expect(result).toEqual([
      'Ed',
      'Nancy',
      'Taylor'
    ]);
  });

  it('should add user', () => {
    const result = controller.addCustomer('Sarah');
    expect(createSpy).toHaveBeenCalledTimes(1);
    expect(createSpy).toHaveBeenCalledWith('Sarah');
    expect(result).toBeTruthy();
  });
});
