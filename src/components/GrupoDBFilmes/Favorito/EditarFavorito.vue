<template>
    <div class="edit-container" v-if="favorito">
        <h3>Editar Favorito</h3>
        <form @submit.prevent="updateFavorito">
            <input v-model="favorito.Filmes_ID" placeholder="ID do Filme" />
            <input v-model="favorito.Utilizador_ID" placeholder="ID do Utilizador" />
            <input v-model="favorito.gosto_Favorido" placeholder="Gostou? (sim/não)" />
            <textarea v-model="favorito.Comentario_Favorido" placeholder="Comentário"></textarea>
            <button type="submit">Atualizar</button>
        </form>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig.js';
import { useRoute } from 'vue-router';

export default {
    name: 'EditarFavorito',
    setup() {
        const route = useRoute();
        const favorito = ref(null);

        const fetchFavorito = async (id) => {
            const docRef = doc(db, 'db_Favorito', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                favorito.value = { ...docSnap.data(), id: docSnap.id };
            } else {
                console.log('No such document!');
            }
        };

        const updateFavorito = async () => {
            try {
                const docRef = doc(db, 'db_Favorito', favorito.value.id);
                await updateDoc(docRef, {
                    Filmes_ID: favorito.value.Filmes_ID,
                    Utilizador_ID: favorito.value.Utilizador_ID,
                    gosto_Favorido: favorito.value.gosto_Favorido,
                    Comentario_Favorido: favorito.value.Comentario_Favorido
                });
                alert('Favorito atualizado com sucesso!');
            } catch (error) {
                console.error('Erro ao atualizar favorito: ', error);
            }
        };

        onMounted(() => {
            fetchFavorito(route.params.id);
        });

        return { favorito, updateFavorito };
    }
}
</script>

<style scoped>
.edit-container {
    padding: 20px;
}

input,
textarea {
    display: block;
    margin-bottom: 10px;
    padding: 10px;
}

button {
    padding: 10px;
}
</style>
