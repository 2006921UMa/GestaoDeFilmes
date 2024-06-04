<template>
  <div class="container-fluid lista">
    <div class="row justify-content-center">
      <!-- Lista de Filmes -->
      <div class="col-md-6 lista-filmes">
        <h2 class="header-text">Lista de Filmes</h2>
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
          <button @click="PagAtras" class="btn btn-secondary"> <span>{{ '<<' }}</span> Página anterior</button>
          <span>Página: {{ PaginaAtual }} de {{ PaginaTotal }} </span>
          <button @click="PagSeguinte" class="btn btn-secondary"> Página seguinte <span>{{ '>>' }}</span> </button>
        </div>
      </div>
      <!-- Detalhes do Filme -->
      <div class="col-md-6 detalhes-filme">
        <ListaFilmesDetalhes :filme="atualListaFilmes" @atualizarFilme="atualizarFilme"
          @adicionarFilme="adicionarFilme" @excluirFilme="excluirFilme" />
      </div>
    </div>
  </div>
</template>

<script>
import ListaFilmesDetalhes from "../components/ListaFilmesDetalhes.vue";
import data from "../../Dados_JSON/get-data_V1.json"; // Importar os dados JSON

export default {
  name: "lista-filmes",
  components: { ListaFilmesDetalhes },
  data() {
    return {
      ListaFilmesDB: [],
      PaginaAtual: 1,
      itensPorPagina: 5, // 5 itens por página
      atualListaFilmes: null,
      indiceActual: -1
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
    adicionarFilme(novoFilme) {
      this.ListaFilmesDB.push(novoFilme);
      this.atualListaFilmes = novoFilme;
      this.PaginaTotal = Math.ceil(this.ListaFilmesDB.length / this.itensPorPagina);
    },
    atualizarFilme(filmeAtualizado) {
      if (this.indiceActual !== -1) {
        this.ListaFilmesDB[this.indiceActual] = filmeAtualizado;
        this.atualListaFilmes = filmeAtualizado;
      }
    },
    excluirFilme(filme) {
      const index = this.ListaFilmesDB.indexOf(filme);
      if (index !== -1) {
        this.ListaFilmesDB.splice(index, 1);
        this.atualListaFilmes = null;
        this.indiceActual = -1;
        this.PaginaTotal = Math.ceil(this.ListaFilmesDB.length / this.itensPorPagina);
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
    this.ListaFilmesDB = data; // Definir os dados JSON na lista de Filmes
  }
};
</script>

<style scoped>
.lista {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 80vh; /* Adjust the height as needed */
}

.lista-filmes, .detalhes-filme {
  flex: 1; /* Ensure both components take up equal space */
  margin: 0 10px; /* Add some spacing between the components */
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header-text {
  font-family: 'Pacifico', cursive;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.list-group-item.active {
  background-color: #007bff;
  color: white;
}

.list-group-item {
  cursor: pointer;
}

.paginacao {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.paginacao button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.paginacao button:hover {
  background-color: #0056b3;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.paginacao button:active {
  background-color: #004085;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transform: translateY(0);
}
</style>
