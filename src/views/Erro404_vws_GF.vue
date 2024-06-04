<template>
    <div>
        <header>
            <h1>Erro 404</h1>
            <nav>
                <ul>
                    <li><router-link to="/">Página Inicial</router-link></li>
                </ul>
            </nav>
        </header>


        <main>
            <section>
                <h2>Ops! Ocorreu um erro.</h2>
                <p>Lamentamos, mas a página que você está procurando não pôde ser encontrada.</p>
            </section>
        </main>

        <footer>
            <p>&copy; 2024 Meu Site</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'ErrorPage'
}
</script>

<style scoped>

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

main {
    padding: 20px;
}

section {
    margin-bottom: 30px;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px;
}

h1 {
    font-size: 3em;
}
</style>
