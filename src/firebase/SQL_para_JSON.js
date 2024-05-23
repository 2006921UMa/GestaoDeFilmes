// /*
//    ██░   ██░
//    ██░   ██░                                     ██░
//    ██░   ██░  ██░     ██░    ██░         ███░    ██░
//    ██░   ██░  ███░   ███░   ████░        ████░  ████░
//    ██░   ██░  ██░ ███░ ██░      █░       █░ ██░  ██░
//    ██░   ██░  ██░  █░  ██░   ████░       █░  █░  ██░
//    ██░   ██░  ██░  █░  ██░  █   █░       █░  █░  ██░
//     ██████░   ██░  █░  ██░  █  ██░       ██ ██░  ██░
//       ██░     ██░  █░  ██░   ███░   ██░  ████░   ██░
//                                          █░
//                                          █░
//                                          █░

//    ██░   ██░                                                        ██░              ██░                ██░             ██░      ██░              ██░
//    ██░   ██░           ██░                                 ██░      ██░              ██░                ██░             ███░    ███░              ██░           ██░
//    ██░   ██░                                                        ██░              ██░                ██░             ████░  ████░              ██░
//    ██░   ██░  ██████░  ██░  █░  █░  ████░   ████░  █████░  ██░   █████░  █████░   █████░   ████░     █████░  █████░     ██░ ███░ ██░  █████░    ████░   ████░   ██░  ████░ █████░
//    ██░   ██░  ██░  █░  ██░  █░  █░  ██░     ██░    █░      ██░  ██░ ██░  █░ ██░  ██░ ██░  ██  █░    ██░ ██░  █░  █░     ██░  █░  ██░  █░  █░  ██░ ██░  ██░ █░   ██░  ██░   █░  █░
//    ██░   ██░  ██░  █░  ██░  █░  █░  ████░   ██░    ████░   ██░  ██░ ██░     ██░  ██░ ██░  ██░███░   ██░ ██░     ██░     ██░      ██░     ██░  ██░ ██░  ██░███░  ██░  ██░      ██░
//    ██░   ██░  ██░  █░  ██░  █░  █░  ██░     ██░      ███░  ██░  ██░ ██░  ██░██░  ██░ ██░  ██░       ██░ ██░  ██░ █░     ██░      ██░  ██░ █░  ██░ ██░  ██░      ██░  ██░   ██░ █░
//     █████░    ██░  █░  ██░  █░  █░  ██░     ██░    █░      ██░  ██░ ██░  █░ ██░  ██░ ██░  ██░       ██░ ██░  █░  █░     ██░      ██░  █░  █░  ██░ ██░  ██░      ██░  ██░   █░  █░
//      ███░     ██░  █░  ██░   ███░   ████░   ██░    █████░  ██░   █████░  ████░    ████░    ████░     ████░   ████░      ██░      ██░  ████░    ████░    ████░   ██░  ██░   ████░   *
// */

// /*
//    + =======================================+
//    | Grupo de Trabalho:                     |
//    |      : Ramiro Marques (2006921)        |
//    + =======================================+
//    | Docente:  Eduardo Teles                |
//    | UC: Desenvolvimento Web-FRont-End      |
//    | Tema: Projecto - Gestão de Filmes      |
//    | Data entrega: 14 de Maio de 2024       |
//    + =======================================+
//    | Tema (assunto):                        |
//    |    Construção uma base de dados JSON   |
//    + =======================================+

// /*

// TEMA: Gestão de Filmes

// Objectivo:

//     *) O objetivo do projeto proposto é desenvolver uma plataforma online para avaliação de filmes, proporcionando aos utilizadores_
//         _a oportunidade de descobrir e partilhar as suas opiniões sobre uma vasta gama de títulos cinematográficos. A aplicação_
//         _ permitirá aos utilizadores pesquisar e explorar filmes por género, título, realizador e elenco, fornecendo informações_
//         _detalhadas sobre cada obra, incluindo sinopse, classificação, data de lançamento e avaliações de outros utilizadores. Os_
//         _utilizadores terão a possibilidade de classificar os filmes e deixar comentários, promovendo assim a interação e a troca_
//         _de recomendações dentro da comunidade de cinéfilos.

//     *)  O principal objetivo deste projeto é oferecer uma plataforma intuitiva e envolvente para os apaixonados pelo cinema,_
//         _proporcionando-lhes a oportunidade de descobrir novos filmes, partilhar as suas opiniões e conectar-se com outros_
//         _entusiastas. A interface do utilizador será desenvolvida para ser acessível e fácil de utilizar, garantindo uma_
//         _experiência fluida e agradável para todos os utilizadores. Além disso, a aplicação será desenvolvida seguindo os_
//         _princípios de design responsivo, assegurando uma experiência consistente em diferentes dispositivos e tamanhos de_
//         _ecrã. Este projeto visa proporcionar uma experiência cinematográfica completa e enriquecedora aos utilizadores,_
//         _incentivando a sua paixão pelo cinema e facilitando a sua interação com a comunidade de cinéfilos.


// Requisitos:
//     Registo de Utilizadores:
//         *) Os utilizadores devem ser capazes de se registar fornecendo um nome de utilizador, email e password.
//     Login de Utilizadores:
//         *) Os utilizadores devem ser capazes de fazer login utilizando seu nome de utilizador e password.
//     Pesquisa de Filmes:
//         *) Os utilizadores devem poder pesquisar filmes por título, diretor, género, etc.
//     Visualização de Detalhes do Filme:
//         *) Os utilizadores devem ser capazes de visualizar informações detalhadas sobre um filme específico, como sinopse, elenco, classificações, etc.
//     Avaliação de Filmes:
//         *) Utilizadores autenticados devem poder avaliar filmes, atribuindo uma classificação e deixando comentários.
//     Lista de Favoritos:
//         *) Os utilizadores devem poder adicionar filmes à sua lista de favoritos para referência futura.
//     Gestão de Utilizadores (Backoffice):
//         *) Permita aos administradores visualizar, editar e excluir utilizadores registados.
//     Gestão de Filmes (Backoffice):
//         *) Permita aos administradores visualizar, editar e excluir informações sobre filmes, incluindo títulos, diretores, géneros, etc.
//     Recomendações Personalizadas:
//         *) Baseado nas avaliações dos utilizadores, forneça recomendações personalizadas de filmes que possam gostar.
//     Integração de Imagens:
//         *) Deve ser possível associar imagens aos filmes, permitindo aos utilizadores visualizar pósteres e outros materiais promocionais.

// */

// /*
// As entidades principais do sistema com base nos requisitos fornecidos:

// Principais:

//     -> Utilizadores:
//         *) Atributos: ID (chave primária), Nome de Utilizador(Login), Email, Password

//     -> Filmes:
//         *)Atributos: ID (chave primária), Título, Diretor, Ano de Lançamento, Género, Enredo

// Relacionamentos:

//         -> Avaliações:
//             *) Atributos: utilizador_ID (chave estrangeira referenciando a tabela Utilizadores), FilmeID (chave estrangeira_
//                  _referenciando a tabela Filmes), Classificação, Comentário

//         -> Seguimentos (Followings):
//             *) Atributos: SeguidorID (chave estrangeira referenciando a tabela Utilizadores), SeguidoID (chave estrangeira_
//                _referenciando a tabela Utilizadores)

//         -> Gostos (like):
//             *) Atributos: utilizador_ID (chave estrangeira referenciando a tabela Utilizadores), FilmeID (chave estrangeira_
//                _referenciando a tabela Filmes)

// ############  Modelo de Entidade-Relacionamento (ER) #############

// ======== >> Tem passar pelo processo desnormaliza seus dados, adaptando-os para o modelo NoSQL
// 1º Passo Copiar todos os dados de um projecto SQL, converter para um projecto NoSQL - JSON
// Comentário: Foi muito fácil criar dessa forma.

// Nota: os ficheiro JSON não suporta comentários

// Nome base de Dados: firebaseGestaoDeFilms-master  (JSON)


// default: firebaseGestaoDeFilms-master


// Utilizador  (Nome do documento p/ firebase)

[
    {
        "db_Utilizador": {
            "1": { // <= `Id_Utilizador` Oficial ID - JSON
                "Id_Utilizador": 1, // Ficar uma cópia de ID (útil para Mysql)
                "Login_Utilz": "utilizador1",
                "Password_Utilz": "kLAiSCINchMO",
                "Email_Utilz": "utilizador1@email.com",
                "Foto_Utilz": "/caminho/foto/foto1.jpg",
                "DataNascimento_Utilz": "2001-01-15"
            },
            "2": {
                "Id_Utilizador": 2,
                "Login_Utilz": "utilizador2",
                "Password_Utilz": "dlAAKohmbCbA",
                "Email_Utilz": "utilizador2@email.com",
                "Foto_Utilz": "/caminho/foto/foto2.jpg",
                "DataNascimento_Utilz": "2004-02-16"
            },
            "3": {
                "Id_Utilizador": 3,
                "Login_Utilz": "utilizador3",
                "Password_Utilz": "6WUX3R!La8Gv",
                "Email_Utilz": "utilizador3@email.com",
                "Foto_Utilz": "/caminho/foto/foto3.jpg",
                "DataNascimento_Utilz": "2005-03-17"
            },
            "4": {
                "Id_Utilizador": 4,
                "Login_Utilz": "utilizador4",
                "Password_Utilz": "43dQ@$U1Sjsf",
                "Email_Utilz": "utilizador4@email.com",
                "Foto_Utilz": "/caminho/foto/foto4.jpg",
                "DataNascimento_Utilz": "2006-04-18"
            },
            "5": {
                "Id_Utilizador": 5,
                "Login_Utilz": "utilizador5",
                "Password_Utilz": "2e6Pk$gfMr3@",
                "Email_Utilz": "utilizador5@email.com",
                "Foto_Utilz": "/caminho/foto/foto5.jpg",
                "DataNascimento_Utilz": "2010-05-19"
            }
        },

        // Filmes
        "db_Filmes": {
            "1": {// <= `Id_Filmes` Oficial ID - JSON
                "id_Filme": 1,// Ficar uma cópia de ID (útil para Mysql)
                "genero_ID": [1, 7], // => é um array, com dois nº -> SQL p/ NoSQL -> FOREIGN KEY (`genero_ID`) REFERENCES `db_Filmes_Generos`(`id_Genero`)  
                "titulo_Filme": "The Shawshank Redemption",
                "diretor_Filme": "Frank Darabont",
                "ano_Lancamento_Filme": 1994,
                "grupo_de_atores_Filme": "Tim Robbins, Morgan Freeman",
                "resumo_Filme": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                "ImgNomeFich_Filme": "shawshank_redemption.jpg",
                "ImagemCaminho_Filme": "/caminho/img/poster"
            },
            "2": {
                "id_Filme": 2,
                "genero_ID": [1, 7, 18],
                "titulo_Filme": "The Godfather",
                "diretor_Filme": "Francis Ford Coppola",
                "ano_Lancamento_Filme": 1972,
                "grupo_de_atores_Filme": "Marlon Brando, Al Pacino, James Caan",
                "resumo_Filme": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                "ImgNomeFich_Filme": "godfather.jpg",
                "ImagemCaminho_Filme": "/caminho/img/poster"
            },
            "3": {
                "id_Filme": 3,
                "genero_ID": [3],
                "titulo_Filme": "The Dark Knight",
                "diretor_Filme": "Christopher Nolan",
                "ano_Lancamento_Filme": 2008,
                "grupo_de_atores_Filme": "Christian Bale, Heath Ledger, Aaron Eckhart",
                "resumo_Filme": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                "ImgNomeFich_Filme": "dark_knight.jpg",
                "ImagemCaminho_Filme": "/caminho/img/poster"
            },
            "4": {
                "id_Filme": 4,
                "genero_ID": [4],
                "titulo_Filme": "Inception",
                "diretor_Filme": "Christopher Nolan",
                "ano_Lancamento_Filme": 2010,
                "grupo_de_atores_Filme": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
                "resumo_Filme": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                "ImgNomeFich_Filme": "inception.jpg",
                "ImagemCaminho_Filme": "/caminho/img/poster"
            },
            "5": {
                "id_Filme": 5,
                "genero_ID": [5],
                "titulo_Filme": "The Lord of the Rings: The Return of the King",
                "diretor_Filme": "Peter Jackson",
                "ano_Lancamento_Filme": 2003,
                "grupo_de_atores_Filme": "Elijah Wood, Viggo Mortensen, Ian McKellen",
                "resumo_Filme": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
                "ImgNomeFich_Filme": "return_of_the_king.jpg",
                "ImagemCaminho_Filme": "/caminho/img/poster"
            }
        },

        // Gêneros
        "db_Genero": {
            "1": { "id_Genero": 1, "Lista_Genero": "Ação" },
            "2": { "id_Genero": 2, "Lista_Genero": "Aventura" },
            "3": { "id_Genero": 3, "Lista_Genero": "Cinema de arte" },
            "4": { "id_Genero": 4, "Lista_Genero": "Chanchada" },
            "5": { "id_Genero": 5, "Lista_Genero": "Comédia" },
            "6": { "id_Genero": 6, "Lista_Genero": "Comédia de ação" },
            "7": { "id_Genero": 7, "Lista_Genero": "Comédia de terror" },
            "8": { "id_Genero": 8, "Lista_Genero": "Comédia dramática" },
            "9": { "id_Genero": 9, "Lista_Genero": "Comédia romântica" },
            "10": { "id_Genero": 10, "Lista_Genero": "Dança" },
            "11": { "id_Genero": 11, "Lista_Genero": "Documentário" },
            "12": { "id_Genero": 12, "Lista_Genero": "Docuficção" },
            "13": { "id_Genero": 13, "Lista_Genero": "Drama" },
            "14": { "id_Genero": 14, "Lista_Genero": "Espionagem" },
            "15": { "id_Genero": 15, "Lista_Genero": "Faroeste" },
            "16": { "id_Genero": 16, "Lista_Genero": "Fantasia" },
            "17": { "id_Genero": 17, "Lista_Genero": "Fantasia científica" },
            "18": { "id_Genero": 18, "Lista_Genero": "Ficção Científica" },
            "19": { "id_Genero": 19, "Lista_Genero": "Filmes com truques" },
            "20": { "id_Genero": 20, "Lista_Genero": "Filmes de guerra" },
            "21": { "id_Genero": 21, "Lista_Genero": "Mistério" },
            "22": { "id_Genero": 22, "Lista_Genero": "Musical" },
            "23": { "id_Genero": 23, "Lista_Genero": "Filme policial" },
            "24": { "id_Genero": 24, "Lista_Genero": "Romance" },
            "25": { "id_Genero": 25, "Lista_Genero": "Terror" },
            "26": { "id_Genero": 26, "Lista_Genero": "Thriller" }
        },
        "db_Filmes_Generos": {
            "1": { "Filmes_ID": 1, "Genero_ID": 7 },
            "2": { "Filmes_ID": 1, "Genero_ID": 1 },
            "3": { "Filmes_ID": 2, "Genero_ID": 1 },
            "4": { "Filmes_ID": 2, "Genero_ID": 7 },
            "5": { "Filmes_ID": 2, "Genero_ID": 18 },
            "6": { "Filmes_ID": 3, "Genero_ID": 2 },
            "7": { "Filmes_ID": 3, "Genero_ID": 8 },
            "8": { "Filmes_ID": 3, "Genero_ID": 12 },
            "9": { "Filmes_ID": 4, "Genero_ID": 2 },
            "10": { "Filmes_ID": 4, "Genero_ID": 17 },
            "11": { "Filmes_ID": 5, "Genero_ID": 3 },
            "12": { "Filmes_ID": 5, "Genero_ID": 16 }
        },

        // Avaliações
        "db_Avaliacoes": {
            "1": { // <= `Id_Avaliacoes` Oficial ID - JSON , a tabela sob SQL não existe Id_Avaliacoes
                "Utilizador_ID": "1",
                "filme_ID": "1",
                "classificacao_Avaliacao": 5,
                "comentario_Avaliacao": "Um dos melhores filmes que já vi. Ótima atuação, história emocionante e final surpreendente."
            },
            "2": {
                "Utilizador_ID": 2,
                "Filme_ID": 2,
                "Classificacao_Avaliacao": 4,
                "Comentario_Avaliacao": "Um clássico do cinema. Ótima direção e atuações, mas a história poderia ser um pouco mais envolvente."
            },
            "3": {
                "Utilizador_ID": 3,
                "Filme_ID": 3,
                "Classificacao_Avaliacao": 5,
                "Comentario_Avaliacao": "Um dos melhores filmes de super-heróis já feitos. Heath Ledger entrega uma performance incrível como o Coringa."
            },
            "4": {
                "Utilizador_ID": 1,
                "Filme_ID": 4,
                "Classificacao_Avaliacao": 4,
                "Comentario_Avaliacao": "Um filme complexo e fascinante. Adoro o conceito de sonhos dentro de sonhos."
            },
            "5": {
                "Utilizador_ID": 2,
                "Filme_ID": 5,
                "Classificacao_Avaliacao": 5,
                "Comentario_Avaliacao": "Uma conclusão épica para a trilogia. Visualmente deslumbrante e emocionante do início ao fim."
            }
        },

        // Favorido
        "db_Favorido": {
            "1": {// <= `Id_Avaliacoes` Oficial ID - JSON , a tabela sob SQL não existe Id_Avaliacoes
                "Utilizador_ID": 1,// Chave estrangeira referenciando a tabela `db_Utilizador`
                "Filme_ID": 1, // Chave estrangeira referenciando a tabela `db_Filme`
                "Classificacao_Avaliacao": 5,
                "Comentario_Avaliacao": "Um dos melhores filmes que já vi. Ótima atuação, história emocionante e final surpreendente.",
                "Comentario_Favorido": "Um clássico absoluto!",
                "gosto_Favorido": "sim"
            },
            "2": {
                "Utilizador_ID": 2,
                "Filme_ID": 2,
                "Classificacao_Avaliacao": 4,
                "Comentario_Avaliacao": "Um clássico do cinema. Ótima direção e atuações, mas a história poderia ser um pouco mais envolvente."
            },
            "3": {
                "Utilizador_ID": 3,
                "Filme_ID": 3,
                "Classificacao_Avaliacao": 5,
                "Comentario_Avaliacao": "Um dos melhores filmes de super-heróis já feitos. Heath Ledger entrega uma performance incrível como o Coringa.",
                "Comentario_Favorido": "Adoro esse filme!",
                "gosto_Favorido": "sim"
            },
            "4": {
                "Utilizador_ID": 1,
                "Filme_ID": 4,
                "Classificacao_Avaliacao": 4,
                "Comentario_Avaliacao": "Um filme complexo e fascinante. Adoro o conceito de sonhos dentro de sonhos."
            },
            "5": {
                "Utilizador_ID": 2,
                "Filme_ID": 5,
                "Classificacao_Avaliacao": 5,
                "Comentario_Avaliacao": "Uma conclusão épica para a trilogia. Visualmente deslumbrante e emocionante do início ao fim."
            }
        },
        // Filmes e Favorido (tabela de Filmes & Generos, que permite associar múltiplos géneros a um filme)
        "db_Filmes_Generos": {
            "1": { // <= `Id_Filmes_Generos` -> Oficial ID - JSON
                "id_Genero": "1",       // Ficar uma cópia de ID (útil para Mysql)
                "filme_ID": "1",        // Chave estrangeira referenciando a tabela `db_Filme`
                "Genero_ID": "1"        // Chave estrangeira referenciando a tabela `db_genero`
            },
            "2": { "id_Genero": "2", "Filmes_ID": 1, "Genero_ID": 7 },
            "3": { "id_Genero": "3", "Filmes_ID": 2, "Genero_ID": 1 },
            "4": { "id_Genero": "4", "Filmes_ID": 2, "Genero_ID": 7 },
            "5": { "id_Genero": "5", "Filmes_ID": 2, "Genero_ID": 18 },
            "6": { "id_Genero": "6", "Filmes_ID": 3, "Genero_ID": 2 },
            "7": { "id_Genero": "7", "Filmes_ID": 3, "Genero_ID": 8 },
            "8": { "id_Genero": "8", "Filmes_ID": 3, "Genero_ID": 12 },
            "9": { "id_Genero": "9", "Filmes_ID": 4, "Genero_ID": 2 },
            "10": { "id_Genero": "10", "Filmes_ID": 4, "Genero_ID": 17 },
            "11": { "id_Genero": "11", "Filmes_ID": 5, "Genero_ID": 3 },
            "12": { "id_Genero": "12", "Filmes_ID": 5, "Genero_ID": 16 }
        }
    }

]