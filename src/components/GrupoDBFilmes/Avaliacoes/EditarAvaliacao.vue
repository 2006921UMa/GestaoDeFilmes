<template>
  <div class="edit-container" v-if="avaliacao">
    <h3>Editar Avaliação</h3>
    <form @submit.prevent="updateAvaliacao">
      <input v-model="avaliacao.Utilizador_ID" placeholder="ID do Utilizador" />
      <input v-model="avaliacao.filme_ID" placeholder="ID do Filme" />
      <input v-model="avaliacao.classificacao_Avaliacao" placeholder="Classificação" type="number" />
      <textarea v-model="avaliacao.comentario_Avaliacao" placeholder="Comentário"></textarea>
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
  name: 'EditarAvaliacao',
  setup() {
    const route = useRoute();
    const avaliacao = ref(null);

    const fetchAvaliacao = async (id) => {
      const docRef = doc(db, 'db_Avaliacoes', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        avaliacao.value = { ...docSnap.data(), id: docSnap.id };
      } else {
        console.log('No such document!');
      }
    };

    const updateAvaliacao = async () => {
      try {
        const docRef = doc(db, 'db_Avaliacoes', avaliacao.value.id);
        await updateDoc(docRef, {
          Utilizador_ID: avaliacao.value.Utilizador_ID,
          filme_ID: avaliacao.value.filme_ID,
          classificacao_Avaliacao: avaliacao.value.classificacao_Avaliacao,
          comentario_Avaliacao: avaliacao.value.comentario_Avaliacao
        });
        alert('Avaliação atualizada com sucesso!');
      } catch (error) {
        console.error('Erro ao atualizar avaliação: ', error);
      }
    };

    onMounted(() => {
      fetchAvaliacao(route.params.id);
    });

    return { avaliacao, updateAvaliacao };
  }
}
</script>

<style scoped>
.edit-container {
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