"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u20B9" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
;
var invOne = new Invoice("mario", "working on mario website", 30000);
var invTwo = new Invoice("luigi", "working on luigi website", 40000);
console.log(invOne, invTwo);
var invoices = [];
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
var anchor = document.querySelector('a');
console.log(anchor.href);
// const form = document.querySelector('.new-item-form');
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(type.value, toFrom.value, details.value, amount.value);
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
