import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//  1) when seeding the database you'll have to uncomment this!
//  import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBlSizDLLUQwOzQi-vT_hO-jOtnAs_ESAw",
    authDomain: "netflix-clone-d7433.firebaseapp.com",
    projectId: "netflix-clone-d7433",
    storageBucket: "netflix-clone-d7433.appspot.com",
    messagingSenderId: "291049064952",
    appId: "1:291049064952:web:be50ee617ffc75f32bee0d"

};

const firebase = Firebase.initializeApp(config);

// / 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get dup




export {firebase};