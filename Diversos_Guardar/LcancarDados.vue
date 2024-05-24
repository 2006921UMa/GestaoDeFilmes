<template>
    <div>
        <h2>Lançar Dados para Firebase</h2>
        <h2>Pela primeira vez</h2>
        <h2>Base de dados SQL - NOSQL</h2>
        <button @click="lancarDados">Lançar Dados</button>
    </div>
</template>

<script>
import { db } from "../src/src/firebase/firebaseConfig";

export default {
    methods: {
        lancarDados() {
            const dadosIniciais = [
                {
                    id_Filme: 1,
                    genero_ID: [1, 7],
                    titulo_Filme: "The Shawshank Redemption",
                    diretor_Filme: "Frank Darabont",
                    ano_Lancamento_Filme: 1994,
                    grupo_de_atores_Filme: "Tim Robbins, Morgan Freeman",
                    resumo_Filme: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                    ImgNomeFich_Filme: "shawshank_redemption.jpg",
                    ImagemCaminho_Filme: "/caminho/img/poster"
                },
                {
                    id_Filme: 2,
                    genero_ID: [1, 7, 18],
                    titulo_Filme: "The Godfather",
                    diretor_Filme: "Francis Ford Coppola",
                    ano_Lancamento_Filme: 1972,
                    grupo_de_atores_Filme: "Marlon Brando, Al Pacino, James Caan",
                    resumo_Filme: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                    ImgNomeFich_Filme: "godfather.jpg",
                    ImagemCaminho_Filme: "/caminho/img/poster"
                },
                {
                    id_Filme: 3,
                    genero_ID: [3],
                    titulo_Filme: "The Dark Knight",
                    diretor_Filme: "Christopher Nolan",
                    ano_Lancamento_Filme: 2008,
                    grupo_de_atores_Filme: "Christian Bale, Heath Ledger, Aaron Eckhart",
                    resumo_Filme: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                    ImgNomeFich_Filme: "dark_knight.jpg",
                    ImagemCaminho_Filme: "/caminho/img/poster"
                },
                {
                    id_Filme: 4,
                    genero_ID: [4],
                    titulo_Filme: "Inception",
                    diretor_Filme: "Christopher Nolan",
                    ano_Lancamento_Filme: 2010,
                    grupo_de_atores_Filme: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
                    resumo_Filme: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                    ImgNomeFich_Filme: "inception.jpg",
                    ImagemCaminho_Filme: "/caminho/img/poster"
                },
                {
                    id_Filme: 5,
                    genero_ID: [5],
                    titulo_Filme: "The Lord of the Rings: The Return of the King",
                    diretor_Filme: "Peter Jackson",
                    ano_Lancamento_Filme: 2003,
                    grupo_de_atores_Filme: "Elijah Wood, Viggo Mortensen, Ian McKellen",
                    resumo_Filme: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
                    ImgNomeFich_Filme: "return_of_the_king.jpg",
                    ImagemCaminho_Filme: "/caminho/img/poster"
                }
            ];

            dadosIniciais.forEach(filme => {
                db.collection('db_Filmes').add(filme).then(() => {
                    console.log('Filme adicionado:', filme.titulo_Filme);
                }).catch((error) => {
                    console.error('Erro ao adicionar filme: ', error);
                });
            });
        }
    }
};
</script>
