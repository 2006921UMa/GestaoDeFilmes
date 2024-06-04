<template>
    <div class="container">
        <div class="card card-body form-card">
            <h3 class="header-text">Adicionar Filme à Lista</h3>
            <div v-if="!submitted">
                <div class="form-group">
                    <label for="titulo">Título</label>
                    <input type="text" class="form-control" id="titulo" required v-model="ListaFilmes.titulo"
                        name="titulo" />
                </div>

                <div class="form-group">
                    <label for="PaginaLink">Página Link</label>
                    <input type="text" class="form-control" id="PaginaLink" required v-model="ListaFilmes.PaginaLink"
                        name="PaginaLink" />
                </div>

                <div class="form-group">
                    <label for="descricao">Descrição</label>
                    <input type="text" class="form-control" id="descricao" required v-model="ListaFilmes.descricao"
                        name="descricao" />
                </div>

                <button @click="GravarListaFilmes" class="btn submit-button">Enviar</button>
            </div>

            <div v-else>
                <h4>Submetido com sucesso!</h4>
                <button class="btn submit-button" @click="newListaFilmes">Adicionar</button>
            </div>
        </div>
    </div>
</template>

<script>
// Importe os dados diretamente como uma constante
import data from "../../Dados_JSON/get-data_V1.json";

export default {
    name: "AddListaFilmes",
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

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    padding: 20px;
    background-color: #f0f2f5;
}

.form-card {
    width: 100%;
    max-width: 600px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    background-color: white;
}

.header-text {
    font-family: 'Pacifico', cursive;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.form-group {
    margin-bottom: 20px;
}

.form-control {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.6);
    outline: none;
}

.submit-button {
    display: block;
    width: 100%;
    max-width: 200px;
    height: 50px;
    border-radius: 25px;
    background-color: #28a745;
    color: white;
    font-size: 18px;
    text-align: center;
    line-height: 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    border: none;
    margin: 20px auto 0;
    /* Centraliza horizontalmente e adiciona margem superior */
}

.submit-button:hover {
    background-color: #218838;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
}

.submit-button:active {
    background-color: #1e7e34;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
}
</style>
