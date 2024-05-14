<template>
    <div class="register-container">
        <h2>Registo de Utilizador</h2>
        <form @submit.prevent="registerUser">
            <div class="form-group">
                <label for="username">Nome de Utilizador:</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Registar</button>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            errorMessage: ''
        };
    },
    methods: {
        registerUser() {
            const userData = {
                username: this.username,
                email: this.email,
                password: this.password
            };

            axios.post('URL_PARA_O_BACKEND/register', userData)
                .then(response => {
                    // Lidar com a resposta do servidor após o registo bem-sucedido
                    console.log(response.data);
                })
                .catch(error => {
                    // Lidar com erros durante o registo
                    this.errorMessage = error.response.data.message;
                    console.error('Erro de registo:', error);
                });
        }
    }
};
</script>

<style scoped>
/* Estilos específicos do componente Register.vue */
.register-container {
    max-width: 400px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 1rem;
}

.error-message {
    color: red;
}
</style>
