
/*
 ##################################
 #                                #
 #            Firebase            #
 #   (Ligação à Nuvem de dados)   #
 #                                #
 # Data: 11/05/2024               #
 # Ficheiro:                      #
 #  firebaseConctado.ts           #
 #                                #
 # Directório:                    # 
 # /src/firebase/                 #
 #                                #
 ##################################

##################### Zona Comentários ######################
  Copiar a chave está na plataforma Firebase -> configure 
  e colar o texto aqui.
  Estou exporta-lo autenticação para main.js ou outro pasta firebase
  
  (Juntar -> único lugar)

############################################################# */

// Importar a função necessária do Firebase
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Definir a função para inicializar o Firebase
// export function db_firebaseTS() {

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

    export { db };

    // document.getElementById("submit").addEventListener('click', function (e) {
    //     e.preventDefault();
    //     set(ref(db, 'conctado/' + document.getElementById("name").value), {
    //         email: document.getElementById("email").value,
    //         message: document.getElementById("message").value
    //     });
    //     alert("Mensagem enviado sucesso!");
    // });
    //   }