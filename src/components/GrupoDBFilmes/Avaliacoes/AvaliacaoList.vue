<template>
  <div class="list-container">
    <h3>Lista de Avaliações</h3>
    <ul>
      <li v-for="avaliacao in avaliacoes" :key="avaliacao.id">
        Utilizador ID: {{ avaliacao.Utilizador_ID }} - Filme ID: {{ avaliacao.filme_ID }} - Classificação: {{ avaliacao.classificacao_Avaliacao }}
        <button @click="removeAvaliacao(avaliacao.id)">Remover</button>
        <router-link :to="{ name: 'EditarAvaliacao', params: { id: avaliacao.id } }">
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
  name: 'AvaliacaoList',
  setup() {
    const avaliacoes = ref([]);

    const fetchAvaliacoes = async () => {
      const colRef = collection(db, 'db_Avaliacoes');
      const querySnapshot = await getDocs(colRef);
      avaliacoes.value = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    };

    const removeAvaliacao = async (id) => {
      try {
        await deleteDoc(doc(db, 'db_Avaliacoes', id));
        fetchAvaliacoes();
      } catch (error) {
        console.error('Erro ao remover avaliação: ', error);
      }
    };

    onMounted(() => {
      fetchAvaliacoes();
    });

    return { avaliacoes, removeAvaliacao };
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