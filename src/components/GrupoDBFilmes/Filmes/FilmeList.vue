<template>
  <div class="list-container">
    <h3>Lista de Filmes</h3>
    <ul>
      <li v-for="filme in filmes" :key="filme.id">
        {{ filme.titulo_Filme }} - {{ filme.ano_Lancamento_Filme }} - {{ filme.diretor_Filme }}
        <button @click="removeFilme(filme.id)">Remover</button>
        <router-link :to="{ name: 'EditarFilme', params: { id: filme.id } }">
          <button>Editar</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig';

export default {
  name: 'FilmeList',
  setup() {
    const filmes = ref([]);

    const fetchFilmes = async () => {
      const colRef = collection(db, 'db_Filmes');
      const querySnapshot = await getDocs(colRef);
      filmes.value = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    };

    const removeFilme = async (id) => {
      try {
        await deleteDoc(doc(db, 'db_Filmes', id));
        fetchFilmes();
      } catch (error) {
        console.error('Erro ao remover filme: ', error);
      }
    };

    onMounted(() => {
      fetchFilmes();
    });

    return { filmes, removeFilme };
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
