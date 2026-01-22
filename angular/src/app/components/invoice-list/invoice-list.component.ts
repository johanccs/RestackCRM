import { DatePipe } from '@angular/common';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InvoiceDto, InvoiceService } from '@proxy/invoices';

@Component({
  selector: 'app-invoice-list',
  imports: [RouterLink, DatePipe],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss'
})
export class InvoiceListComponent implements OnInit {
  
  invoices: InvoiceDto[] = [];
  invoiceService = inject(InvoiceService);
  @ViewChild('confirmmodal') confirmModalElement!: ElementRef<HTMLDialogElement>;

  modalText = 'Invoice Deleted';
  bodyText = '';

  ngOnInit(): void {
    
    this.loadInvoices();
  }

  loadInvoices(){
    const input = {
      maxResultCount: 10,
      skipCount: 0,
      sorting: 'id DeSC'
    };
    this.invoiceService.getList(input).subscribe({
      next: (result) => this.invoices = result.items,
      error: (err) => console.error('Failed to load invoices', err)
    });
  }

  calculateTotal(invoice: InvoiceDto): number {
    return invoice.invoiceLines.reduce((acc, line) => acc + (line.qty * line.price), 0);
  }

  onDelete(id: number){
    this.invoiceService.delete(id).subscribe({
      next: (response) => {
        this.bodyText = `Invoice ${id} deleted successfully. ${response ?? ''}`
        this.loadInvoices();
      },
      error: (err) => {
        this.bodyText = err
      },
      complete: () => this.confirmModalElement.nativeElement.showModal() 
    });
  }

}
