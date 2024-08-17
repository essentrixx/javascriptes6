function addressMaker(address) {

    const {city,state} = address;

    const newAddress = {
        city,
        state,
        country: 'United States'
    };

    console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`); // austin taxas us
    
}

addressMaker({city: 'Austin', state: 'Texas'});




// padStart()    padrdEnd()

let example = 'Dylan Israel';
console.log(example.padStart(10, 'a'));   // Dylan Israel


let examples = 'Dylan';
console.log(examples.padStart(10, 'a'));    // aaaaaDylan


let exampless = 'Dylan';
console.log(exampless.padEnd(10, 'a'));    // Dylanaaaaa


