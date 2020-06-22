'use strict';

//import * as functions from 'firebase-functions'

// if you need to use the Firebase Admin SDK, uncomment the following:
// import * as admin from 'firebase-admin'


// Create and Deploy Cloud Function with TypeScript using script that is
// defined in functions/package.json:
//    cd functions
//    npm run deploy

//export const helloWorld = functions.https.onRequest((request, response) => {
// response.send('Function getTransactions!\n\n');
//});


function getTransactions(userId: string, fromDate: number, toDate: number){
    let transaction_01 = new Transaction("001", "first_transaction", "1st_Description", "Sucess");

}


let transaction_02 = new Transaction("002", "second_transaction", "2nd_Description", "Sucess");
