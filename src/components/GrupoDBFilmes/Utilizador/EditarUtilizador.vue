<template>
    <div class="edit-container" v-if="utilizador">
        <h3>Editar Utilizador</h3>
        <form @submit.prevent="updateUtilizador">
            <input v-model="utilizador.Login_Utilz" placeholder="Login" />
            <input v-model="utilizador.Email_Utilz" placeholder="Email" />
            <input v-model="utilizador.Password_Utilz" placeholder="Password" />
            <input v-model="utilizador.DataNascimento_Utilz" placeholder="Data de Nascimento" />
            <input v-model="utilizador.Foto_Utilz" placeholder="Caminho da Foto" />
            <button type="submit">Atualizar</button>
        </form>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig.js';
import { useRoute } from 'vue-router';

export default {
    name: 'EditarUtilizador',
    setup() {
        const route = useRoute();
        const utilizador = ref(null);

        const fetchUtilizador = async (id) => {
            const docRef = doc(db, 'db_Utilizador', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                utilizador.value = { ...docSnap.data(), id: docSnap.id };
            } else {
                console.log('No such document!');
            }
        };

        const updateUtilizador = async () => {
            try {
                const docRef = doc(db, 'db_Utilizador', utilizador.value.id);
                await updateDoc(docRef, {
                    Login_Utilz: utilizador.value.Login_Utilz,
                    Email_Utilz: utilizador.value.Email_Utilz,
                    Password_Utilz: utilizador.value.Password_Utilz,
                    DataNascimento_Utilz: utilizador.value.DataNascimento_Utilz,
                    Foto_Utilz: utilizador.value.Foto_Utilz
                });
                alert('Utilizador atualizado com sucesso!');
            } catch (error) {
                console.error('Erro ao atualizar utilizador: ', error);
            }
        };

        onMounted(() => {
            fetchUtilizador(route.params.id);
        });

        return { utilizador, updateUtilizador };
    }
}
</script>

<style scoped>
.edit-container {
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
