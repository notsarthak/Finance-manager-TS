import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

//list template instance
const unorderedList: ListTemplate = new ListTemplate(document.querySelector('.item-list') as HTMLUListElement);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event): void => {
    e.preventDefault();
    let doc: HasFormatter;
    if (type.value === 'invoice')
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    else
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);

    unorderedList.render(doc, type.value.toUpperCase(), "end");
});