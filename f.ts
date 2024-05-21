// union type
let myDetail: string | number
myDetail = "Asadullah Shafique"
console.log(myDetail)
myDetail = 48
console.log(myDetail)
// literal type
let currency: "PKR" | "INR" | "USD" | "EUR"
currency = "PKR"
console.log(currency)
currency = "INR"
console.log(currency)
currency = "USD"
console.log(currency)
currency = "EUR"
console.log(currency)
//NULLABLE TYPE
function greetUser(name:string | null){
    if (name === null){
        console.log(`Assalaam O Alikum guest`)
    } else {
        console.log(`Assalaaam O Alikum ${name}.`)
}}
greetUser(null)
greetUser("Khuram")
//intersection type
type fristType = {
    name: string  
    age: number
} 
type secondType= {
    address: any 
    phone: number
}
type combinedType = fristType & secondType
const person = {
    name: "Asadullah Shafique",
    age: 48,
    address: "Northnazimabad",
    phone: 458550
}
