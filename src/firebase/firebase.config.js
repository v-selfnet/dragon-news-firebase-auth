import { initializeApp } from "firebase/app";

console.log('secter key:', import.meta.env.VITE_APIKEY);

const firebaseConfig = {

  // apiKey: "AIzaSyB0XCj1n-5RBYrMoRFNDjAhCUdChah-Aww",
  // authDomain: "dragon-news-firebase-auth.firebaseapp.com",
  // projectId: "dragon-news-firebase-auth",
  // storageBucket: "dragon-news-firebase-auth.appspot.com",
  // messagingSenderId: "908900016068",
  // appId: "1:908900016068:web:a5237677344172feb00e91"


  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_UTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

const app = initializeApp(firebaseConfig);
export default app;