"use strict";
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
