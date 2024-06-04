<template>
    <div class="container-fluid lista">
        <div class="row">
            <!-- Lista de Filmes -->
            <div class="col-md-8">
                <h2>Lista de Filmes</h2>
                <h4>Por favor, clique em um texto...</h4>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(filme, index) in paginatedFilmes" :key="filme.id"
                        :class="{ active: filmeSelecionado === filme }" @click="selecionarFilme(filme.id)">
                        <strong>Índice:</strong> {{ index }} <br>
                        <strong>Titulo:</strong> {{ filme.titulo }} <br>
                        <strong>Página Link:</strong> {{ filme.PaginaLink }}<br>
                        <strong>Descrição: </strong>{{ filme.descricao }}
                    </li>
                </ul>
                <div class="paginacao">
                    <button @click="PagAtras"> <span>{{ '<<' }}</span> Página anterior</button> |
                    <span>Página: {{ PaginaAtual }} de {{ PaginaTotal }} </span> |
                    <button @click="PagSeguinte"> Página seguinte <span>{{ '>>' }}</span> </button>
                </div>
            </div>
            <div class="col-md-4">
                <!-- Parte para os detalhes do filme -->
                <ListaFilmesDetalhes :filme="filmeSelecionado" @adicionarFilme="adicionarFilme"
                    @atualizarFilme="atualizarFilme" @excluirFilme="excluirFilme" />
            </div>
        </div>
    </div>
</template>

<script>
import ListaFilmesDetalhes from "../components/ListaFilmesDetalhes.vue";
// import data from "../../Dados_JSON/get-data_V1.json"; // Importar os dados JSON

export default {
    name: "ListaFilmesMaster",
    components: { ListaFilmesDetalhes },
    data() {
        return {
            filmes: [], // Array para guardar os filmes
            filmeSelecionado: null, // Variável para guardar o filme selecionado
            PaginaAtual: 1,
            itensPorPagina: 7, // 7 itens por página
            indiceActual: -1 // Índice do filme selecionado
        };
    },
    computed: {
        paginatedFilmes() {
            const iniciar_Indice = (this.PaginaAtual - 1) * this.itensPorPagina;
            const fim_Indice = iniciar_Indice + this.itensPorPagina;
            return this.filmes.slice(iniciar_Indice, fim_Indice);
        },
        PaginaTotal() {
            return Math.ceil(this.filmes.length / this.itensPorPagina);
        }
    },
    methods: {
        AtualizarLista() {
            this.filmeSelecionado = null;
            this.indiceActual = -1;
        },
        selecionarFilme(id) {
            this.filmeSelecionado = this.filmes.find(filme => filme.id === id);
            this.indiceActual = this.filmes.indexOf(this.filmeSelecionado);
        },
        adicionarFilme(novoFilme) {
            novoFilme.id = this.filmes.length + 1;
            this.filmes.push(novoFilme);
            this.filmeSelecionado = novoFilme;
        },
        atualizarFilme(filmeAtualizado) {
            if (this.indiceActual !== -1) {
                // Atualiza diretamente o objeto no array
                Object.assign(this.filmes[this.indiceActual], filmeAtualizado);
                this.filmeSelecionado = filmeAtualizado;
            }
        },
        excluirFilme(filme) {
            const index = this.filmes.indexOf(filme);
            if (index !== -1) {
                this.filmes.splice(index, 1);
                this.filmeSelecionado = null;
                this.indiceActual = -1;
            }
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
        // Carregar os dados dos filmes ao montar o componente
        this.filmes = [
            { id: 1, titulo: "Filme 1", PaginaLink: "http://link1.com", descricao: "Descrição 1" },
            { id: 2, titulo: "Filme 2", PaginaLink: "http://link2.com", descricao: "Descrição 2" },
            { id: 3, titulo: "Filme 3", PaginaLink: "http://link3.com", descricao: "Descrição 3" },
            // Adicione mais filmes conforme necessário
        ];
    }
};
</script>

<style scoped>
.lista {
    text-align: left;
    margin: auto;
}

.list-group-item.active {
    background-color: #007bff;
    color: white;
}

.paginacao {
    margin-top: 10px;
}
</style>
