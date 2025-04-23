# 🐱 Facts about cats - simple App based on IndexedDB

A small application that fetches and displays random cat facts from an open-source API. The data is stored locally in the user's browser using IndexedDB, allowing for offline access and reducing unnecessary API calls.

### 🔧 Technologies Used

[Cat Facts API](https://catfact.ninja/) – Open-source API providing random cat facts.

[Indexed DB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) - A low-level API for client-side storage of significant amounts of structured data.

[Dexie.js](https://dexie.org/) – A minimalistic wrapper library that simplifies working with IndexedDB.

### 📦 Features

Fetches random cat facts from the API.

Saves the facts in the user's local IndexedDB (to view database in browser go to devTools -> Application -> IndexedDB -> db).

Allows deleting fact by number ID.

Clears whole DB.

#### The application was implemented for educational purposes and demonstrates a simple use of IndexedDB.


## React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### To start and test clone repository & use `npm start` script

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
