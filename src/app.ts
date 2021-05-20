class Invoice {
    client:string;
    details:string;
    amount:number;

    constructor(c:string, d:string, a:number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    } 

    format():string {
        return `${this.client} owes ₹${this.amount} for ${this.details}`;
    }
};

let invOne:Invoice = new Invoice("mario", "working on mario website", 30000);
let invTwo = new Invoice("luigi", "working on luigi website", 40000);

console.log(invOne, invTwo);

let invoices:Invoice[] = [];
// invoices.push("hello");
invoices.push(invOne);
invoices.push(invTwo);

invOne.client = "Yoshi";
// invTwo.amount = "50000";
invTwo.amount = 50000;
 
console.log(invOne, invTwo);
console.log(invoices);

// let button = document.querySelector("button");
// console.log(button.innerText);

const anchor = document.querySelector('a')!;
console.log(anchor.href);

// const form = document.querySelector('.new-item-form');
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event):void => {
    e.preventDefault();
    // console.log(type.value, toFrom.value, details.value, amount.value);
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});