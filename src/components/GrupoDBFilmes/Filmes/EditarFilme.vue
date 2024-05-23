<template>
  <div class="edit-container" v-if="filme">
    <h3>Editar Filme</h3>
    <form @submit.prevent="updateFilme">
      <input v-model="filme.titulo_Filme" placeholder="Título do Filme" />
      <input v-model="filme.ano_Lancamento_Filme" placeholder="Ano de Lançamento" type="number" />
      <input v-model="filme.diretor_Filme" placeholder="Diretor do Filme" />
      <input v-model="filme.genero_ID" placeholder="ID do Gênero" type="number" />
      <input v-model="filme.resumo_Filme" placeholder="Resumo do Filme" />
      <input v-model="filme.ImgNomeFich_Filme" placeholder="Nome do Ficheiro da Imagem" />
      <button type="submit">Atualizar</button>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig';
import { useRoute } from 'vue-router';

export default {
  name: 'EditarFilme',
  setup() {
    const route = useRoute();
    const filme = ref(null);

    const fetchFilme = async (id) => {
      const docRef = doc(db, 'db_Filmes', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        filme.value = { ...docSnap.data(), id: docSnap.id };
      } else {
        console.log('No such document!');
      }
    };

    const updateFilme = async () => {
      try {
        const docRef = doc(db, 'db_Filmes', filme.value.id);
        await updateDoc(docRef, {
          titulo_Filme: filme.value.titulo_Filme,
          ano_Lancamento_Filme: filme.value.ano_Lancamento_Filme,
          diretor_Filme: filme.value.diretor_Filme,
          genero_ID: filme.value.genero_ID,
          resumo_Filme: filme.value.resumo_Filme,
          ImgNomeFich_Filme: filme.value.ImgNomeFich_Filme
        });
        alert('Filme atualizado com sucesso!');
      } catch (error) {
        console.error('Erro ao atualizar filme: ', error);
      }
    };

    onMounted(() => {
      fetchFilme(route.params.id);
    });

    return { filme, updateFilme };
  }
}
</script>

<style scoped>
.edit-container {
  padding: 20px;
}

input {
  display: block;
  margin-bottom: 10px;
  padding: 10px;
}

button {
  padding: 10px;
}
</style>
