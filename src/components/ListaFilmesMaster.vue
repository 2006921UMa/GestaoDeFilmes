<template>
    <div id="app" class="Body">
        <div class="container mt-3">
            <h2>Vue Firestore CRUD</h2>
            <h4> CRUD - Create, Read, Update, Delete</h4>

            <nav class="navbar navbar-expand navbar-dark bg-dark justify-content-center">
                <router-link to="/TelaUtilizador" class="navbar-brand">Voltar</router-link>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/ListaFilmesList" class="nav-link">Listas de Filmes</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/AddListaFilmes" class="nav-link">Adicionar dados</router-link>
                    </li>
                </ul>
            </nav>
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: "app"
};
</script>

<style scoped>
.Body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1vh;
    margin-left: 600px;
}

#app {
    text-align: center;
    /* Centraliza o conteúdo horizontalmente */
}
</style>

