// classes
class Invoice {
    client: string;             // default = public
    private details: string;
    readonly amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

// shorthand definition
class InvoiceShort {
    constructor(
        public client: string,
        private details: string,
        readonly amount: number,
    ){}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

const inv1 = new Invoice('Kunal', 'Work on new website', 100);
const inv2 = new Invoice('Vidip', 'Gaming', 75);

let invoices: Invoice[] = [];
invoices.push(inv1);
invoices.push(inv2);

console.log(inv1.amount, inv1.client, inv1.format());

// ERROR
inv1.amount = 250;