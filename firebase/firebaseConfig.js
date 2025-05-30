// firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyAL2xsSAP7B-thcBjhCMTRqK9gYqsjJ8fs",
  authDomain: "pokeapi2-abc08.firebaseapp.com",
  projectId: "pokeapi2-abc08",
  storageBucket: "pokeapi2-abc08.appspot.com",
  messagingSenderId: "461846502475",
  appId: "1:461846502475:web:ef16a67735e68a241c01ce"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };