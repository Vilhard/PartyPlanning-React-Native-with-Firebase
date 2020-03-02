## Party planning App with React Native and Firebase
Is React Native project that enables user to create personal events with CRUD operations and Firebase functionality. Vision is to create all-in-one solution for creating parties and events.

## Demo
[PartyPlanner](./gif/partyPlanner.gif)

## Technologies
* [React Native](https://reactnative.dev/): 0.59.8
* [React](https://reactjs.org/): 16.8.3
* [Node](https://nodejs.org/en/): 12.10.1

* [Firebase](https://firebase.google.com/)
* [Expo](https://expo.io/): 35.0.0

## Installation
 - Clone this repo to your local machine using `https://github.com/Vilhard/PartyPlanning-React-Native-with-Firebase.git`
 - Install node and npm :arrow_right: run npm install in root.
 - Install Expo to make running and building mobile applications easier.
 
 - Create Firebase account and add new project :arrow_right: create Realtime Database and change rules 

 ```javascript
 {
  "rules": {
      ".read": true,
      ".write": true
  }
}
```
- Head to authentication and enable Email/Password Sign-in method
- Go to Project settings and copy your Firebase SDK snippet to your project

```javascript
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGES_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};
```
- Run project in terminal with expo start or npm start :arrow_right: scan QR code with Expo Client on your phone or download Android Studio and run it on your computer.

## Motivation
I got my inspirations from social media platforms where you can create an event and send invitations to others and monitor how many are coming, not coming and so on. I wanted to remove the whole necessity to have social media account and to have more options included in the creation of the events.

