
/*
##################################
#                                #
#           Zona Rota            #
#        (link estático)         #
#                                #
#  >> importa os dados, depois   # 
#     salta para caminho interno #
#                                #  
# Data: 08/05/2024               #
# Ficheiro:  index.js            #
#                                #
################################## */
import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Vistas
import Error404 from '../views/Erro404_vws_GF.vue';
import PaginaInicial from '../views/PrincipalSite_vws_GF.vue';
import Login from '../views/Login_vws_GF.vue';
import RegistarLogin from '../views/Registrar_vws_GF.vue';
import Pesquisar from '../views/Pesquisar_vws_GF_v3.vue';
import Sobre from '../views/Sobre_vws_GF.vue'; 
import Contacto from '../views/Conctado_vws_GF';
import PrincipalUtilizador from '../views/PrincipalUtilizador.vue';
import EditarUtilizador from '../views/EditarUtilizador.vue';
import TelaUtilizador from '../views/TelaUtilizador_vws_GF.vue'; // Corrigida a importação
// import Sobre from '../views/Sobre_vws_GF.vue';

// Componentes
import MenuBarraLateral from '../components/MenuBarraLateral_cmps_GF.vue';
import ListaFilmesMaster from '../components/ListaFilmesMaster.vue';
import ListaFilmesList from '../components/ListaFilmesList.vue';
import AddListaFilmes from '../components/AddListaFilmes.vue';
import FBaseListaUtilizador from '../components/FBaseListaUtilizador.vue';
import FBaseCriarUtilizador from '../components/FBaseCriarUtilizador.vue';
import ConfigConta from '../components/ConfigConta_cmps_GF.vue';
import GestaoDeAdmin from '../components/GestaoDeAdm_cmps_GF.vue';
import TeamClube from '../components/TeamClube_cmps_GF.vue';
import ProcurarFilmes from '../components/ProcurarFilmes.vue';
import HistoricoDePesquisas from '../components/HistoricoDePesquisas.vue';
import FormFilmes from '../components/FormFilmes.vue';

// import TopMenu from '../components/GrupoDBFilmes/TopMenu.vue';


// Importando os componentes do GrupoDBFilmes
import AdicionarFilme from '../components/GrupoDBFilmes/Filmes/AdicionarFilme.vue';
import FilmeList from '../components/GrupoDBFilmes/Filmes/FilmeList.vue';
import EditarFilme from '../components/GrupoDBFilmes/Filmes/EditarFilme.vue';
import AdicionarAvaliacao from '../components/GrupoDBFilmes/Avaliacoes/AdicionarAvaliacao.vue';
import AvaliacaoList from '../components/GrupoDBFilmes/Avaliacoes/AvaliacaoList.vue';
import EditarAvaliacao from '../components/GrupoDBFilmes/Avaliacoes/EditarAvaliacao.vue';
import AdicionarFavorito from '../components/GrupoDBFilmes/Favorito/AdicionarFavorito.vue';
import FavoritoList from '../components/GrupoDBFilmes/Favorito/FavoritoList.vue';
import EditarFavorito from '../components/GrupoDBFilmes/Favorito/EditarFavorito.vue';
import AdicionarUtilizador from '../components/GrupoDBFilmes/Utilizador/AdicionarUtilizador.vue';
import UtilizadorList from '../components/GrupoDBFilmes/Utilizador/UtilizadorList.vue';
import EditarUtilizadorGrupo from '../components/GrupoDBFilmes/Utilizador/EditarUtilizador.vue';

const routes = [
    { path: '/', name: 'PaginaInicial', component: PaginaInicial },
    { path: '/Login', name: 'Login', component: Login },
    { path: '/RegistarLogin', name: 'RegistarLogin', component: RegistarLogin },
    { path: '/Pesquisar', name: 'Pesquisar', component: Pesquisar },
    { path: '/Sobre', name: 'Sobre', component: Sobre },
    { path: '/Contacto', name: 'Contacto', component: Contacto },
    { path: '/PrincipalUtilizador', name: 'PrincipalUtilizador', component: PrincipalUtilizador },
    { path: '/EditarUtilizador/:id', name: 'EditarUtilizador', component: EditarUtilizador },
    {
        path: '/TelaUtilizador',
        name: 'TelaUtilizador',
        components: {
            default: TelaUtilizador,
            sidebar: MenuBarraLateral
        },
        meta: {
            requiresAuth: true, // Esta rota requer autenticação
        },
        children: [
            { path: 'ListaFilmesMaster', name: 'ListaFilmesMaster', component: ListaFilmesMaster },
            { path: 'ListaFilmesList', name: 'ListaFilmesList', component: ListaFilmesList },
            { path: 'AddListaFilmes', name: 'AddListaFilmes', component: AddListaFilmes },
            { path: 'FBaseListaUtilizador', name: 'FBaseListaUtilizador', component: FBaseListaUtilizador },
            { path: 'FBaseCriarUtilizador', name: 'FBaseCriarUtilizador', component: FBaseCriarUtilizador },
            { path: 'ConfigConta', name: 'ConfigConta', component: ConfigConta },
            { path: 'GestaoDeAdmin', name: 'GestaoDeAdmin', component: GestaoDeAdmin },
            { path: 'TeamClube', name: 'TeamClube', component: TeamClube },
            { path: 'ProcurarFilmes', name: 'ProcurarFilmes', component: ProcurarFilmes, props: route => ({ initialQuery: route.params.query }) },
            { path: 'HistoricoDePesquisas', name: 'HistoricoDePesquisas', component: HistoricoDePesquisas },
            { path: 'FormFilmes', name: 'FormFilmes', component: FormFilmes },
            
            // { path: 'TopMenu', name: 'TopMenu', component: TopMenu },

            // Novas rotas do GrupoDBFilmes
            { path: 'adicionar-filme', name: 'AdicionarFilme', component: AdicionarFilme },
            { path: 'filmes', name: 'FilmeList', component: FilmeList },
            { path: 'editar-filme/:id', name: 'EditarFilme', component: EditarFilme },
            { path: 'adicionar-avaliacao', name: 'AdicionarAvaliacao', component: AdicionarAvaliacao },
            { path: 'avaliacoes', name: 'AvaliacaoList', component: AvaliacaoList },
            { path: 'editar-avaliacao/:id', name: 'EditarAvaliacao', component: EditarAvaliacao },
            { path: 'adicionar-favorito', name: 'AdicionarFavorito', component: AdicionarFavorito },
            { path: 'favoritos', name: 'FavoritoList', component: FavoritoList },
            { path: 'editar-favorito/:id', name: 'EditarFavorito', component: EditarFavorito },
            { path: 'adicionar-utilizador-grupo', name: 'AdicionarUtilizadorGrupo', component: AdicionarUtilizador },
            { path: 'utilizadores-grupo', name: 'UtilizadorListGrupo', component: UtilizadorList },
            { path: 'editar-utilizador-grupo/:id', name: 'EditarUtilizadorGrupo', component: EditarUtilizadorGrupo }
        ]
    },
    { path: '/:catchAll(.*)', component: Error404 }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

const getActualUtilizador = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    });
};

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (await getActualUtilizador()) {
            next();
        } else {
            alert("Você não tem acesso");
            next("/");
        }
    } else {
        next();
    }
});

export default router;

