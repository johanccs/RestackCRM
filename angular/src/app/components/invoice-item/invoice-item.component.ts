import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-invoice-item',
  imports: [ReactiveFormsModule],
  templateUrl: './invoice-item.component.html',
  styleUrl: './invoice-item.component.scss'
})
export class InvoiceItemComponent {
  
  @Input()lineForm!: FormGroup;
  @Output() removeLine = new EventEmitter<void>();
  

  onRemove(){
    this.removeLine.emit();
  }


}
