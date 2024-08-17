// Promises

// const buyFlightTicket = () => {

//     // return new Promise();

//     // return promise can be 3 outcomes,
//     // 1. promise is pending cuz u dont' know the result is successful or not.
//     // 2. promise is successful, fulfilled.
//     // 3. promise has been rejected.

// }



const buyFlightTicket = () => {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            const error = false;     // false = payment wrong or decline 

            if( error ){
                reject("Sorry your payment was not successful");
            } else {
                resolve("Thank you, your payment was successful");
            }

        }, 3000);
    });
}


// to know outcome when fulfilled, so we use 2 chain methods     .then()   .catch();

buyFlightTicket()
.then( (success) => console.log(success))
.catch( (error) => console.log(error));

// Thank you, your payment was successful
//const error = True;  // Sorry your payment was not successful



// Challenge

/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

const userData = new Promise((resolve,reject) => {
    const error = true;     // true = error shit tl, reject lote mal.

    // Understanding the error Variable
    // The error variable is used to simulate whether an error has occurred during an operation.
    // If error is true, it means there is an error, so the promise is rejected.
    // If error is false, it means the operation is successful, so the promise is resolved.

    if(error) {
        reject('500 Level Error');
    } else {
        resolve({
            firstname: 'Dylan',
            age: 32,
            email: 'dylan@gmail.com'
        });
    }
});

userData
    .then((data) => console.log(data))
    .catch((error) => console.log(error));


// error = true;            '500 Level Error'
// error = false;           { firstname: 'Dylan', age: 32, email: 'dylan@gmail.com' }


// Understanding the error Variable
// The error variable is used to simulate whether an error has occurred during an operation.
// If error is true, it means there is an error, so the promise is rejected.
// If error is false, it means the operation is successful, so the promise is resolved.


