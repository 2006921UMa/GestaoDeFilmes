<template>
    <div class="list-container">
        <h3>Lista de Utilizadores</h3>
        <ul>
            <li v-for="utilizador in utilizadores" :key="utilizador.id">
                Login: {{ utilizador.Login_Utilz }} - Email: {{ utilizador.Email_Utilz }}
                <button @click="removeUtilizador(utilizador.id)">Remover</button>
                <router-link :to="{ name: 'EditarUtilizador', params: { id: utilizador.id } }">
                    <button>Editar</button>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig.js';

export default {
    name: 'UtilizadorList',
    setup() {
        const utilizadores = ref([]);

        const fetchUtilizadores = async () => {
            const colRef = collection(db, 'db_Utilizador');
            const querySnapshot = await getDocs(colRef);
            utilizadores.value = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        };

        const removeUtilizador = async (id) => {
            try {
                await deleteDoc(doc(db, 'db_Utilizador', id));
                fetchUtilizadores();
            } catch (error) {
                console.error('Erro ao remover utilizador: ', error);
            }
        };

        onMounted(() => {
            fetchUtilizadores();
        });

        return { utilizadores, removeUtilizador };
    }
}
</script>

<style scoped>
.list-container {
    padding: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background: #f4f4f4;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
}

button {
    margin-left: 10px;
    padding: 5px;
}
</style>
