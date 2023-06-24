import {Client, Account, Databases} from 'appwrite'

const client = new Client();

client
    .setEndpoint(process.env.REACT_APP_APPWRITE_API_ENDPOINT)
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);
    
// Client
export const account = new Account(client)

// Database
export const databases = new Databases(client);



// const promise = users.create('[USER_ID]');

// promise.then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });