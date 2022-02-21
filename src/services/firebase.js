import { initializeApp } from "firebase/app";
//import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEgKS4c6wWRnBnol77EbFnHb3f9xYrlxc",
    authDomain: "data-job-be2bb.firebaseapp.com",
    projectId: "data-job-be2bb",
    storageBucket: "data-job-be2bb.appspot.com",
    messagingSenderId: "109188555783",
    appId: "1:109188555783:web:6dece6567fed401e92b6a2"
  };

  const firebaseApp = initializeApp(firebaseConfig);



export default firebaseApp