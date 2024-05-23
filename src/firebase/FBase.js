import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { getApps, getApp } from 'firebase/app'; // Importe as funções necessárias do Firebase

// Configuração do Firebase
const firebaseConfig = {
    // Sua configuração do Firebase aqui
};

// Inicializar o Firebase apenas se não houver apps inicializados
// Isso evita a re-inicialização em hot-reloads durante o desenvolvimento.
const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Obtenha a instância do Firestore
const db = getFirestore(firebaseApp);

// Exporte a instância do Firestore para que possa ser usada em outros lugares do seu código
export { db };

// Obtenha uma referência à coleção de Utilizador
const ListaUtilizador = collection(db, 'db_Utilizador_v1');

// Função para criar um Utilizador
export const createUser = async (user) => {
    try {
        await addDoc(ListaUtilizador, user);
        console.log('Utilizador criado com sucesso.');
    } catch (error) {
        console.error('Erro ao criar Utilizador:', error);
        throw error;
    }
};

// Função para carregar Utilizador
export const useLoadUsers = async () => {
    try {
        const querySnapshot = await getDocs(ListaUtilizador);
        const Utilizador = [];
        querySnapshot.forEach((doc) => {
            Utilizador.push({ id: doc.id, ...doc.data() });
        });
        return Utilizador;
    } catch (error) {
        console.error('Erro ao carregar Utilizadors:', error);
        return [];
    }
};

// Função para obter um Utilizador pelo ID
export const getUser = async (id) => {
    try {
        const userDoc = await getDoc(doc(ListaUtilizador, id));
        if (userDoc.exists()) {
            return { id: userDoc.id, ...userDoc.data() };
        } else {
            throw new Error('Utilizador não encontrado');
        }
    } catch (error) {
        console.error('Erro ao obter Utilizador:', error);
        throw error;
    }
};

// Função para atualizar os dados de um Utilizador
export const updateUser = async (id, userData) => {
    try {
        await updateDoc(doc(ListaUtilizador, id), userData);
        console.log('Dados do Utilizador atualizados com sucesso.');
    } catch (error) {
        console.error('Erro ao atualizar Utilizador:', error);
        throw error;
    }
};

// Função para excluir um Utilizador
export const deleteUser = async (id) => {
    try {
        await deleteDoc(doc(ListaUtilizador, id));
        console.log('Utilizador excluído com sucesso.');
    } catch (error) {
        console.error('Erro ao excluir Utilizador:', error);
        throw error;
    }
};
