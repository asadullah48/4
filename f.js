"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// union type
let myDetail;
myDetail = "Asadullah Shafique";
console.log(myDetail);
myDetail = 48;
console.log(myDetail);
// literal type
let currency;
currency = "PKR";
console.log(currency);
currency = "INR";
console.log(currency);
currency = "USD";
console.log(currency);
currency = "EUR";
console.log(currency);
//NULLABLE TYPE
function greetUser(name) {
    if (name === null) {
        console.log(`Assalaam O Alikum guest`);
    }
    else {
        console.log(`Assalaaam O Alikum ${name}.`);
    }
}
greetUser(null);
greetUser("Khuram");
const person = {
    name: "Asadullah Shafique",
    age: 48,
    address: "Northnazimabad",
    phone: 458550
};
