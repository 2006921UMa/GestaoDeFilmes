<template>
    <div class="caixaPrincipal">
        <div class="contact-box mx-auto">
            <div class="app-advanced p-10" style="background-color: #60A5FA">
                <br><br>
                <div>
                    <img alt=" Logotipo contacto" src="../assets/ImgPNG/email_enviar_cores.png"
                        style="width: 150px; height: 150px;" />
                </div>

                <h1 class="text-4xl font-bold text-center text-gray-800 mb-5 shadow-lg">Entrar em Contato</h1>
                <form @submit.prevent="handleSubmit" class="w-1/2 mx-auto mt-5">
                    <div class="mb-3 pt-0">
                        <input type="text" placeholder="O seu nome" v-model="form.name" class="input-style" required />
                    </div>
                    <div class="mb-3 pt-0">
                        <input type="email" placeholder="Email" v-model="form.email" class="input-style" required />
                    </div>
                    <br>
                    <div class="mb-3 pt-0">
                        <textarea placeholder="A sua mensagem" v-model="form.message" class="input-style" required
                            style="height: 120px;"></textarea>
                    </div>

                    <div class="mb-3 pt-0">
                        <button type="submit" class="button-style">Enviar mensagem</button>
                    </div>
                </form>
                <div v-if="submitted" class="text-center mt-10">
                    <h2 class="text-2xl">Obrigado!</h2>
                    <div class="text-md">Entraremos em contacto em breve.</div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>

// Para garantir o diretório => Caminho absoluto (sem problema)
// Perdi muitos dias por causa ../ ou ./ ou " @/ = src/ , até tive configurar *.ts e *.js , *.js foi o melhor resol. problem.
import { db } from 'C:/TPSI/1_Ano_2_Semestre/DevWebFrontEnd_EduardoTeles/ProjectoEntregarAte14Maio/gestaodefilmes/src/firebase/firebaseConctado.js';
import { ref, set } from 'firebase/database';

// Nota: É preciso ter cuidado com nomes, porque firebase tem biblioteca reservado -> nomes próprios

export default {
    name: "ContactForm",
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            },
            submitted: false
        };
    },
    methods: {
        async handleSubmit() {
            try {
                await set(ref(db, 'messages/' + this.form.name), this.form);
                this.submitted = true;
                this.form = { name: '', email: '', message: '' }; // Redefinir formulário após envio
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

.caixaPrincipal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
}


.contact-box {
        border: 2px solid #3b82f6;
        border-radius: 10px;
        margin-top: 40px;
        padding: 5px;
        width: 30%;
        max-width: 800px;
    }


.input-style {
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

.button-style {
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
