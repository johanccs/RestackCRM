import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/Models/invoice.model';
import { InvoiceItemComponent } from "../invoice-item/invoice-item.component";

@Component({
  selector: 'app-invoice',
  imports: [InvoiceItemComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent implements OnInit {
  
  status = 'New'; 
  paymentterms = '30 days';
  invoice: Invoice;
  
  ngOnInit(): void {

    this.invoice = new Invoice(
      {
        id: 1, 
        custId: 2, 
        date: new Date(), 
        invoiceNr: 1, 
        paymentTerms: '30', 
        status: 'new', 
        invoiceLines: [
          {
            id: 1, productName: 'Keyboard', description: 'Microsoft kb', qty: 1, price: 40
          }
      ]
      }
    );



  }


}
