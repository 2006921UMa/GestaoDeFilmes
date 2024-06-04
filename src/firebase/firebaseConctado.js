
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
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
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