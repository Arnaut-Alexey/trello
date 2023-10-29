import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAbkNvOW0vACWgqcVKZjrTAzMFRZBchr64",
    authDomain: "trello-2d2ff.firebaseapp.com",
    projectId: "trello-2d2ff",
    storageBucket: "trello-2d2ff.appspot.com",
    messagingSenderId: "890126210665",
    appId: "1:890126210665:web:c775c77640916f023834f8"
});

export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp)