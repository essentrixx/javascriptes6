// function declaration
function breakfastMenu(){
    return "to eat pan tight";
}

// anonymous function
const lunchMenu = function(){
    return "to eat pan cheek";
}

// arrow function
const dinnerMenu = () => {
    return "to eat pan body";
}

console.log(dinnerMenu());




// const eating = (food) => {
//     return `I'm going to eat ${food} for energy`;
// }

// console.log(eating("chicken")); // I'm going to eat chicken for energy




const eating = food => `I'm going to eat ${food} for energy`;

console.log(eating("chicken"));






