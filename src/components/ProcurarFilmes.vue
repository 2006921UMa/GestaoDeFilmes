<template>
    <div class="container">
        <div class="cartao-formulario">
            <h1 class="cabeca-texto">Pesquisar Título de Filmes</h1>
            <form @submit.prevent="pesquisarFilme(false)" class="formulario-pesquisa">
                <input type="text" v-model="titulo" placeholder="Digite o título do filme" maxlength="50" />
                <button type="submit" class="botao-submeter">Pesquisar</button>
            </form>
            <div v-if="erro" class="erro">{{ erro }}</div>
            <table v-if="resultados.length" class="tabela">
                <thead>
                    <tr>
                        <th>Imagem</th>
                        <th>Título</th>
                        <th>Ano</th>
                        <th>Diretor</th>
                        <th>Grupo de Atores</th>
                        <th>Resumo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="filme in resultadosPaginados" :key="filme.id">
                        <td><img :src="getCaminhoImagem(filme.ImgNomeFich_Filme)" :alt="filme.titulo_Filme"
                                class="imagem-tabela" /></td>
                        <td>{{ filme.titulo_Filme }}</td>
                        <td>{{ filme.ano_Lancamento_Filme }}</td>
                        <td>{{ filme.diretor_Filme }}</td>
                        <td>{{ filme.grupo_de_atores_Filme }}</td>
                        <td>{{ filme.resumo_Filme }}</td>
                    </tr>
                </tbody>
            </table>
            <div v-if="carregando">Carregando...</div>
            <div class="container-paginacao">
                <button @click="paginaAnterior" :disabled="paginaAtual === 1" class="botao-paginacao">Anterior</button>
                <button @click="carregarMais" v-if="resultados.length" class="botao-carregar-mais">Carregar
                    Mais</button>
                <button @click="paginaSeguinte" :disabled="paginaAtual === totalPaginas"
                    class="botao-paginacao">Seguinte</button>
            </div>
            <div class="info-paginacao">
                <span>Página {{ paginaAtual }} de {{ totalPaginas }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '../firebase/firebaseConfig';
import { collection, query, orderBy, limit, startAfter, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';

export default {
    data() {
        return {
            titulo: '',
            resultados: [],
            erro: '',
            ultimoVisivel: null,
            carregando: false,
            paginaAtual: 1,
            filmesPorPagina: 3,
            totalPaginas: 1,
        };
    },
    computed: {
        resultadosPaginados() {
            const start = (this.paginaAtual - 1) * this.filmesPorPagina;
            const end = start + this.filmesPorPagina;
            return this.resultados.slice(start, end);
        }
    },
    methods: {
        async pesquisarFilme(pagina) {
            try {
                this.carregando = true;
                this.erro = '';

                if (!this.titulo || !this.titulo.trim()) {
                    this.erro = 'Por favor, insira um termo de pesquisa válido.';
                    this.carregando = false;
                    return;
                }

                const filmesRef = collection(db, 'db_Filmes');
                let filmesQuery;

                if (pagina && this.ultimoVisivel) {
                    filmesQuery = query(filmesRef, orderBy('titulo_Filme'), startAfter(this.ultimoVisivel), limit(10));
                } else {
                    filmesQuery = query(filmesRef, orderBy('titulo_Filme'), limit(10));
                }

                const querySnapshot = await getDocs(filmesQuery);
                this.ultimoVisivel = querySnapshot.docs[querySnapshot.docs.length - 1];
                const todosFilmes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                // Filtrar os resultados no lado do cliente
                if (pagina) {
                    this.resultados = this.resultados.concat(todosFilmes.filter(filme =>
                        filme.titulo_Filme && filme.titulo_Filme.toLowerCase().includes(this.titulo.toLowerCase())
                    ));
                } else {
                    this.resultados = todosFilmes.filter(filme =>
                        filme.titulo_Filme && filme.titulo_Filme.toLowerCase().includes(this.titulo.toLowerCase())
                    );
                }

                if (this.resultados.length === 0) {
                    this.erro = 'Nenhum filme encontrado.';
                }

                this.totalPaginas = Math.ceil(this.resultados.length / this.filmesPorPagina);

                // Gravar a pesquisa no db_HistoricoPesquisar
                await this.gravarPesquisa();

                this.carregando = false;
            } catch (error) {
                console.error('Erro ao pesquisar filmes:', error);
                this.erro = 'Ocorreu um erro ao pesquisar filmes.';
                this.carregando = false;
            }
        },
        async gravarPesquisa() {
            try {
                if (!this.titulo || !this.titulo.trim()) {
                    return;
                }

                const historicoRef = collection(db, 'db_HistoricoPesquisar');
                await addDoc(historicoRef, {
                    termo: this.titulo,
                    timestamp: serverTimestamp()
                });
                console.log('Pesquisa gravada com sucesso.');
            } catch (error) {
                console.error('Erro ao gravar a pesquisa no histórico:', error);
            }
        },
        paginaAnterior() {
            if (this.paginaAtual > 1) {
                this.paginaAtual--;
            }
        },
        paginaSeguinte() {
            if (this.paginaAtual < this.totalPaginas) {
                this.paginaAtual++;
            }
        },
        async carregarMais() {
            await this.pesquisarFilme(true);
        },
        getCaminhoImagem(nomeFicheiro) {
            return require(`@/assets/imgFilmes/${nomeFicheiro}`);
        }
    }
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    background-color: #f0f2f5;
    padding: 20px;
}

.cartao-formulario {
    width: 100%;
    max-width: 820px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 35px;
    background-color: white;
    text-align: left;
}

.cabeca-texto {
    font-family: 'Pacifico', cursive;
    text-align: center;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.formulario-pesquisa {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.tabela {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

.tabela th,
.tabela td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.tabela th {
    background-color: #f2f2f2;
}

.imagem-tabela {
    width: 100px;
    height: 100px;
    object-fit: cover;
}

.container-botao {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.botao-submeter {
    display: inline-block;
    width: 130px;
    height: 40px;
    border-radius: 20px;
    background-color: #28a745;
    color: white;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    border: none;
    margin-left: 10px;
}

.botao-submeter:hover {
    background-color: #218838;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
}

.botao-submeter:active {
    background-color: #1e7e34;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
}

.botao-carregar-mais {
    display: inline-block;
    width: 130px;
    height: 40px;
    border-radius: 20px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    border: none;
    margin-left: 10px;
}

.botao-carregar-mais:hover {
    background-color: #0069d9;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
}

.botao-carregar-mais:active {
    background-color: #0056b3;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
}

.container-paginacao {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.botao-paginacao {
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid #007bff;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

.botao-paginacao:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

.info-paginacao {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    font-size: 14px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

img {
    display: block;
    margin: 0 auto;
}

div[erro] {
    color: red;
    margin-top: 10px;
}
</style>

