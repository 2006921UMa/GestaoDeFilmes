<template>
    <div class="add-container">
        <h3>Adicionar Novo Utilizador</h3>
        <form @submit.prevent="addUtilizador">
            <input v-model="utilizador.Login_Utilz" placeholder="Login" />
            <input v-model="utilizador.Email_Utilz" placeholder="Email" />
            <input v-model="utilizador.Password_Utilz" placeholder="Password" />
            <input v-model="utilizador.DataNascimento_Utilz" placeholder="Data de Nascimento" />
            <input v-model="utilizador.Foto_Utilz" placeholder="Caminho da Foto" />
            <button type="submit">Adicionar</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig.js';

export default {
    name: 'AdicionarUtilizador',
    setup() {
        const utilizador = ref({
            Login_Utilz: '',
            Email_Utilz: '',
            Password_Utilz: '',
            DataNascimento_Utilz: '',
            Foto_Utilz: ''
        });

        const addUtilizador = async () => {
            try {
                await addDoc(collection(db, 'db_Utilizador'), utilizador.value);
                alert('Utilizador adicionado com sucesso!');
                utilizador.value = { Login_Utilz: '', Email_Utilz: '', Password_Utilz: '', DataNascimento_Utilz: '', Foto_Utilz: '' };
            } catch (error) {
                console.error('Erro ao adicionar utilizador: ', error);
            }
        };

        return { utilizador, addUtilizador };
    }
}
</script>

<style scoped>
.add-container {
    padding: 20px;
}

input {
    display: block;
    margin-bottom: 10px;
    padding: 10px;
}

button {
    padding: 10px;
}
</style>
