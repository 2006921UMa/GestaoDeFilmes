<template>
    <div class="container">
        <div class="card card-body form-card">
            <h3 class="header-text">Lista de Utilizadores</h3>
            <table class="table m-0">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Operação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="{ id, name, email } in users" :key="id">
                        <td>{{ name }}</td>
                        <td>{{ email }}</td>
                        <td>
                            <router-link :to="`/EditarUtilizador/${id}`">   <!-- lembro-me o teste do Professor David Jardim -->
                                <button class="btn btn-primary btn-sm me-2">
                                    Edit
                                </button>
                            </router-link>
                            <button class="btn btn-danger btn-sm" @click="deleteUser(id)">
                                Apagar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button class="btn submit-button" @click="onSubmit">
                + Adicionar
            </button>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useLoadUsers, deleteUser } from '../firebase/FBase.js';

export default {
    setup() {
        const users = ref([]);

        onMounted(async () => {
            users.value = await useLoadUsers();
        });

        const onSubmit = () => {
            // Função para adicionar um novo utilizador
        };

        return { users, deleteUser, onSubmit };
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    /* Altura total da janela de visualização */
    background-color: #f0f2f5;
    /* Cor de fundo da página */
    padding: 0px;
}

.form-card {
    width: 100%;
    max-width: 820px;
    /* Aumente a largura máxima da caixa */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 15px;
    background-color: white;
    text-align: center;
}

.header-text {
    font-family: 'Pacifico', cursive;
    /* Fonte estilizada */
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.table {
    margin-bottom: 20px;
}

.submit-button {
    display: inline-block;
    width: 130px;
    height: 70px;
    border-radius: 50%;
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
