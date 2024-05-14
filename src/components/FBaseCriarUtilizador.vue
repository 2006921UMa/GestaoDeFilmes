<template>
    <div class="container">
        <div class="card card-body form-card">
            <h3 class="header-text">Criar Novos Utilizadores</h3>
            <form @submit.prevent="onSubmit">
                <div class="form-group">
                    <label>Nome Completo</label>
                    <input v-model="form.name" class="form-control" required />
                </div>

                <div class="form-group mt-3">
                    <label>Email</label>
                    <input v-model="form.email" class="form-control" type="email" required />
                </div>

                <button type="submit" class="btn btn-success mt-3 submit-button">
                    Criar
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import { createUser } from '../firebase/FBase.js'; // Certifique-se de importar a função correta

export default {
    setup() {
        const form = reactive({ name: '', email: '' });

        const onSubmit = async () => {
            await createUser({ ...form });
            form.name = '';
            form.email = '';
        };

        return { form, onSubmit };
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 33vh;       /* Altura total da janela de visualização */
    padding: 0 10px;    /* Reduz espaço nas laterais */
}

.form-card {
    width: 100%;
    max-width: 520px;
    /* Largura máxima da caixa */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    background-color: white;
}

.header-text {
    font-family: 'Pacifico', cursive;
    /* Fonte estilizada */
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.submit-button {
    display: inline-block;
    width: 120px;
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
</style>

