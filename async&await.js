const photos = [];

async function photoUpload(){
    let uploadStatus = new Promise ( (resolve,reject) => {
        setTimeout(() => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000);
    })

    let result = await uploadStatus;  // uploadStatus resolved pee tae hti wait khing tr

    // console.log(result);     // Promise  #sync  // photo unloaded  0
    // console.log(photos.length);     // 0

    console.log(result);    //  Photo Uploaded    1
    console.log(photos.length);   // 1
}

photoUpload();



// Challenge

//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data.value);  // got random joke
}

getJoke();


// ChatGPT

// Function to fetch a random Chuck Norris joke
async function fetchChuckNorrisJoke() {
    try {
        // Use fetch to get a random joke from the Chuck Norris API
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        
        // Check if the response is OK (status code 200)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Parse the JSON from the response
        const data = await response.json();
        
        // Log the joke to the console
        console.log(data.value);
    } catch (error) {
        // Log any errors that occur during the fetch
        console.error('Fetching joke failed:', error);
    }
}

// Call the function to fetch and print a random joke
fetchChuckNorrisJoke();

