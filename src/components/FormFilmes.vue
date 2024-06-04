<template>
    <div :class="{ 'dark-mode': isDarkMode }" class="formulario-cartao">
        <h2 class="texto-cabecalho">Lista de Filmes</h2>
        <button @click="toggleDarkMode" class="botao-dark-mode">
            Alternar Modo {{ isDarkMode ? 'Claro' : 'Escuro' }}
        </button>
        <table class="tabela-formulario">
            <thead>
                <tr>
                    <!-- Tamanho largura coluna - Zona novos dados-->
                    <th style="width: 15%;">Título</th>
                    <th style="width: 15%;">Diretor</th>
                    <th style="width: 5%;">Ano</th>
                    <th style="width: 25%;">Grupo de Atores</th>
                    <th style="width: 15%;">Nome da Imagem</th>
                    <th style="width: 15%;">Caminho da Imagem</th>
                    <th style="width: 7%;">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input class="formulario-controle entrada-longa" v-model="novoFilme.titulo_Filme"
                            placeholder="Título" /></td>
                    <td><input class="formulario-controle entrada-longa" v-model="novoFilme.diretor_Filme"
                            placeholder="Diretor" /></td>
                    <td><input class="formulario-controle entrada-curta" v-model="novoFilme.ano_Lancamento_Filme"
                            type="number" placeholder="Ano" /></td>
                    <td><input class="formulario-controle entrada-longa" v-model="novoFilme.grupo_de_atores_Filme"
                            placeholder="Grupo de Atores" /></td>
                    <td><input class="formulario-controle entrada-longa" v-model="novoFilme.ImgNomeFich_Filme"
                            placeholder="Nome da Imagem" /></td>
                    <td><input class="formulario-controle entrada-longa" v-model="novoFilme.ImagemCaminho_Filme"
                            placeholder="Caminho da Imagem" /></td>
                    <td class="botoes">
                        <button class="botao-submit btn-primario" @click="addFilme">Criar</button>
                    </td>
                </tr>
                <tr>
                    <td colspan="7">
                        <textarea class="formulario-controle textarea-pequena" v-model="novoFilme.resumo_Filme"
                            placeholder="Resumo"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="paginacao">
            <button @click="paginaAnterior" :disabled="paginaAtual === 1">Anterior</button>
            <span>Página {{ paginaAtual }} de {{ totalPaginas }}</span>
            <button @click="paginaSeguinte" :disabled="paginaAtual === totalPaginas">Seguinte</button>
        </div>
        <table class="tabela-formulario">
            <thead>
                <tr>
                    <!-- Tamanho largura coluna -->
                    <th style="width: 15%;">Título</th>
                    <th style="width: 15%;">Diretor</th>
                    <th style="width: 5%;">Ano</th>
                    <th style="width: 20%;">Grupo de Atores</th>
                    <th style="width: 10%;">Nome da Imagem</th>
                    <th style="width: 15%;">Caminho da Imagem</th>
                    <th style="width: 8%;">Ações</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(filme, index) in filmesPaginados" :key="filme.id_Filme">
                    <tr v-if="index < 3">
                        <td><input class="formulario-controle entrada-longa" v-model="filme.titulo_Filme" /></td>
                        <td><input class="formulario-controle entrada-longa" v-model="filme.diretor_Filme" /></td>
                        <td><input class="formulario-controle entrada-curta" v-model="filme.ano_Lancamento_Filme"
                                type="number" /></td>
                        <td><input class="formulario-controle entrada-longa" v-model="filme.grupo_de_atores_Filme" />
                        </td>
                        <td><input class="formulario-controle entrada-longa" v-model="filme.ImgNomeFich_Filme" /></td>
                        <td><input class="formulario-controle entrada-longa" v-model="filme.ImagemCaminho_Filme" /></td>
                        <td class="botoes">
                            <button class="botao-submit btn-primario" @click="updateFilme(filme)">Editar</button>
                            <button class="botao-submit btn-vermelho"
                                @click="deleteFilme(filme.id_Filme)">Apagar</button>
                        </td>
                    </tr>
                    <tr v-if="index < 3">
                        <td colspan="7">
                            <textarea class="formulario-controle textarea-pequena"
                                v-model="filme.resumo_Filme"></textarea>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export default {
    data() {
        return {
            filmes: [],
            novoFilme: {
                titulo_Filme: '',
                diretor_Filme: '',
                ano_Lancamento_Filme: '',
                grupo_de_atores_Filme: '',
                resumo_Filme: '',
                ImgNomeFich_Filme: '',
                ImagemCaminho_Filme: ''
            },
            paginaAtual: 1,
            itensPorPagina: 3,
            isDarkMode: false
        };
    },
    computed: {
        totalPaginas() {
            return Math.ceil(this.filmes.length / this.itensPorPagina);
        },
        filmesPaginados() {
            const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
            return this.filmes.slice(inicio, inicio + this.itensPorPagina);
        }
    },
    methods: {
        async fetchFilmes() {
            const querySnapshot = await getDocs(collection(db, 'db_Filmes'));
            this.filmes = querySnapshot.docs.map(doc => ({ ...doc.data(), id_Filme: doc.id }));
        },
        async addFilme() {
            await addDoc(collection(db, 'db_Filmes'), this.novoFilme);
            this.fetchFilmes();
            this.resetNovoFilme();
        },
        async updateFilme(filme) {
            const filmeRef = doc(db, 'db_Filmes', filme.id_Filme);
            await updateDoc(filmeRef, filme);
            alert('Filme atualizado com sucesso!');
        },
        async deleteFilme(id_Filme) {
            await deleteDoc(doc(db, 'db_Filmes', id_Filme));
            this.fetchFilmes();
            alert('Filme apagado com sucesso!');
        },
        resetNovoFilme() {
            this.novoFilme = {
                titulo_Filme: '',
                diretor_Filme: '',
                ano_Lancamento_Filme: '',
                grupo_de_atores_Filme: '',
                resumo_Filme: '',
                ImgNomeFich_Filme: '',
                ImagemCaminho_Filme: ''
            };
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
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
        }
    },
    mounted() {
        this.fetchFilmes();
    }
};
</script>

<style scoped>
.formulario-cartao {
    width: 80%;
    max-width: 100%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    background-color: white;
    margin: 0 auto;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.formulario-cartao.dark-mode {
    background-color: #333;
    color: #fff;
}

.texto-cabecalho {
    font-family: 'Pacifico', cursive;
    font-size: 24px;
    color: inherit;
    margin-bottom: 20px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.tabela-formulario {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px;
    margin-bottom: 20px;
}

.formulario-controle.entrada-longa {
    width: calc(100% - 10px);
    margin-right: 10px;
}

.formulario-controle.entrada-curta {
    width: 8ch;
}

.formulario-controle.textarea-pequena {
    width: 100%;
    height: 40px;
}

.botoes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
}

.botao-submit {
    flex: 1 1 auto;
    height: 40px;
    border-radius: 20px;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    border: none;
    padding: 0 10px;
}

.botao-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

.botao-submit:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.btn-primario {
    background-color: #28a745;
    color: white;
}

.btn-primario:hover {
    background-color: #218838;
}

.btn-primario:active {
    background-color: #1e7e34;
}

.btn-secundario {
    background-color: #007bff;
    color: white;
}

.btn-secundario:hover {
    background-color: #0069d9;
}

.btn-vermelho {
    background-color: #dc3545;
    color: white;
}

.btn-vermelho:hover {
    background-color: #c82333;
}

.btn-vermelho:active {
    background-color: #bd2130;
}

.botao-dark-mode {
    margin-bottom: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #333;
    color: white;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.botao-dark-mode:hover {
    background-color: #555;
}

.paginacao {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.paginacao button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.paginacao button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}

.paginacao span {
    margin: 0 10px;
    font-size: 16px;
}
</style>
