import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Invoice } from 'src/app/Models/invoice.model';

@Component({
  selector: 'app-invoice-list',
  imports: [RouterLink, DatePipe],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss'
})
export class InvoiceListComponent implements OnInit {
  
  invoices: Invoice[] = [];
  
  ngOnInit(): void {
    
  this.invoices.push(
      new Invoice({id: 1, custId: 3, date: new Date(), status: 'new', invoiceNr: 1, paymentTerms: '30'}),
      
    )

  }



}
