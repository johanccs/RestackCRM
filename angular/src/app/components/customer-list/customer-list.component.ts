import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Customer } from 'src/app/Models/customer.model';

@Component({
  selector: 'app-customer-list',
  imports: [RouterLink],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {
  
  customers: Customer[] = [];
  
  ngOnInit(): void {
    
    this.customers.push(
      new Customer({id: 1, firstName: 'johan', lastName: 'potgieter', cell: '0768463603', tel: '0000000000', email: 'johan@email.com'}),
      new Customer({id: 2, firstName: 'fred', lastName: 'smith', cell: '0768463603', tel: '0000000000', email: 'fred@email.com'}),
      new Customer({id: 3, firstName: 'allan', lastName: 'black', cell: '0768463603', tel: '0000000000', email: 'allan@email.com'}),
    )

  }

}
