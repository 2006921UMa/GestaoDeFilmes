<template>
  <div>
    <div class="imagem-container">
      <img :src="imagemTopo" alt="Imagem Topo" /> <!-- Aqui é imagens no topo -->
    </div>
    <nav id="nav">
      <!-- Menu de navegação -->
      <div class="nav-items">
        <router-link to="/" @click="alterarImagem('imagem1')">Página Inicial</router-link> |
        <router-link to="/Login" @click="alterarImagem('imagem2')">Login</router-link> |
        <router-link to="/RegistarLogin" @click="alterarImagem('imagem3')">Registar</router-link> |
        <router-link to="/Pesquisar" @click="alterarImagem('imagem4')">Pesquisar</router-link> |
        <router-link to="/Sobre" @click="alterarImagem('imagem5')">Sobre</router-link> |
        <router-link to="/Contacto" @click="alterarImagem('imagem6')">Contacto</router-link> |
      </div>
      <div v-if="SessaoEntrada" class="user-info">
        <!-- Adicionando margem direita ao "Entrada Utilizador" -->
        <router-link to="/TelaUtilizador" class="user-link"> Principal Utilizador </router-link> |

        <!-- Componente de perfil do utilizador -->
        <UserProfile v-if="SessaoEntrada" :userName="userName" />

        <!-- Botão de saída com borda vermelha -->
        <button @click="TerminarSessao" class="logout-button">Sair</button> |
        <!-- Estilizando o nome do utilizador -->
        <span class="user-name">Utilizador: {{ userName }} Email: {{ userEmail }}</span>
      </div>
    </nav>
    <!-- Área de visualização do roteador onde os componentes são renderizados com base na rota ativa -->
    <router-view />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'vue-router';

export default {
  setup() {
    const imagemTopo = ref(require("/src/assets/ImgJPG/topo_filmes.jpg"));
    const SessaoEntrada = ref(false);

    const userName = ref('');   // Variável para guardar o nome do utilizador
    const userEmail = ref('');  // Variável para guardar o email do utilizador
    const router = useRouter();

    onMounted(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        SessaoEntrada.value = !!user;
        if (user) {
          // Se o utilizador estiver autenticado, atribua o nome do utilizador e o email à variável userName e userEmail
          userName.value = user.displayName || ''; // Se o nome não estiver disponível, deixe vazio
          userEmail.value = user.email || ''; // Se o email não estiver disponível, deixe vazio
        } else {
          userName.value = ''; // Limpe o nome do utilizador se não estiver autenticado
          userEmail.value = ''; // Limpe o email do utilizador se não estiver autenticado
        }
      });
    });

    const user = getAuth().currentUser;
    if (user) {
      const email = user.email;
      console.log(email); // Aqui você pode usar o email como desejar
    } else {
      console.log("Nenhum usuário autenticado");
    }

    const alterarImagem = (imagem) => {
      if (imagem === 'imagem1') {
        imagemTopo.value = require("../src/assets/ImgJPG/topo_filmes.jpg");
      } else if (imagem === 'imagem2') {
        imagemTopo.value = require("../src/assets/ImgJPG/topo_filmes_A.jpg");
      } else if (imagem === 'imagem3') {
        imagemTopo.value = require("../src/assets/ImgJPG/topo_filmes_B.jpg");
      } else if (imagem === 'imagem4') {
        imagemTopo.value = require("../src/assets/ImgJPG/topo_filmes_C.jpg");
      } else if (imagem === 'imagem5') {
        imagemTopo.value = require("../src/assets/ImgJPG/topo_filmes_D.jpg");
      } else if (imagem === 'imagem6') {
        imagemTopo.value = require("../src/assets/ImgJPG/topo_filmes_E.jpg");
      }
    };

    const TerminarSessao = () => {
      const auth = getAuth();
      signOut(auth).then(() => {
        router.push("/");
      }).catch((error) => {
        console.error("Erro ao sair:", error);
      });
    };

    return { imagemTopo, SessaoEntrada, userName, userEmail, alterarImagem, TerminarSessao };
  }
};
</script>

<style scoped>
/* Estilize o caixa da imagem */
.imagem-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  /* A imagem não ultrapasse os limites da caixa */
}

/* Estilize a imagem dentro da caixa */
.imagem-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Redimensiona a imagem para preencher o caixa sem distorção */
}

#nav {
  padding: 30px;
  display: table-row;
  justify-content: space-between;
  align-items: center;
}

.nav-items {
  display: flex;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
  margin-left: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.user-name {
  color: #000000;
  font-weight: bold;
  border: 2px solid rgb(17, 121, 72);
  padding: 0px 20px;
  font-family: 'Arial Black', Gadget, sans-serif;
  border-radius: 15px;
}

.logout-button {
  border: none;
  border-radius: 20px;
  padding: 1px 16px;
  background-color: rgb(7, 190, 77);
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #1AAB8A;
  /* Altera a cor de fundo ao passar o mouse */
}
</style>

