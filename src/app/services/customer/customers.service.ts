import { inject, Injectable } from '@angular/core';
import { FindAllCustomersService } from './find-all-customers.service';
import { ICustomer } from '@interfaces/customer.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  findAllCustomerService = inject(FindAllCustomersService);

  constructor() { }

  findAll(): Observable<ICustomer[]> {
    return this.findAllCustomerService.execute();
  }

}
