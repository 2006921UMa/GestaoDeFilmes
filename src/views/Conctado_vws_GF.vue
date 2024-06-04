<template>
    <div class="caixa-principal">
        <div class="caixa-contacto mx-auto">
            <div class="app-avancado p-10" style="background-color: #60A5FA">
                <br><br>
                <div>
                    <img alt="Logotipo contacto" src="../assets/ImgPNG/email_enviar_cores.png"
                        style="width: 150px; height: 150px;" />
                </div>

                <h1 class="text-4xl font-bold text-center text-gray-800 mb-5 shadow-lg">Entrar em Contato</h1>
                <form @submit.prevent="handleSubmit" class="w-1/2 mx-auto mt-5">
                    <div class="mb-3 pt-0">
                        <input type="text" placeholder="O seu nome" v-model="form.nome" class="input-estilo" required />
                    </div>
                    <div class="mb-3 pt-0">
                        <input type="email" placeholder="Email" v-model="form.email" class="input-estilo" required />
                    </div>
                    <br>
                    <div class="mb-3 pt-0">
                        <textarea placeholder="A sua mensagem" v-model="form.MsgContacto" class="input-estilo" required
                            style="height: 120px;"></textarea>
                    </div>

                    <div class="mb-3 pt-0">
                        <button type="submit" class="botao-estilo">Enviar mensagem</button>
                    </div>
                </form>
                <div v-if="submitted" class="text-center mt-10">
                    <h2 class="text-2xl">Obrigado!</h2>
                    <div class="text-md">Entraremos em contato em breve.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '../firebase/firebaseConfig'; // Nota: Convem certifique-se de que está a importar corretamente a configuração do Firestore
import { collection, addDoc } from 'firebase/firestore'; // Importar funções do Firestore

export default {
    name: "FormularioDeContato",
    data() {
        return {
            form: {
                nome: '',
                email: '',
                MsgContacto: ''
            },
            submitted: false
        };
    },
    methods: {
        async handleSubmit() {
            try {
                await addDoc(collection(db, 'db_msgContacto'), this.form); // Adicionar documento à coleção db_msgContacto no Firestore
                this.submitted = true;
                this.form = { nome: '', email: '', MsgContacto: '' }; // Redefinir formulário após envio
                alert("Mensagem enviada com sucesso!");
            } catch (error) {
                console.error("Erro ao adicionar documento: ", error);
                alert("Erro ao enviar mensagem: " + error.message);
            }
        },
    }
};
</script>

<style scoped>
.caixa-principal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
}

.caixa-contacto {
    border: 2px solid #3b82f6;
    border-radius: 10px;
    margin-top: 40px;
    padding: 5px;
    width: 30%;
    max-width: 800px;
}

.input-estilo {
    padding: 12px 12px;
    placeholder-color: #83a1c0;
    text-color: #4b5563;
    background: white;
    border-radius: 0.375rem;
    border: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    outline: none;
    focus: outline-none;
    focus: ring;
    width: 65%;
}

.botao-estilo {
    background-color: #3b82f6;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    padding: 6px 4px;
    border-radius: 0.375rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
    outline: none;
    focus: outline-none;
    margin-right: 4px;
    margin-top: 30px;
    margin-bottom: 30px;
    transition: all 0.15s ease-in-out;
}
</style>
