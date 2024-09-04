// Promises 

const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = false;   // false meaning => error ma see buu so yin
            // The error variable is used to determine whether an error occurred during the payment process.
            // When error is false, it means no error occurred, so the payment was successful. The code then calls resolve, which handles the success case

            if (error) {
                reject('Sorry your payment was not successful!');
            } else {
                resolve('Thank you, your payment was successful');
            }

        }, 3000)
    })
}

buyFlightTicket()
.then( success => console.log(success))
.catch( error => console.log(error));



const userData = () => new Promise( (resolve, reject) => {
        setTimeout(() => {
            const error = false;  // true = error shi khae yin reject mal

            if (error) {
                reject('404 Error!');
            } else {
                resolve({
                    firstname: 'Dean',
                    age: 32,
                    email: 'dean@gmail.com'
                })
            }
        }, 2000);
    })


userData()
    .then(success => console.log(success))   // typeof = object
    .catch(error => console.log(error));