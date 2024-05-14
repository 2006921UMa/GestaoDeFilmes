<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="titulo">Título</label>
                <input type="text" class="form-control" id="titulo" required v-model="ListaFilmes.titulo" name="titulo" />
            </div>

            <div class="form-group">
                <label for="PaginaLink">PaginaLink</label>
                <input class="form-control" id="PaginaLink" required v-model="ListaFilmes.PaginaLink" name="PaginaLink" />
            </div>

            <div class="form-group">
                <label for="descricao">Descrição</label>
                <input class="form-control" id="descricao" required v-model="ListaFilmes.descricao" name="descricao" />
            </div>

            <button @click="GravarListaFilmes" class="btn btn-success">Enviar</button>
        </div>

        <div v-else>
            <h4>Submetido com sucesso!</h4>
            <button class="btn btn-success" @click="newListaFilmes">Adicionar</button>
        </div>
    </div>
</template>

<script>
// Importe os dados diretamente como uma constante
import data from "../../Dados_JSON/get-data_V1.json";

export default {
    name: "add-ListaFilmes",
    data() {
        return {
            ListaFilmes: {
                titulo: "",
                PaginaLink: "",
                descricao: "",
                publicado: false
            },
            submitted: false
        };
    },
    methods: {
        GravarListaFilmes() {
            // Simule a criação de um novo ListaFilmes adicionando-o aos dados
            data.push(this.ListaFilmes);
            // Reinicie o estado do formulário
            this.submitted = true;
            this.ListaFilmes = {
                titulo: "",
                PaginaLink: "",
                descricao: "",
                publicado: false
            };
        },

        newListaFilmes() {
            // Reinicie o estado do formulário
            this.submitted = false;
            this.ListaFilmes = {
                titulo: "",
                PaginaLink: "",
                descricao: "",
                publicado: false
            };
        }
    }
};
</script>

<style>
.submit-form {
    max-width: 300px;
    margin: auto;
}
</style>

