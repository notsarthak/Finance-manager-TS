"use strict";
//3
// let character = "mario";
// let age = 10;
// let isblackBelt = false;
// // character = true;
// character = "luigi";
// // age = "twenty"
// age = 20;
// // isblackBelt = "yes";
// isblackBelt = true;
// const circumference = (diameter: number) => diameter * Math.PI;
// // console.log(circumference("hello"));
// console.log(circumference(7.5));
//4
//ARRAYS
// let names = ["luigi", "mario", "ken"];
// // names.push(2);
// // names[0] = 3
// // names = ""
// names.push("powerup");
// names[1] = "ryu";
// // names = [1,2,3,4];
// let numbers = [1,2,3];
// // numbers.push("ryu");
// // numbers[1] = "ken";
// numbers.push(4);
// numbers[2] = 5
// let mixed = ["ken", 1, "luigi", 2, 3, "jung-li"];
// mixed.push("ken");
// mixed[0] = 0;
// mixed.push(5);
//Objects
// let ninja = {
//     name: "Yoshi",
//     belt: "Black",
//     age: 30
// };
// // ninja.age = "30";
// ninja.age = 30;
// ninja.name = "Ryu";
// // ninja.skills = ["fighting"];
// // ninja = [];
// // ninja = "";
// // ninja = {
// //     name: "Ryu",
// //     belt: "Orange"
// // }
// ninja = {
//     name: "Ryu",
//     belt: "Yellow",
//     age: 25 
// }
// // ninja = {
// //     name: "Ryu",
// //     belt: "Yellow",
// //     age: 25,
// //     skills: ["fighting"]
// // }
//5
// //explicit type defining
// let character:string;
// let age:number;
// let isMale:boolean;
// // character=20;
// character="mario";
// // isMale = 1;
// isMale = true;
// //ARRAY
// let skills:string[];
// // skills = [20,30];
// // skills.push("fighting");
// skills = ["fighting", "running"]
// let friends:string[] = [];
// friends.push("Ken");
// //Union types
// let mixed: (string|number)[] = [];
// mixed.push(2);
// mixed.push('2');
// // mixed.push(true);
// let uid:string|number;
// uid='pf34';
// uid=56
// //OBJECT
// let a:object;
// a = {
//     name:"Yoshi",
//     age: 34,
//     belt: "black"
// };
// a = [];
// // a = ""
// let b: {
//     name: string,
//     age: number,
//     belt: string
// };
// // b = []
// b = {
//     name:"mario",
//     age:23,
//     belt: "orange"
// };
// // b = {
// //     name: "luigi"
// // }
// // b = {
// //     name: "ken",
// //     age: 25,
// //     belt: "yellow",
// //     skills: ["running"]
// // }
// class Ninja {
//     name:string;
//     age:number;
//     belt:string;
//     constructor(name: string, age:number, belt:string) {
//         this.name = name;
//         this.age = age;
//         this.belt = belt;
//     }
// };
// let c:Ninja;
// // c = "hello"
// c = {
//     name:"John",
//     age: 20,
//     belt: "grey"
// }
// c = new Ninja("Joe", 24, "white");
//6
// //datatype any
// let a: any;
// a = 25;
// a = true;
// a = "ken";
// a = { name: "luigi" };
// let b: any[] = [];
// b.push(4);
// b.push("hello");
// b.push(false);
// let c: {
//     name: any,
//     age: any
// };
// c = {
//     name: "yoshi",
//     age: 21
// };
// console.log(c);
// c = {
//     name: 21,
//     age: "mario"
// }
// console.log(c);
//8
var greet;
// greet = "hello";
greet = function () {
    console.log("hello, again");
};
var add = function (a, b, c) {
    console.log(c);
    console.log(a + b);
};
add(5, 10);
add(5, 10, "yolo");
add(5, 10, 4);
var minus = function (a, b) {
    return a + b;
};
var result = minus(20, 7);
var multiply = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(c);
    return a * b;
};
console.log(multiply(5, 5));
console.log(multiply(5, 5, 20));
