
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

import Error404 from '../views/Erro404_vws_GF.vue';
import PaginaInicial from '../views/PrincipalSite_vws_GF.vue';
import Login from '../views/Login_vws_GF.vue';
import RegistarLogin from '../views/Registrar_vws_GF.vue';
import Pesquisar from '../views/Pesquisar_vws_GF_v3.vue';
import Sobre from '../views/Sobre_vws_GF.vue';
import Contacto from '../views/Conctado_vws_GF.vue';

import PrincipalUtilizador from '../views/PrincipalUtilizador.vue';
import EditarUtilizador from '../views/EditarUtilizador.vue';

import TelaCentroUtilizador from '../components/TelaCentroUtilizador_cmps_GF.vue';

import MenuBarraLateral from '../components/MenuBarraLateral_cmps_GF.vue';
import ListaFilmesMaster from '../components/ListaFilmesMaster.vue';
import ListaFilmesList from '../components/ListaFilmesList.vue';
import AddListaFilmes from '../components/AddListaFilmes.vue';

const routes = [
    {
        path: '/',
        name: 'PaginaInicial',
        component: PaginaInicial
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/RegistarLogin',
        name: 'RegistarLogin',
        component: RegistarLogin
    },
    {
        path: '/Pesquisar',
        name: 'Pesquisar',
        component: Pesquisar
    },
    {
        path: '/Sobre',
        name: 'Sobre',
        component: Sobre
    },
    {
        path: '/Contacto',
        name: 'Contacto',
        component: Contacto
    },
    {
        path: '/TelaUtilizador',
        name: 'TelaUtilizador',
        component: TelaCentroUtilizador,
        meta: {
            requiresAuth: true, // Esta rota requer autenticação
        },
        children: [
            {
                path: '', // Caminho vazio para a rota padrão
                components: {
                    default: PrincipalUtilizador,
                    MenuBarraLateral: MenuBarraLateral
                }
            },
            {
                path: 'EditarUtilizador/:id',
                name: 'EditarUtilizador',
                component: EditarUtilizador
            },
            {
                path: 'ListaFilmesMaster',
                name: 'ListaFilmesMaster',
                component: ListaFilmesMaster
            },
            {
                path: 'ListaFilmesList',
                name: 'ListaFilmesList',
                component: ListaFilmesList
            },
            {
                path: 'AddListaFilmes',
                name: 'AddListaFilmes',
                component: AddListaFilmes
            }
        ]
    },
    {
        path: '/:catchAll(.*)',
        component: Error404
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

const getCurrentUser = () => {
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
        if (await getCurrentUser()) {
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
