<template>
    <div>
        <!-- <router-view name="TelaUtilizador"></router-view>
        <router-view name="MenuBarraLateral"></router-view> -->
<!-- 
        <router-view name="ListaFilmesMaster"></router-view>
        <router-view name="AddListaFilmes"></router-view> -->
       
    </div>
    <div class="app">
        <!-- MenuBarraLateral (Sidebar) utilizador -->
        <MenuBarraLateral />

        <!-- Content -->
        <router-view />
    </div>
</template>

<script setup>
import MenuBarraLateral from "../components/MenuBarraLateral_cmps_GF.vue"
</script>

<style lang="scss">
:root {
    --primary: #2acf66;
    --primary-alt: #156e36;
    --grey: #64748b;
    --dark: #1e293b;
    --dark-alt: #334155;
    --light: #ffffff;
    --sidebar-width: 200px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira sans', sans-serif;
}

body {
    background: var(--light);
}

button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
}

.app {
    display: flex;

    main {
        flex: 1 1 0;
        padding: 2rem;

        @media (max-width: 1024px) {
            padding-left: 6rem;
        }
    }
}
</style>