<template>
    <div class="lista row justify-content-center">
        <div class="col-md-10">
            <h2>Lista de Filmes</h2>
            <h4>Por favor, clique em um texto...</h4>
            <ul class="list-group">
                <li class="list-group-item" :class="{ active: index == indiceActual }"
                    v-for="(ListaFilmes, index) in paginatedFilmes" :key="index"
                    @click="definirAtivar(ListaFilmes, index)">
                    <strong>Titulo:</strong> {{ ListaFilmes.titulo }} <br>
                    <strong>Página Link:</strong> {{ ListaFilmes.PaginaLink }}<br>
                    <strong>Descrição: </strong>{{ ListaFilmes.descricao }}
                </li>
            </ul>
            <div class="paginacao">
                <button @click="PagAtras"> <span>{{ '<<' }}</span> Página anterior</button> |
                <span>Página: {{ PaginaAtual }} de {{ PaginaTotal }} </span> |
                <button @click="PagSeguinte"> Página seguinte <span>{{ '>>' }}</span> </button>
            </div>
        </div>
        <div class="col-md-16">
            <div v-if="atualListaFilmes">
                <ListaFilmesDetalhes :ListaFilmes="atualListaFilmes" @AtualizarLista="AtualizarLista" />
            </div>
            <div v-else>
                <br />
                <p>Por favor, clique em um texto...</p>
            </div>
        </div>
    </div>
</template>

<script>
import ListaFilmesDetalhes from "../components/ListaFilmesMaster.vue";
import data from "../../Dados_JSON/get-data_V1.json"; // Importar os dados JSON

export default {
    name: "lista-filmes",
    components: { ListaFilmesDetalhes },
    data() {
        return {
            ListaFilmesDB: [],
            PaginaAtual: 1,
            itensPorPagina: 7, // 7 Página cada vez
            atualListaFilmes: null,
            indiceActual: -1,
            cancelarSubscricao: null
        };
    },
    computed: {
        paginatedFilmes() {
            const iniciar_Indice = (this.PaginaAtual - 1) * this.itensPorPagina;
            const fim_Indice = iniciar_Indice + this.itensPorPagina;
            return this.ListaFilmesDB.slice(iniciar_Indice, fim_Indice);
        },
        PaginaTotal() {
            return Math.ceil(this.ListaFilmesDB.length / this.itensPorPagina);
        }
    },
    methods: {
        AtualizarLista() {
            this.atualListaFilmes = null;
            this.indiceActual = -1;
        },
        definirAtivar(ListaFilmes, index) {
            this.atualListaFilmes = ListaFilmes;
            this.indiceActual = index;
        },
        PagSeguinte() {
            if (this.PaginaAtual < this.PaginaTotal) {
                this.PaginaAtual++;
            }
        },
        PagAtras() {
            if (this.PaginaAtual > 1) {
                this.PaginaAtual--;
            }
        }
    },
    mounted() {
        this.ListaFilmesDB = data; // Definir os dados JSON na lista de Filmes
    }
};
</script>

<style>
.lista {
    text-align: left;
    max-width: 900px;
    margin: auto;
    margin-left: 10px;
}

.paginacao {
    margin-top: 10px;
}
</style>

