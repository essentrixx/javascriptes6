// Destructing

// Destructuring is a powerful feature in JavaScript that simplifies the process of working with objects 
// by allowing you to extract properties directly into variables. It improves code readability,
// reduces repetition, and makes it easier to work with nested structures.

const player = {
    name: "Dean Sam",
    club: "Men of Letters",
    address: {
        city: "Bunker"
    }
};

console.log(player.address.city);    // bunker

const { name, club, address: {city} } = player;         // Destructing.....
// const { name, club, address: { city } } = player; extracts name, club, and city from the player object.
console.log(`${name} lives in ${city}`);


// const {name,club} = player;   // player.name    // player.club     //called Destructiing
// console.log(`${name} plays for ${club}`);




// => Array 

// let names = ['Dean','Sam','Winchester']; 
// let [firstname, middlename, lastname] = ['Dean','Sam','Winchester']; 
// console.log(firstname); // Dean

// lastname = 'Mary';
// console.log(lastname);  // Mary




// => Object Literals

    function addressMaker(city, state) {
        // const newAddress = {newCity: city, newState: state};       //longcode no use

        const newAddress = {city,state};     // less code

        console.log(newAddress);            // { city: 'Dean', state: 'Sam' }
    }

    addressMaker('Dean','Sam');



    function address(city, state) {
        
        const person = {city,state};

        console.log(person);

    }

    address('Mandalay','Taungyi');


// Sets in ES6

const exampleSet = new Set([1,1,1,1,2,2,2,2]);

exampleSet.add(5);
exampleSet.add(5).add(17);

console.log(exampleSet.has(5));

exampleSet.clear();

console.log(exampleSet.size);
