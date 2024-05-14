

<template>
    <!-- Pesquisar -> Versão 1 -->
    
    <div id="app">
        <img src="./assets/logo.png">
        <P>Pesquisar :</P>
        <input type="text" v-model="pesquisa">
    </div>
</template>


<script>
    export default{
        name: 'app',
        data () {
            return {
                pesquisa: ''
            }
        },
        watch: {
            pesquisa(val) {
                if (val.length > 3) {
                    this.metodoParaRequisicaoAvios(val)
                }
            }
        },
        methods: {
            metodoParaRequisicaoAvios(val){
                //Codigo para pesquisa
                alert('Valeu a pena!')
            }    
        }
    }

</script>

<style>
#app { font—family: 'Avenir',
Helvetica,
Arial,
sans—serif;
—webkit—font—smoothing: antíaliased;
—moz-osx—font—smoothing: grayscale;
text—align: center;
color: 32c3e50;
margin—top: 60px;
}
</style>