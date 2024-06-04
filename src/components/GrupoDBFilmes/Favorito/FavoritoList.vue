<template>
    <div class="list-container">
        <h3>Lista de Favoritos</h3>
        <ul>
            <li v-for="favorito in favoritos" :key="favorito.id">
                Filme ID: {{ favorito.Filmes_ID }} - Utilizador ID: {{ favorito.Utilizador_ID }} - Gostou: {{
                    favorito.gosto_Favorido }}
                <button @click="removeFavorito(favorito.id)">Remover</button>
                <router-link :to="{ name: 'EditarFavorito', params: { id: favorito.id } }">
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
    name: 'FavoritoList',
    setup() {
        const favoritos = ref([]);

        const fetchFavoritos = async () => {
            const colRef = collection(db, 'db_Favorito');
            const querySnapshot = await getDocs(colRef);
            favoritos.value = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        };

        const removeFavorito = async (id) => {
            try {
                await deleteDoc(doc(db, 'db_Favorito', id));
                fetchFavoritos();
            } catch (error) {
                console.error('Erro ao remover favorito: ', error);
            }
        };

        onMounted(() => {
            fetchFavoritos();
        });

        return { favoritos, removeFavorito };
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
