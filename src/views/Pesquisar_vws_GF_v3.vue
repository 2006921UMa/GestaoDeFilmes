<template>
    <div class="pesquisar">
        <h2> Filtro de texto (Filmes)</h2>
        <h3> (pesquisar por palavra chave)</h3>
        <input type='text' placeholder='Pesquisar palavras ...' v-model='query' />
        <div>
             <button @click='reset'> Reiniciar </button>  <!-- Limpar os dados -->
        </div>
        <Pesq_Result_cmps :query='query' />   <!-- Mostra o corpo de dados  -->

    </div>
</template>

<script>
import { ref } from 'vue'
import Pesq_Result_cmps from "../components/PesquisaResultado_cmps_GF_v3.vue"
export default {
    components: {
        Pesq_Result_cmps 
    },
    setup() {
        const query = ref('')

        const reset = () => {
            query.value = '' // Limpar os valores
        }

        return {
            reset,
            query
        }
    }
}
</script>

<style>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

input[type='text'] {
    width: 300px;
    margin-bottom: 20px;
    padding: 10px;
}
</style>