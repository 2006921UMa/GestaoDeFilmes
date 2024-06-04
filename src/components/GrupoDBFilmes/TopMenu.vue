<template>
    <nav class="top-menu">
        <ul>
            <li><router-link to="/TelaUtilizador/AdicionarFilme">Lista</router-link></li>
            <li><router-link to="/filmes">Filmes</router-link></li>
            <li><router-link to="/EditarFilme">Avaliações</router-link></li>
            <li><router-link to="/favoritos">Favoritos</router-link></li>
            <li><router-link to="/utilizadores-grupo">Utilizadores</router-link></li>
            <li><router-link to="/Pesquisar">Pesquisar</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'TopMenu'
};
</script>

<style scoped>
.top-menu {
    background-color: #333;
    padding: 10px;
}

.top-menu ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
}

.top-menu li {
    display: inline;
}

.top-menu a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
}

.top-menu a:hover {
    background-color: #555;
}
</style>
