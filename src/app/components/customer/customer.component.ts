import { Component, inject, OnInit } from '@angular/core';
import { CustomersService } from '@services/customer/customers.service';
import { ContainerComponent } from "@shared/container/container.component";
import { ICustomer } from '@interfaces/customer.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-customer',
  imports: [ContainerComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {

  customerService = inject(CustomersService);
  customers = new BehaviorSubject<ICustomer[]>([]);
  headers: string[] = ['id', 'nombre', 'correo', 'tipo de cliente', 'telefono'];
  ngOnInit(): void {
    this.customerService.findAll().subscribe(data => this.customers.next(data));
  }

}
