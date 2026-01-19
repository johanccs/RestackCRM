export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    tel: string;
    cell: string;

    constructor(init?: Partial<Customer>){
        this.id = init?.id ?? 0;
        this.firstName = init?.firstName ?? '';
        this.lastName = init?.lastName ?? '';
        this.email = init?.email ?? '';
        this.tel = init?.tel ?? '';
        this.cell = init?.cell ?? '';
    }
}