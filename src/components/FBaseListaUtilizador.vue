<template>
    <div class="container">
        <div class="card card-body form-card">
            <h3 class="header-text">Lista de Utilizadores <br> {{ '|' }} Por via Firebase {{ '|' }} </h3>
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
                            <router-link :to="{ name: 'EditarUtilizador', params: { id: id } }">
                                <!-- <router-link :to="`/TelaUtilizador/EditarUtilizador/${id}`"> -->
                                <button class="btn btn-primary btn-sm me-2"> Editar </button>
                            </router-link>
                            <button class="btn btn-danger btn-sm" @click="deleteUser(id)"> Apagar </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="button-container">
                <router-link to="/TelaUtilizador/FBaseCriarUtilizador">
                    <button class="btn submit-button">
                        +Adicionar
                    </button>
                </router-link>
                <button class="btn refresh-button" @click="refreshUsers">
                    Refrescar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useLoadUsers, deleteUser } from '../firebase/FBase.js';

export default {
    setup() {
        const users = ref([]);

        const loadUsers = async () => {
            users.value = await useLoadUsers();
        };

        onMounted(() => {
            loadUsers();
        });

        const refreshUsers = async () => {
            await loadUsers();
        };

        return { users, deleteUser, refreshUsers };
    }
}
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
    max-width: 820px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 35px;
    background-color: white;
    text-align: left;
}

.header-text {
    font-family: 'Pacifico', cursive;
    text-align: center;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.table {
    margin-bottom: 20px;
}

.button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
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

.refresh-button {
    display: inline-block;
    width: 130px;
    height: 70px;
    border-radius: 50%;
    background-color: #007bff;
    color: white;
    font-size: 20px;
    text-align: center;
    line-height: 60px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    border: none;
    margin-left: 10px;
}

.refresh-button:hover {
    background-color: #0069d9;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
}

.refresh-button:active {
    background-color: #0056b3;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
}
</style>
