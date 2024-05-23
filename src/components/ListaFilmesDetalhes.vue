<template>
    <div class="form-card">
        <h3 class="header-text">{{ filme ? 'Editar Filme' : 'Adicionar Novo Filme' }}</h3>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="titulo">Título</label>
                <input type="text" class="form-control" id="titulo" v-model="form.titulo" required>
            </div>
            <div class="form-group">
                <label for="PaginaLink">Página Link</label>
                <input type="url" class="form-control long-input" id="PaginaLink" v-model="form.PaginaLink" required>
            </div>
            <div class="form-group">
                <label for="descricao">Descrição</label>
                <textarea class="form-control large-textarea" id="descricao" v-model="form.descricao"
                    required></textarea>
            </div>
            <div class="form-group">
                <label for="publicado">Publicado</label>
                <input type="checkbox" id="publicado" v-model="form.publicado">
            </div>
            <div class="buttons">
                <button type="submit" class="btn btn-primary mt-3 submit-button">{{ filme ? 'Atualizar' : 'Adicionar'
                    }}</button>
                <button type="button" class="btn btn-primary mt-3 submit-button" @click="onSubmit">Gravar</button>
                <button type="button" class="btn btn-secondary mt-3 submit-button" @click="novoFilme">+ Novo</button>
                <button type="button" class="btn btn-danger mt-3 submit-button" v-if="filme"
                    @click="confirmarExclusao">Excluir</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "ListaFilmesDetalhes",
    props: {
        filme: Object,
    },
    data() {
        return {
            form: {
                titulo: '',
                PaginaLink: '',
                descricao: '',
                publicado: false
            }
        };
    },
    watch: {
        filme: {
            immediate: true,
            handler(newVal) {
                if (newVal) {
                    this.form = { ...newVal };
                } else {
                    this.resetForm();
                }
            }
        }
    },
    methods: {
        onSubmit() {
            if (this.filme) {
                this.$emit('atualizarFilme', { ...this.form });
            } else {
                this.$emit('adicionarFilme', this.form);
            }
        },
        confirmarExclusao() {
            if (confirm("Tem certeza de que deseja excluir este filme?")) {
                this.$emit('excluirFilme', this.filme);
            }
        },
        novoFilme() {
            this.resetForm();
        },
        resetForm() {
            this.form = {
                titulo: '',
                PaginaLink: '',
                descricao: '',
                publicado: false
            };
        }
    }
};
</script>

<style scoped>
.form-card {
    width: 1400px;
    max-width: 100%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    background-color: white;
    margin-left: 10px;
}

.header-text {
    font-family: 'Pacifico', cursive;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 1rem;
}

.form-control.long-input {
    width: 100%;
}

.form-control.large-textarea {
    width: 100%;
    height: 150px;
}

.buttons {
    display: flex;
    flex-wrap: wrap;
    /* Garantir que os botões se ajustem ao espaço disponível */
    justify-content: space-between;
    gap: 10px;
    /* Espaçamento entre os botões */
}

.submit-button {
    flex: 1 1 auto;
    /* Ajuste flexível dos botões */
    height: 60px;
    border-radius: 30px;
    /* Botão mais oval */
    background-color: #28a745;
    color: white;
    font-size: 20px;
    text-align: center;
    line-height: 60px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    border: none;
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

.btn-secondary.submit-button {
    background-color: #007bff;
    /* Azul para o botão "Novo" */
}

.btn-secondary.submit-button:hover {
    background-color: #0069d9;
}
</style>



