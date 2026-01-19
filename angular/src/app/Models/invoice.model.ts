import { InvoiceLine } from "./invoice-line.model";

export class Invoice {
    id: number;
    custId: number;
    date: Date;
    status: string;
    invoiceNr: number;
    paymentTerms: string;
    invoiceLines: InvoiceLine[];

    constructor(init?: Partial<Invoice>){
        this.id = init?.id ?? 0;
        this.custId = init?.custId ?? 0 ;
        this.date = init?.date ?? new Date();
        this.status = init?.status ?? 'new';
        this.invoiceNr = init?.invoiceNr ?? 0;
        this.paymentTerms = init?.paymentTerms ?? '';
        this.invoiceLines = init?.invoiceLines;
    }
}