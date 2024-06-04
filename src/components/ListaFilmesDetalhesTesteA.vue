<template>
    <div class="detalhes-filme">
        <h3>{{ filme ? 'Editar Filme' : 'Adicionar Novo Filme' }}</h3>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="titulo">Título</label>
                <input type="text" class="form-control" id="titulo" v-model="form.titulo" required>
            </div>
            <div class="form-group">
                <label for="PaginaLink">Página Link</label>
                <input type="url" class="form-control" id="PaginaLink" v-model="form.PaginaLink" required>
            </div>
            <div class="form-group">
                <label for="descricao">Descrição</label>
                <textarea class="form-control" id="descricao" v-model="form.descricao" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary mt-3">{{ filme ? 'Atualizar' : 'Adicionar' }}</button>
            <button type="button" class="btn btn-danger mt-3" v-if="filme" @click="confirmarExclusao">Excluir</button>
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
                descricao: ''
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
                this.$emit('atualizarFilme', { ...this.form, id: this.filme.id });
            } else {
                this.$emit('adicionarFilme', this.form);
            }
        },
        confirmarExclusao() {
            if (confirm("Tem certeza de que deseja excluir este filme?")) {
                this.$emit('excluirFilme', this.filme);
            }
        },
        resetForm() {
            this.form = {
                titulo: '',
                PaginaLink: '',
                descricao: ''
            };
        }
    }
};
</script>

<style scoped>
.detalhes-filme {
    margin-top: 20px;
}

.form-group {
    margin-bottom: 1rem;
}

.buttons {
    display: flex;
    flex-direction: column;
}

.buttons button {
    margin-bottom: 10px;
}
</style>




