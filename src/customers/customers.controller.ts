import { Controller, Get, Param } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}

  @Get()
  getCustomerList() {
    return this.customerService.findAll();
  }

  @Get(':name')
  addCustomer(@Param('name') name) {
    this.customerService.create(name);
    return true;
  }
}
