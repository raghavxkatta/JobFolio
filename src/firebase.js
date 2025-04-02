
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCRMd4zVcP7DFw50NyMkqeANqEkko9D1X8",
  authDomain: "jobfolio-7e45f.firebaseapp.com",
  projectId: "jobfolio-7e45f",
  storageBucket: "jobfolio-7e45f.firebasestorage.app",
  messagingSenderId: "167320477504",
  appId: "1:167320477504:web:7252401e43d08da95ea4a5",
  databaseURL: "https://jobfolio-7e45f-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);