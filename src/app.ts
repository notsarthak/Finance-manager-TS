import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let trOne: HasFormatter;
// let trTwo: HasFormatter;

// trOne = new Invoice("yoshi", "mario website work", 50000);
// trTwo = new Payment("ken", "2 dozen bananas", 150);

// console.log(trOne, trTwo);

// let transactions: HasFormatter[] = [];
// transactions.push(trOne);
// transactions.push(trTwo);

// transactions.forEach((tr: HasFormatter) => console.log(tr.format()));

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event): void => {
    e.preventDefault();
    let doc: HasFormatter;
    if(type.value === 'invoice')
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    else
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    console.log(doc);
});