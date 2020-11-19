import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private readonly customers: string[] = [];

  create(name: string) {
    this.customers.push(name);
  }

  findAll(): string[] {
    return this.customers;
  }
}
