<template>
    <div class='root'>
        <p> Encontrou {{ PesquisarTexto.length }} resultados para "{{ query }}" </p>
        <ul>
            <li v-for='ReceberDados_get in PesquisarTexto' :key='ReceberDados_get.Page'>
                Nome: {{ ReceberDados_get.Nome }} <br>
                Link: {{ ReceberDados_get.Pagina }}
            </li>
        </ul>
    </div>
</template>


<script>

import { computed } from 'vue'
import ReceberDados_gets from  "../../Dados_JSON/get-data_V2.json"
export default {
    props: {
        query: String
    },
    setup(props) {
        const PesquisarTexto = computed(() => {
            return ReceberDados_gets.filter(s => s.Nome.toLowerCase().includes(props.query.toLowerCase()))
        })

        return {
            PesquisarTexto
        }
    }

}
</script>

<style scoped>
.root {
    width: 400px;
    margin: 0 auto;
}

.root p {
    text-align: right;
    font-size: 0.7em;
    margin: 0;
}

ul {
    list-style: none;
    width: 50px 0;
    padding: 0;
    background-color: #fafafa;
    border-radius: 5px;
    border: 1px solid #ddd;
}

li {
    text-align: left;
    padding: 20px;
    border-bottom: 1px solid #ddd;
}

li:nth-last-of-type(1) {
    border-bottom: none;
}
</style>