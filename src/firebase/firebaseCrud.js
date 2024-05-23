// firebaseCrud.js

import { firebaseApp } from '../main.js';  // Nota: Onde está ligado Firebase

const db = firebaseApp.firestore();

export async function carregarFilmes() {
    const snapshot = await db.collection('filmes').get();
    return snapshot.docs.map(doc => doc.data());
}

export async function adicionarFilme(filme) {
    await db.collection('filmes').add(filme);
}

export async function atualizarFilme(filmeId, novoTitulo) {
    await db.collection('filmes').doc(filmeId).update({ titulo: novoTitulo });
}

export async function excluirFilme(filmeId) {
    await db.collection('filmes').doc(filmeId).delete();
}
