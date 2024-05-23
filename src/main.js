// ##################################
// #                                #
// #           Zona Main            #
// #       (Principal - Inicio)     #
// #                                #
// # Data: 08/05/2024               #
// # Ficheiro: main.js              #
// #                                #
// ##################################

// ##################### Zona Comentários ######################

// Nota Importante, convém nomes muito curto:
// Todos os ficheiros devem adicionar a sigla GF, GT ou outros para evitar confusões no futuro ao adicionar_
//  "Juntar" outros projetos.

// Sigla:
// GF => Gestão de Filmes (Salta para o início do Site Principal Geral => Gestão de Filmes)
// GT => Gestão de Twitter. No futuro, posso adicionar o Twitter e usar GT como prefixo.
// views -> vws, components -> cmps, public -> pubc
// Formulário -> frm, Utilizador -> Utiz,

// import App from './views/PrincipalSite_vws_GF.vue'
// ou
// import App from '@/views/PrincipalSite_Geral.vue' // é um tipo de alias que pode ser considerado como um_
//   caminho absoluto do meus projetos

// ##################### FIM Comentários ######################


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store';
import './assets/styles/global.scss'; // Importando os estilos globais


// Importação correta das funções do Firebase
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import "/src/assets/styles/EnviarMsgtailwind.css";  // EnviarMensagem "Entrar em Conctacto"
// import db from `@firebaseConctado`;

// Configuração do Firebase
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Inicializar o Firebase apenas se não houver apps inicializados
// Isso evita a re-inicialização em hot-reloads durante o desenvolvimento.
const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Obter o objeto de autenticação do Firebase
const auth = getAuth(firebaseApp);

// Inicializar o aplicativo Vue
const vueApp = createApp(App);
vueApp.use(router);
vueApp.mount('#app');

// createApp(App).use(store).use(router).mount('#app');

// Exportando para que possa ser acessado em outras partes do projeto, se necessário
export { firebaseApp, auth };


// é mesma coisa (equivalente)
// createApp(App).use(router).mount('#app')

// ******************************************


// *************** Firebase ******************
// import firebase from 'firebase';
// Importar a função do ficheiro db_firebase.ts
// import { db_firebaseTS } from '@/firebase/db_firebase';

// Chamar a função para inicializar o Firebase
//db_firebaseTS();

// Nota: Estou utilizando o sistema de importação / exportação do ES6

// Se tiver usar módulos ES6 e require, seria:
//  ->  const db = require('./firebase/db_firebase');

//*******************************************

// Porque estou a usar em desenvolvimento
//Vue.config.productionTip = false;


// Initialize Firebase
// var firebaseConfig = {
//     apiKey: "AIzaSyCdUlC0na9lM4zpms1Bvo1K4a4liEC9wLs",
//     authDomain: "gestaodefilms.firebaseapp.com",
//     projectId: "gestaodefilms",
//     storageBucket: "gestaodefilms.appspot.com",
//     messagingSenderId: "536507917269",
//     appId: "1:536507917269:web:316a6416ca36d30562135c"
// };

// firebase.initializeApp(firebaseConfig);

// let app = '';
// firebase.auth().onAuthStateChanged(() => {
//     if (!app) {
//         app = new Vue({
//             router,
//             render: h => h(App)
//         }).$mount('#app');
//     }
// });


