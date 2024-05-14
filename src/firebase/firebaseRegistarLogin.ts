
/*
 ##################################
 #                                #
 #            Firebase            #
 #   (Ligação à Nuvem de dados)   #
 #                                #
 # Data: 08/05/2024               #
 # Ficheiro:                      #
 #  firebaseRegistrarLogins.ts    #
 #                                #
 ##################################

##################### Zona Comentários ######################
  Copiar a chave está na plataforma Firebase -> configure 
  e colar o texto aqui.
  Estou exporta-lo autenticação para main.js

############################################################# */

// Importar a função necessária do Firebase
// import { initializeApp } from "firebase/app";

//Importe as funções que precisa das SDKs que precisa.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Definir a função para inicializar o Firebase
export function db_firebaseTS() {

 const firebaseConfig = {
  apiKey: "AIzaSyCdUlC0na9lM4zpms1Bvo1K4a4liEC9wLs",
  authDomain: "gestaodefilms.firebaseapp.com",
  databaseURL: "https://gestaodefilms-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gestaodefilms",
  storageBucket: "gestaodefilms.appspot.com",
  messagingSenderId: "536507917269",
  appId: "1:536507917269:web:316a6416ca36d30562135c"
};

    // Inicializar o Firebase com a configuração fornecida
    const app = initializeApp(firebaseConfig)
  
    // Get reference to database services
    const db = getDatabase(app);

    document.getElementById("submit").addEventListener('click', function (e) {
        e.preventDefault();
        set(ref(db, 'user/' + document.getElementById("username").value), {
            // login: document.getElementById("login").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        });
        alert("Login Sucesso!");
    });

  }