<template>
  <div class="add-container">
    <h3>Adicionar Nova Avaliação</h3>
    <form @submit.prevent="addAvaliacao">
      <input v-model="avaliacao.Utilizador_ID" placeholder="ID do Utilizador" />
      <input v-model="avaliacao.filme_ID" placeholder="ID do Filme" />
      <input v-model="avaliacao.classificacao_Avaliacao" placeholder="Classificação" type="number" />
      <textarea v-model="avaliacao.comentario_Avaliacao" placeholder="Comentário"></textarea>
      <button type="submit">Adicionar</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig.js';

export default {
  name: 'AdicionarAvaliacao',
  setup() {
    const avaliacao = ref({
      Utilizador_ID: '',
      filme_ID: '',
      classificacao_Avaliacao: '',
      comentario_Avaliacao: ''
    });

    const addAvaliacao = async () => {
      try {
        await addDoc(collection(db, 'db_Avaliacoes'), avaliacao.value);
        alert('Avaliação adicionada com sucesso!');
        avaliacao.value = { Utilizador_ID: '', filme_ID: '', classificacao_Avaliacao: '', comentario_Avaliacao: '' };
      } catch (error) {
        console.error('Erro ao adicionar avaliação: ', error);
      }
    };

    return { avaliacao, addAvaliacao };
  }
}
</script>

<style scoped>
.add-container {
  padding: 20px;
}

input, textarea {
  display: block;
  margin-bottom: 10px;
  padding: 10px;
}

button {
  padding: 10px;
}
</style>