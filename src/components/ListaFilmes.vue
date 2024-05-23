<script>
import ListaFilmesDataService from "../firebase/DataService.js"; // Nota: Descomentar esta linha

export default {
    name: "ComponenteListaFilmes", // Renomear para "ComponenteListaFilmes"
    props: ["ListaFilmes"],
    data() {
        return {
            atualListaFilmes: null,
            message: "",
        };
    },
    watch: {
        ListaFilmes: function (ListaFilmes) {
            this.atualListaFilmes = { ...ListaFilmes };
            this.message = "";
        },
    },
    methods: {
        updatepublicado(status) {
            ListaFilmesDataService.update(this.atualListaFilmes.id, {
                publicado: status,
            })
                .then(() => {
                    this.atualListaFilmes.publicado = status;
                    this.message = "O estado foi atualizado com sucesso!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        updateListaFilmes() {
            const data = {
                titulo: this.atualListaFilmes.titulo,
                PaginaLink: this.atualListaFilmes.PaginaLink,
                descricao: this.atualListaFilmes.descricao,
            };

            ListaFilmesDataService.update(this.atualListaFilmes.id, data)
                .then(() => {
                    this.message = "A Lista do filmes foi atualizado com sucesso!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        deleteListaFilmes() {
            ListaFilmesDataService.delete(this.atualListaFilmes.id)
                .then(() => {
                    this.$emit("refreshList");
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.message = "";
        this.atualListaFilmes = { ...this.ListaFilmes }
    },
};
</script>

