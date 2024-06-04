<template>
    <div class="box">
        <div class="Titulo_UMA">
            <h1> Universidade da Madeira</h1>
            <h3> (UC: Front-End)</h3>
            <br>
            <h2 ali>Login UMa.pt</h2>
        </div>
        <div class="form">
            <br><br><br>
            <form @submit.prevent="registar">
                <div class="EntradaCaixa">
                    <input type="text" placeholder="E-mail: exemplo@mail.com" v-model="email"
                        autocomplete="current-password">
                </div>
                <div class="EntradaCaixa">
                    <input type="password" placeholder="Palavra-passe" v-model="password"
                        autocomplete="current-password">
                </div>
                <button class="entrarBtn" type="submit">Entrar</button>
                <br>
                <button class="googleBtn" @click="entrarComGoogle">Entrar com o Google</button>
            </form>
            <div class="errMsgContainer">
                <p class="errMsg" v-if="errMsg">{{ errMsg }}</p>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const email = ref("");
const password = ref("");
const errMsg = ref("");

const auth = getAuth();

import { useRouter } from 'vue-router';
const router = useRouter();

const registar = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            console.log("Autenticação bem-sucedida!");
            router.push('/TelaUtilizador');
        })
        .catch((error) => {
            console.error(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "E-mail inválido";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "Não existe uma conta com esse e-mail";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Palavra-passe incorreta";
                    break;
                default:
                    errMsg.value = "E-mail ou palavra-passe incorretos";
                    break;
            }
        });
};

const entrarComGoogle = () => {
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

.Titulo_UMA {
    text-align: left;
    color: white;
    text-shadow: 2px 2px 4px rgba(25, 32, 133, 0.5);
}

.Titulo_UMA h2 {
    text-align: center;
}

.Titulo_UMA h4 {
    margin: 0;
}


.btnContainer {
    height: 80px;
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
    /* Adicionando largura 100% para manter a consistência */
    box-sizing: border-box;
    /* Mantém a largura do botão consistente com o padding */
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

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

.errMsg {
    color: white !important;
    text-align: center;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
}

.box {
    padding: 20px;
    width: 500px;
    height: 500px;
    background: rgba(16, 8, 85, 0.37);
    background: url("/src/assets/ImgJPG/ImgensFundo_B.jpg") no-repeat center center/cover;
    border-radius: 10px;
    border: 1px solid rgb(253, 242, 242);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -5%);
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

.EntradaCaixa input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    background: none;
    border-bottom: 2px solid #ebe5e5;
    color: #fff;
    font-size: 16px;
}

.errMsgContainer {
    padding: 10px;
    border-radius: 10px;
    margin-top: 1px;
}

.errMsg {
  
    color: #d6cbcb;
    text-align: center;
    margin: 0;  
}
</style>

