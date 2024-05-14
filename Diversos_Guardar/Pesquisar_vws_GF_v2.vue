<template>
    <div id="show-blogs">
        <h1>Pesquisar Bloco de Texto</h1>
        <input type="text" v-model="search" placeholder="Procurar texto" />
        <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
            <h2>{{ blog.title.toUpperCase() }}</h2>
            <article>{{ snippet(blog.body) }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: [],
            search: ''
        };
    },
    created() {
        this.fetchBlogs();
    },
    methods: {
        fetchBlogs() {
            //this.$http.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            //        this.blogs = response.body.slice(0, 10);
            this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {        
                this.blogs = data.body.slice(0, 10);
                })
                .catch(error => {
                    console.error('Erro ao procurar texto:', error);
                });
        },
        snippet(text) {
            return text.slice(0, 100) + '...'; // A simple snippet function
        }
    },
    computed: {
        //filteredBlogs() {
        filteredBlogs:function(){
            return this.blogs.filter((blog) => {
                //return blog.title.toLowerCase().includes(this.search.toLowerCase());
                return blog.title.match(this.search)
            });
        }
    }
}
</script>

<style scoped>
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}
</style>
