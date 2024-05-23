<template>
  <div class="add-container">
    <h3>Adicionar Novo Filme</h3>
    <form @submit.prevent="addFilme">
      <input v-model="filme.titulo_Filme" placeholder="Título do Filme" />
      <input v-model="filme.ano_Lancamento_Filme" placeholder="Ano de Lançamento" type="number" />
      <input v-model="filme.diretor_Filme" placeholder="Diretor do Filme" />
      <input v-model="filme.genero_ID" placeholder="ID do Gênero" type="number" />
      <input v-model="filme.resumo_Filme" placeholder="Resumo do Filme" />
      <input v-model="filme.ImgNomeFich_Filme" placeholder="Nome do Ficheiro da Imagem" />
      <button type="submit">Adicionar</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig';

export default {
  name: 'AdicionarFilme',
  setup() {
    const filme = ref({
      titulo_Filme: '',
      ano_Lancamento_Filme: '',
      diretor_Filme: '',
      genero_ID: '',
      resumo_Filme: '',
      ImgNomeFich_Filme: ''
    });

    const addFilme = async () => {
      try {
        await addDoc(collection(db, 'db_Filmes'), filme.value);
        alert('Filme adicionado com sucesso!');
        filme.value = { titulo_Filme: '', ano_Lancamento_Filme: '', diretor_Filme: '', genero_ID: '', resumo_Filme: '', ImgNomeFich_Filme: '' };
      } catch (error) {
        console.error('Erro ao adicionar filme: ', error);
      }
    };

    return { filme, addFilme };
  }
}
</script>

<style scoped>
.add-container {
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