import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { InvoiceItemComponent } from "../invoice-item/invoice-item.component";
import { InvoiceDto, InvoiceService } from '@proxy/invoices';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerDto } from '@proxy/customer-dtos';
import { CustomerService } from '@proxy/cstomers';
import { PagedResultDto } from '@abp/ng.core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  imports: [InvoiceItemComponent, ReactiveFormsModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent implements OnInit {

  @ViewChild('confirmmodal') confirmModalElement!: ElementRef<HTMLDialogElement>;

  private invoiceService = inject(InvoiceService);
  private customerService = inject(CustomerService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  invoiceForm: FormGroup;
  customers: CustomerDto[] = [];
  invoices: InvoiceDto[] = [];
  paymentTerms = ['C.O.D', '30 Days', '60 Days'];
  modalText = 'Please add a valid invoice line'

  get invoiceLines(): FormArray {
    return this.invoiceForm?.get('invoiceLines') as FormArray;
  }

  ngOnInit(): void {
    this.buildInvoice();
    this.addLine();
    this.loadCustomers();
    this.getMaxId();
  }

  getMaxId() {
    const input = {
      maxResultCount: 1,
      skipCount: 0,
      sorting: 'id DeSC'
    };

    this.invoiceService.getList(input).subscribe({
      next: (response: PagedResultDto<InvoiceDto>) => {
        if (response.items && response.items.length > 0) {
          const lastId = response.items[0].id;
          const nextId = lastId + 1;

          this.invoiceForm.patchValue({
            invoiceNr: nextId
          });
        } else {
          this.invoiceForm.patchValue({
            invoiceNr: 1
          });
        }
      }
    });
  }

  loadCustomers() {
    const requestInput = {
      filter: '',
      sorting: 'firstName',
      skipCount: 0,
      maxResultCount: 10
    };

    this.customerService.getList(requestInput).subscribe({
      next: (response: PagedResultDto<CustomerDto>) => {
        this.customers = response.items;
      },
      error: (err) => console.error('Failed the customers', err)
    });
  }

  createLineGroup(): FormGroup {
    return this.fb.group({
      productName: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(50)]],
      qty: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(1)]]
    });
  }

  addLine() {

    if (this.invoiceLines) {
      this.invoiceLines.push(this.createLineGroup());
    }
  }

  removeLine(id: number) {
    this.invoiceLines.removeAt(id);
  }

  buildInvoice() {
    this.invoiceForm = this.fb.group({
      invoiceNr: ['', [Validators.required]],
      custId: ['', [Validators.required]],
      status: ['', [Validators.required]],
      date: [new Date().toISOString().substring(0, 10), [Validators.required]],
      paymentTerms: ['', [Validators.required]],
      invoiceLines: this.fb.array([])
    });
  }

  removeEmptyLines() {

    const lines = this.invoiceLines;

    for (let i = lines.length - 1; i >= 0; i--) {
      const line = lines.at(i).value;

      const isEmpty = !line.productName?.trim() &&
        (!line.qty || line.qty == 0) && (!line.price || line.price === 0);

      if (isEmpty) lines.removeAt(i);

    }

  }

  onSave() {

    this.removeEmptyLines();

    if (this.invoiceForm.invalid || this.invoiceLines.length === 0) {
      this.invoiceForm.markAllAsTouched();
    }

    this.invoiceService.create(this.invoiceForm.value).subscribe({
      next: (response) => {
        this.modalText = `Invoice ${response.id} saved`;
        this.invoiceForm.reset();
        this.router.navigate(['/invoices']);
      },
      error: (err) => this.modalText = err
    });
  }
}
