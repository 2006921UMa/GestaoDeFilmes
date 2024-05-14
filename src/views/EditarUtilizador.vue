<template>
    <div class="container">
        <div class="card card-body form-card">
            <h3 class="header-text">Actualização Utilizador</h3>
            <form @submit.prevent="update">
                <div class="form-group">
                    <label>Nome Completo</label>
                    <input v-model="form.name" class="form-control" required />
                </div>

                <div class="form-group mt-3">
                    <label>Email</label>
                    <input v-model="form.email" class="form-control" type="email" required />
                </div>

                <button type="submit" class="btn submit-button mt-3">
                    Actualizar
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getUser, updateUser } from '../firebase/FBase.js';

export default {
    setup() {
        const router = useRouter();
        const route = useRoute();
        const userId = computed(() => route.params.id);  /* rota  parâmetro -> userId (Inglês) */

        const form = reactive({ name: '', email: '' });
        onMounted(async () => {
            const user = await getUser(userId.value);
            console.log(user, userId.value);
            form.name = user.name;
            form.email = user.email;
        });

        const update = async () => {
            await updateUser(userId.value, { ...form });
            router.push('/PrincipalUtilizador');  /* Salta para TelaUtilizador */
            form.name = '';
            form.email = '';
        };

        return { form, update };
    }
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 33vh;                       /* Altura total da janela de visualização */
    background-color: #f0f2f5;    /* Cor de fundo da página */
    padding: 20px;
}

.form-card {
    width: 100%;
    max-width: 600px;
    /* Largura máxima da caixa */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
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

.submit-button {
    display: inline-block;
    width: 130px;
    height: 45px;
    border-radius: 50%;
    background-color: #007bff;
    color: white;
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    border: none;
}

.submit-button:hover {
    background-color: #0056b3;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
}

.submit-button:active {
    background-color: #004494;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
}
</style>
