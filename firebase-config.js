// Importa o método necessário do pacote Firebase
import { initializeApp } from "firebase/app";

// Seu objeto de configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCdUlC0na9lM4zpms1Bvo1K4a4liEC9wLs",
    authDomain: "gestaodefilms.firebaseapp.com",
    databaseURL: "https://gestaodefilms-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gestaodefilms",
    storageBucket: "gestaodefilms.appspot.com",
    messagingSenderId: "536507917269",
    appId: "1:536507917269:web:316a6416ca36d30562135c"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

export default app;
