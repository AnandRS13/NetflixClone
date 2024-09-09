
import {getAuth} from 'firebase/auth'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB7FWJURIKIhcm8OShDkJiE7NBRgazTPhc",
  authDomain: "netflix-clone-6542d.firebaseapp.com",
  projectId: "netflix-clone-6542d",
  storageBucket: "netflix-clone-6542d.appspot.com",
  messagingSenderId: "372291155923",
  appId: "1:372291155923:web:9fa7bd23db80a5287fe126",
  measurementId: "G-G5NLTBNPJG"
};


const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)