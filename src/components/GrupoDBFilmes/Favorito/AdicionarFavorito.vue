<template>
    <div class="add-container">
        <h3>Adicionar Novo Favorito</h3>
        <form @submit.prevent="addFavorito">
            <input v-model="favorito.Filmes_ID" placeholder="ID do Filme" />
            <input v-model="favorito.Utilizador_ID" placeholder="ID do Utilizador" />
            <input v-model="favorito.gosto_Favorido" placeholder="Gostou? (sim/não)" />
            <textarea v-model="favorito.Comentario_Favorido" placeholder="Comentário"></textarea>
            <button type="submit">Adicionar</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig.js';

export default {
    name: 'AdicionarFavorito',
    setup() {
        const favorito = ref({
            Filmes_ID: '',
            Utilizador_ID: '',
            gosto_Favorido: '',
            Comentario_Favorido: ''
        });

        const addFavorito = async () => {
            try {
                await addDoc(collection(db, 'db_Favorito'), favorito.value);
                alert('Favorito adicionado com sucesso!');
                favorito.value = { Filmes_ID: '', Utilizador_ID: '', gosto_Favorido: '', Comentario_Favorido: '' };
            } catch (error) {
                console.error('Erro ao adicionar favorito: ', error);
            }
        };

        return { favorito, addFavorito };
    }
}
</script>

<style scoped>
.add-container {
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
