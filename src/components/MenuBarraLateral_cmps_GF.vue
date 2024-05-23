<template>
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
        <div class="logo">
            <img :src="logoURL" alt="Vue" />
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span v-if="is_expanded" class="material-icons">keyboard_double_arrow_left</span>
                <span v-else class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>
        <h3> {{ '|' }} Menu {{ '|>' }} Admin {{ '|' }}</h3>
        <div class="menu">
            <router-link to="/TelaUtilizador/ListaFilmesMaster" class="button">
                <span class="material-icons">search</span>
                <span class="text">Pesquisar (JSON)</span>
            </router-link>
            <router-link to="/TelaUtilizador/FBaseListaUtilizador" class="button">
                <span class="material-icons">group</span>
                <span class="text">Lista Utiliz</span>
            </router-link>
            <router-link to="/TelaUtilizador/FBaseCriarUtilizador" class="button">
                <span class="material-icons">email</span>
                <span class="text">Novos Utiliz</span>
            </router-link>
            <router-link to="/TelaUtilizador/GestaoDeAdmin" class="button">
                <span class="material-icons">admin_panel_settings</span>
                <span class="text">Admin</span>
            </router-link>
            <router-link to="/TelaUtilizador/TeamClube" class="button">
                <span class="material-icons">group</span>
                <span class="text">Team</span>
            </router-link>
            <router-link to="/TelaUtilizador/ProcurarFilmes" class="button">
                <span class="material-icons">query_stats</span>
                <span class="text">Consulta Filmes</span>
            </router-link>
            <router-link to="/TelaUtilizador/HistoricoDePesquisas" class="button">
                <span class="material-icons">history</span>
                <span class="text">Histórico Pesquisa</span>
            </router-link>
            <router-link to="/TelaUtilizador/FormFilmes" class="button">
                <span class="material-icons">recent_actors</span>
                <span class=" text">Lista de Filmes</span>
            </router-link>
        </div>

        <div class="menu">
            <router-link to="/TelaUtilizador/ConfigConta" class="button shorter">
                <span class="material-icons">settings</span>
                <span class="text">Configurações</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';
import logoURL from '../assets/ImgPNG/LogotipoClube.png';

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;
    localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

<style scoped>
aside {
    display: flex;
    flex-direction: column;
    background-color: var(--dark);
    color: var(--light);
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 50vh;
    padding: 1rem;
    transition: 0.2s ease-in-out;

    .flex {
        flex: 1 1 0%;
    }

    .logo {
        margin-bottom: 1rem;
    }

    .logo img {
        width: 5rem;
        float: left;
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        transition: 0.2s ease-in-out;

        .menu-toggle {
            transition: 0.2s ease-in-out;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover {
                .material-icons {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    h3,
    .button .text {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        color: white;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;
            transition: 0.2s ease-in-out;
            padding: 0.5rem 1rem;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-in-out;
            }

            .text {
                color: var(--light);
                transition: 0.2s ease-in-out;
                margin-left: 1rem;
            }

            &:hover {
                background-color: var(--dark-alt);

                .material-icons,
                .text {
                    color: var(--primary);
                }
            }

            &.router-link-exact-active {
                background-color: var(--dark-alt);
                border-right: 5px solid var(--primary);

                .material-icons,
                .text {
                    color: var(--primary);
                }
            }
        }

        .shorter {
            margin-bottom: 10px;
        }
    }

    .footer {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;

        p {
            font-size: 0.875rem;
            color: var(--grey);
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3,
        .button .text {
            opacity: 1;
        }

        .button {
            .material-icons {
                margin-right: 1rem;
            }
        }

        .footer {
            opacity: 0;
        }
    }

    @media (max-width: 1024px) {
        position: absolute;
        z-index: 99;
    }
}
</style>
