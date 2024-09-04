export class Animal {
    constructor(type, legs){
        this.type = type;                   //initailize 
        this.legs = legs;                   //initailize 
    }

    makeNoise(sound = 'Loud Noise'){
        console.log(sound);
    }

    get metaData(){
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }

    static return10(){
        return 10;
    }
}

export class cat extends Animal {
    makeNoise(sound='meow') {
        console.log(sound);
    }
}


// Classes Challenge

// Create a class Player with the following:
// - Add a Name and Country properties
// - Add a function that when it runs should print into the console ("Messi was born in Argentina");
// - Make sure to adapt this function to receive dynamic Names and Clubs.

// Create a Subclass called TennisPlayer that extends from the class Player
// - Add a new property Age.
// - Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
// - Make sure the Name and Age are dynamic.



class Player {
    constructor(name,country){
        this.name = name;            //initialize
        this.country = country;
    }

    introduce(){
        console.log(`${this.name} was born in ${this.country}`);
    }
}

const messi = new Player("Messi", "Argentina");

messi.introduce();  // Messi was born in Argentina


class TennisPlayer extends Player {     //subclasses
    constructor(name, country, age){
        super(name, country);           // super represents => this.name = name;    this.country = country;
        this.age = age;
    }

    playTennis() {
        console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`);
    }
}


const roger = new TennisPlayer( "Roger Federer", "Spain", 38);  

roger.introduce();      // Roger Federer was born in Spain
roger.playTennis();     // Roger Federer is 38 years old and knows how to play Tennis
