/**
 * Fetch
 * 
 * RESTFul API - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */




// The fetch function is used to make a network request to the specified URL




fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())           // Convert the response to JSON
    .then(data => console.log(data));            // Log the data to the console

//output     {postId: 1, id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium'}





fetch('https://jsonplaceholder.typicode.com/comments',{
        method: "POST",
        body: JSON.stringify({
            postId: 1,
            name: 'Dylan',
            email: 'dylan@gmail.com',
            body: 'that was dope'
        })
    })
    .then(response => response.json())
    .then(data => console.log(data));

// output     {id: 501}




// chatGPT Explaination

fetch('https://jsonplaceholder.typicode.com/comments', {
    method: "POST", // The request method is POST, which is used to send data to the server.
    body: JSON.stringify({ // The `body` contains the data that will be sent in the request.
        postId: 1, // The ID of the post that the comment is associated with.
        name: 'Dylan', // The name of the person making the comment.
        email: 'dylan@gmail.com', // The email address of the person making the comment.
        body: 'that was dope' // The actual content of the comment.
    })
})
.then(response => response.json()) // Convert the response from the server into a JSON object.
.then(data => console.log(data)); // Log the resulting data to the console.




// Challenge 


/**
 * Fetch - Challenge
 * 
 * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 * 
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */



fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => console.log(data));


fetch('https://jsonplaceholder.typicode.com/comments/',{
        method: "POST",
        body: JSON.stringify({
            name: 'Comment 105',
            email: 'dylansemail310@gmail.com',
            body: 'Dopes comment in the game',
            postId: 1
        })
    })
    .then(response => response.json())
    .then(data => console.log(data));

// output


// {postId: 1, id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium'}

// {id: 501}
