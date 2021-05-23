import { Invoice } from "./classes/Invoice.js";

let invOne: Invoice = new Invoice("mario", "working on mario website", 30000);
let invTwo = new Invoice("luigi", "working on luigi website", 40000);

console.log(invOne.format(), invTwo);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invTwo.amount = 50000;

console.log(invoices);

const anchor = document.querySelector('a')!;
console.log(anchor.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event): void => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});