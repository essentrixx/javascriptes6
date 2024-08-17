// Spread Operator     [... name of the array]

let contacts = ["Mary", "Joel", "Danny"];

let personalFriends = contacts;   //reference type

contacts.push("John");

console.log(personalFriends);  // [mary joel danny john]



let contact = ["Mary", "Joel", "Danny"];

let personalFriend = [...contact];   //spread operator    
// contact values tway ko copy pee personalFriend mhar lar saved
// so contact.push ko toe lal nothing happen pl 
// personalFriend.push('John)

contact.push("John");

console.log(personalFriend);  // [mary joel danny]



let contac = ["Mary", "Joel", "Danny"];

let personalFrien = ["David", ...contac, "Lily"];  

contac .push("John");

console.log(personalFrien);  // ['David', 'Mary', 'Joel', 'Danny', 'Lily']



let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person,              // copy all values from person
    salary: 50000,
    position: "Software Developer"
}

console.log(employee);  // {name: 'Adam', age: 25, city: 'Manchester', salary: 50000, position: 'Software Developer'}




// Challenge


/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];
const shoppingBasket = [...shoppingList,"rice","water","icecream"];

console.log(shoppingBasket);  //  ['eggs', 'milk', 'butter', 'rice', 'water', 'icecream'];









