export class InvoiceLine {
    id: number;
    productName: string;
    description: string;
    qty: number;
    price: number;

    constructor(init?: Partial<InvoiceLine>) {
        this.id = init?.id ?? 0;
        this.productName = init?.productName ?? '';
        this.description = init?.description ?? '';
        this.qty = init?.qty ?? 0;
        this.price = init?.price ?? 0;
    }
}