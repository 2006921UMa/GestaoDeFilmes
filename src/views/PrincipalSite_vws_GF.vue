<template>
    <div class="background">
        <div>
            <PrincipalSite_Geral />
        </div>
    </div>
</template>

<script>
import PrincipalSite_Geral from '../components/PrincipalSite_cmps_GF.vue'

export default {
    components: {
        PrincipalSite_Geral
    },
    methods: {
        sair() {
            // Chame uma função para fazer logout do utilizador
            // this.$router.replace('login')
        }
    }
}
</script>

<style scoped>
/* .background {
    background-image: url('../assets/ImgJPG/ImgensFundoA.jpg');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
} */

</style>


