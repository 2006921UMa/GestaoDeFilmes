<template>
    <div class="box">
        <div class="form">
            <h2>Registar Novo Utilizador</h2>
            <h2>UMa.pt</h2><br>
            <h4>(UC: Front-End)</h4>
            <h4>(Universidade da Madeira)</h4>
            <form @submit.prevent="registrarUtilizador">
                <!-- Campo de entrada para e-mail do utilizador com autocomplete -->
                <div class="inputbox">
                    <input type="email" placeholder="Email" v-model="email" autocomplete="email"
                        value="teste@example.com">
                </div>
                <!-- Campo de entrada para senha do utilizador com autocomplete -->
                <div class="inputbox">
                    <input type="password" placeholder="Crie uma palavra-passe" v-model="newPassword" autocomplete="new-password">
                </div>
                <!-- Botões para enviar dados de registro e login com Google -->
                <button class="sub entrarBtn" type="submit">Enviar</button>
                <button class="googleBtn" @click="signInWithGoogle">Entrar com o Google</button>
            </form>
            <!-- <div class="errMsgContainer">
                <p class="errMsg" v-if="errMsg">{{ errMsg }}</p>
            </div> -->
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const email = ref('');
const newPassword = ref('');
const errMsg = ref('');

const auth = getAuth();
const router = useRouter();

const registrarUtilizador = async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, newPassword.value);
        console.log("Registo efetuado com sucesso! Bem-vindo, " + userCredential.user.email);
        router.push('/TelaUtilizador'); // Redirecionamento para a página do utilizador após sucesso no registro
    } catch (error) {
        errMsg.value = "Erro ao registrar: " + error.message;
        console.error("Erro ao registrar:", error);
    }
};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("Login com Google bem-sucedido, Utilizador:", result.user);
            router.push("/TelaUtilizador");
        })
        .catch((error) => {
            console.error("Erro no login com Google:", error.message);
            errMsg.value = "Falha ao entrar com Google: " + error.message;
        });
};
</script>


<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
   
}

.box {
    padding: 20px;
    width: 500px;
    height: 500px;
    background: rgba(16, 8, 85, 0.37);
    min-height: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("/src/assets/ImgPNG/Azul_Fundo_Registar.png") no-repeat center center/cover;
    background-size: cover;
    /* background-size: 80%; */
    background-repeat: no-repeat;
    border-radius: 10px;
    border: 1px solid rgb(253, 242, 242);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, +10%);
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form h2,
.form h4 {
    text-align: center;
    color: #fff;
    margin-bottom: 10px;
}

.inputbox input {
    width: 100%;
    padding: 10px 20px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    background: none;
    border-bottom: 2px solid #ebe5e5;
    color: #fff;
    font-size: 16px;
}

/* Estilo para a mensagem de erro */
.errMsgContainer {
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.5);
}

.errMsg {
    color: white;
    text-align: center;
    margin: 0;
}

.entrarBtn,
.googleBtn {
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
}

.entrarBtn {
    background-color: #007bff;
    color: #fff;
}

.googleBtn {
    background-color: #dd4b39;
    color: #fff;
}

.entrarBtn:hover,
.googleBtn:hover {
    background-color: #0056b3;
}
</style>
