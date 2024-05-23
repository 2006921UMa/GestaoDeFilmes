<template>
    <div class="container">
        <div class="historico-e-pesquisa form-card">
            <div class="historico-pesquisas">
                <h3 class="cabeca-texto">Histórico de Pesquisas</h3>
                <ul>
                    <li v-for="(historico, index) in historicoPaginado" :key="index">
                        <span class="link" @click="handleClick(historico)">{{ historico.termo }}</span>
                        <span> - {{ FormatoDados(historico.timestamp) }}</span>
                        <button @click="apagarPesquisa(historico.id)" class="apagar-botao">Apagar</button>
                    </li>
                </ul>
            </div>
            <div class="resultados-pesquisa">
                <div class="caixa-de-pesquisa">
                    <form @submit.prevent="pesquisarFilme" class="pesquisa-form">
                        <input type="text" v-model="termoPesquisa" placeholder="Digite o título do filme..."
                            maxlength="50" />
                        <button type="submit" class="pesquisar-botao">Pesquisar</button>
                    </form>
                    <div class="paginacao-container-topo">
                        <button @click="paginaAnteriorTabela" :disabled="paginaAtualTabela === 1"
                            class="paginacao-botao">Anterior</button>
                        <span class="paginacao-info">Página {{ paginaAtualTabela }} de {{ totalPaginasTabela }}</span>
                        <button @click="paginaSeguinteTabela" :disabled="paginaAtualTabela === totalPaginasTabela"
                            class="paginacao-botao">Seguinte</button>
                    </div>
                </div>
                <h3 class="cabeca-texto">Resultados da Pesquisa</h3>
                <table v-if="resultadosPesquisa.length" class="tabela-filmes">
                    <thead>
                        <tr>
                            <th>Imagem</th>
                            <th>Título</th>
                            <th>Diretor</th>
                            <th>Ano</th>
                            <th>Grupo de Atores</th>
                            <th>Resumo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(resultado, index) in resultadosPaginados" :key="index">
                            <td v-if="imagemExiste(resultado.ImgNomeFich_Filme)">
                                <img :src="getCaminhoImagem(resultado.ImgNomeFich_Filme)" :alt="resultado.titulo_Filme"
                                    class="imagem-filme" />
                            </td>
                            <td v-else>
                                Não encontra o ficheiro
                            </td>
                            <td>{{ resultado.titulo_Filme || '' }}</td>
                            <td>{{ resultado.diretor_Filme || '' }}</td>
                            <td>{{ resultado.ano_Lancamento_Filme || '' }}</td>
                            <td>{{ resultado.grupo_de_atores_Filme || '' }}</td>
                            <td class="resumo-col">{{ resultado.resumo_Filme || '' }}</td>
                        </tr>
                    </tbody>
                </table>
                <p v-else>Nenhum resultado encontrado</p>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { collection, getDocs, query, orderBy, addDoc, deleteDoc, doc, serverTimestamp, startAfter, limit } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { format } from 'date-fns';

export default {
    name: 'HistoricoDeFilmes',
    setup() {
        const historicoPesquisa = ref([]);
        const resultadosPesquisa = ref([]);
        const termoPesquisa = ref('');
        const erro = ref('');
        const carregando = ref(false);
        const ultimoVisivel = ref(null);
        const paginaAtualHistorico = ref(1);
        const paginaAtualTabela = ref(1);
        const itensPorPagina = 3;  // Mostrar apenas três linhas por página

        const procurarHistoricoPesquisa = async () => {
            try {
                const q = query(collection(db, 'db_HistoricoPesquisar'), orderBy('timestamp', 'desc'));
                const querySnapshot = await getDocs(q);
                historicoPesquisa.value = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
            } catch (error) {
                console.error('Erro ao procurar histórico de pesquisas:', error);
            }
        };

        const pesquisarFilme = async (pagina = false) => {
            try {
                carregando.value = true;
                erro.value = '';

                if (!termoPesquisa.value || !termoPesquisa.value.trim()) {
                    erro.value = 'Por favor, insira um termo de pesquisa válido.';
                    carregando.value = false;
                    return;
                }

                const filmesRef = collection(db, 'db_Filmes');
                let filmesQuery;

                if (pagina && ultimoVisivel.value) {
                    filmesQuery = query(filmesRef, orderBy('titulo_Filme'), startAfter(ultimoVisivel.value), limit(10));
                } else {
                    filmesQuery = query(filmesRef, orderBy('titulo_Filme'), limit(10));
                }

                const querySnapshot = await getDocs(filmesQuery);
                ultimoVisivel.value = querySnapshot.docs[querySnapshot.docs.length - 1];
                const todosFilmes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                // Filtrar os resultados no lado do cliente
                if (pagina) {
                    resultadosPesquisa.value = resultadosPesquisa.value.concat(todosFilmes.filter(filme =>
                        filme.titulo_Filme && filme.titulo_Filme.toLowerCase().includes(termoPesquisa.value.toLowerCase())
                    ));
                } else {
                    resultadosPesquisa.value = todosFilmes.filter(filme =>
                        filme.titulo_Filme && filme.titulo_Filme.toLowerCase().includes(termoPesquisa.value.toLowerCase())
                    );
                }

                if (resultadosPesquisa.value.length === 0) {
                    erro.value = 'Nenhum filme encontrado.';
                }

                carregando.value = false;
            } catch (error) {
                console.error('Erro ao pesquisar filmes:', error);
                erro.value = 'Ocorreu um erro ao pesquisar filmes.';
                carregando.value = false;
            }
        };

        const gravarPesquisa = async () => {
            try {
                if (!termoPesquisa.value || !termoPesquisa.value.trim()) {
                    return;
                }

                const historicoRef = collection(db, 'db_HistoricoPesquisar');
                await addDoc(historicoRef, {
                    termo: termoPesquisa.value,
                    timestamp: serverTimestamp()
                });
                console.log('Pesquisa gravada com sucesso.');
            } catch (error) {
                console.error('Erro ao gravar a pesquisa no histórico:', error);
            }
        };

        const apagarPesquisa = async (id) => {
            try {
                await deleteDoc(doc(db, 'db_HistoricoPesquisar', id));
                historicoPesquisa.value = historicoPesquisa.value.filter(historico => historico.id !== id);
                console.log('Pesquisa apagada com sucesso.');
            } catch (error) {
                console.error('Erro ao apagar a pesquisa do histórico:', error);
            }
        };

        const handleClick = (historico) => {
            termoPesquisa.value = historico.termo || '';
            pesquisarFilme(false);
        };

        const FormatoDados = (timestamp) => {
            if (timestamp && timestamp.seconds) {
                const date = new Date(timestamp.seconds * 1000);
                return format(date, 'dd/MM/yyyy HH:mm:ss');
            }
            return ' - ';
        };

        const historicoPaginado = computed(() => {
            const start = (paginaAtualHistorico.value - 1) * itensPorPagina;
            return historicoPesquisa.value.slice(start, start + itensPorPagina);
        });

        const resultadosPaginados = computed(() => {
            const start = (paginaAtualTabela.value - 1) * itensPorPagina;
            return resultadosPesquisa.value.slice(start, start + itensPorPagina);
        });

        const totalPaginasHistorico = computed(() => Math.ceil(historicoPesquisa.value.length / itensPorPagina));
        const totalPaginasTabela = computed(() => Math.ceil(resultadosPesquisa.value.length / itensPorPagina));

        const paginaAnterior = () => {
            if (paginaAtualHistorico.value > 1) {
                paginaAtualHistorico.value--;
            }
        };

        const paginaSeguinte = () => {
            if (paginaAtualHistorico.value < totalPaginasHistorico.value) {
                paginaAtualHistorico.value++;
            }
        };

        const paginaAnteriorTabela = () => {
            if (paginaAtualTabela.value > 1) {
                paginaAtualTabela.value--;
            }
        };

        const paginaSeguinteTabela = () => {
            if (paginaAtualTabela.value < totalPaginasTabela.value) {
                paginaAtualTabela.value++;
            }
        };

        const getCaminhoImagem = (nomeFicheiro) => {
            try {
                return require(`@/assets/imgFilmes/${nomeFicheiro}`);
            } catch (e) {
                return null;
            }
        };

        const imagemExiste = (nomeFicheiro) => {
            try {
                require(`@/assets/imgFilmes/${nomeFicheiro}`);
                return true;
            } catch (e) {
                return false;
            }
        };

        onMounted(() => {
            procurarHistoricoPesquisa();
        });

        return {
            historicoPesquisa,
            resultadosPesquisa,
            termoPesquisa,
            erro,
            carregando,
            ultimoVisivel,
            pesquisarFilme,
            gravarPesquisa,
            apagarPesquisa,
            handleClick,
            FormatoDados,
            historicoPaginado,
            resultadosPaginados,
            paginaAtualHistorico,
            totalPaginasHistorico,
            paginaAnterior,
            paginaSeguinte,
            paginaAtualTabela,
            totalPaginasTabela,
            paginaAnteriorTabela,
            paginaSeguinteTabela,
            getCaminhoImagem,
            imagemExiste
        };
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

.form-card {
    width: 100%;
    max-width: 1400px;
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

.pesquisa-form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.pesquisar-botao {
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
    margin-top: -18px;
}

.pesquisar-botao:hover {
    background-color: #0069d9;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
}

.pesquisar-botao:active {
    background-color: #0056b3;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
}

.paginacao-container-topo {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
}

.paginacao-botao {
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid #007bff;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    margin: 0 5px;
}

.paginacao-botao:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

.paginacao-info {
    display: flex;
    justify-content: center;
    margin-left: 10px;
    font-size: 14px;
}

.tabela-filmes {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    text-align: center;
}

.tabela-filmes th,
.tabela-filmes td {
    border: 1px solid #ddd;
    padding: 8px;
}

.tabela-filmes th {
    background-color: #f2f2f2;
}

.tabela-filmes td.resumo-col {
    text-align: left;
}

.imagem-filme {
    max-width: 100px;
    height: auto;
}

.apagar-botao {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
}

.apagar-botao:hover {
    background-color: #c82333;
}

.apagar-botao:active {
    background-color: #bd2130;
}

.link {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background: #f4f4f4;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li:hover {
    background-color: #e0e0e0;
}
</style>
