import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CustomerService } from '@proxy/cstomers';
import { CreateUpdateCustomerDto, CustomerDto } from '@proxy/customer-dtos';

@Component({
  selector: 'app-customer-list',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {

  private customerService = inject(CustomerService);
  private fb = inject(FormBuilder);

  @ViewChild('confirmmodal') confirmModalElement!: ElementRef<HTMLDialogElement>;
  @ViewChild('modal') modalElement!: ElementRef<HTMLDialogElement>;

  customerForm: FormGroup;

  customers: CustomerDto[] = [];

  ngOnInit() {

    this.buildForm();
    this.loadCustomers();
  }

  buildForm() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      tel: [''],
      cell: [''],
    });
  }

  onAdd() {
    
    if (this.customerForm.invalid) {
      return;
    }
    
    const input = this.customerForm.value as CreateUpdateCustomerDto;
    
    this.customerService.create(input).subscribe({
      next: () => {
        this.customerForm.reset();
        this.confirmModalElement.nativeElement.showModal();
        this.loadCustomers();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  onClose(){
    this.confirmModalElement.nativeElement.close();
    this.modalElement.nativeElement.close();
  }

  onDelete(id: number){
    this.customerService.delete(id).subscribe({
      next: (result) => {
        this.loadCustomers();
      }
    }); 
  }
  
  loadCustomers() {
    this.customerService.getList({ maxResultCount: 10, skipCount: 0 }).subscribe({
      next: (result) => {
        this.customers = result.items;
      }
    });
  }
}
