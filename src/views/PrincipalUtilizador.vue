<template>
    <FBaseCriarUtilizador />
    <FBaseListaUtilizador />
</template>

<script>
import FBaseCriarUtilizador from '../components/FBaseCriarUtilizador.vue'
import FBaseListaUtilizador from '../components/FBaseListaUtilizador.vue'

export default {
    name: 'PrincipalUtilizador',
    components: { FBaseCriarUtilizador, FBaseListaUtilizador }
}
</script>