let numArray = [1,2,3,4,5];

console.log(numArray.indexOf(0));  // -1    cuz 0 so tae value ma pr loz




// indexOf() returns the position of the first occurrence of a value in a string.

let texts = "Hello world, Welcome to the universe.";
let results = texts.indexOf("Welcome");  // 13
console.log(results);

let text = "Hello world, welcome to the universe.";
let result = text.indexOf("Welcome");  // -1
console.log(result);



// so we use inclues method (true,false)

let num_Array = [1,2,3,4,5];

console.log(num_Array.includes(0));  // false
console.log(num_Array.includes(2));  // true



// Challenge

/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/


const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

if( listIngredients.includes("sugar")) {
    console.log('We are going to make a chocolate cake');
} else {
    console.log('we not');
}



