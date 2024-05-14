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
            "Email_Utilz": "utilizador1@email.com",
            "Password_Utilz": "kLAiSCINchMO",
            "Foto_Utilz": "/caminho/foto/photo1.jpg",
            "DataNascimento_Utilz": "1990-01-01"
        },
        "2": {
            "Id_Utilizador": 2, 
            "Login_Utilz": "utilizador2",
            "Email_Utilz": "utilizador2@email.com",
            "Password_Utilz": "dlAAKohmbCbA",
            "Foto_Utilz": "/caminho/foto/photo2.jpg",
            "DataNascimento_Utilz": "1992-02-02"
        }
    }
}
]
// Filmes

{
    "db_Filmes": {
        "1": {  // <= `Id_Filmes` Oficial ID - JSON
            "id_Filme": 1, // Ficar uma cópia de ID (útil para Mysql)
            "genero_ID": [1, 7],  // => é um array, com dois nº -> SQL p/ NoSQL -> FOREIGN KEY (`genero_ID`) REFERENCES `db_Filmes_Generos`(`id_Genero`)  
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
        }
    }
}

// Gêneros

{
    "db_Filmes_Generos": {
        "1": { "name": "Drama" },
        "2": { "name": "Action" },
        "3": { "name": "Adventure" }
    }
}

// Avaliações

{
    "db_Avaliacoes": {
        "1": { // <= `Id_Avaliacoes` Oficial ID - JSON , a tabela sob SQL não existe Id_Avaliacoes
            "Utilizador_ID": "1",
            "filme_ID": "1",
            "classificacao_Avaliacao": 5,
            "comentario_Avaliacao": "Um dos melhores filmes que já vi. Ótima atuação, história emocionante e final surpreendente."
        },
        "2": {
            "Utilizador_ID": "2",
            "filme_ID": "2",
            "classificacao_Avaliacao": 4,
            "comentario_Avaliacao": "Um clássico do cinema. Ótima direção e atuações, mas a história poderia ser um pouco mais envolvente."
        }
    }
}

// Favorido

{
    "db_Favorido": {
        "1": { // <= `Id_Avaliacoes` Oficial ID - JSON , a tabela sob SQL não existe Id_Avaliacoes
            "Utilizador_ID": "1",   // Chave estrangeira referenciando a tabela `db_Utilizador`
            "filme_ID": "1",        // Chave estrangeira referenciando a tabela `db_Filme`
            "Comentario_Favorido": "Um clássico absoluto!",
            "gosto_Favorido": "sim"
        },
        "2": {
            "Utilizador_ID": "2",
            "filme_ID": "3",
            "Comentario_Favorido": "Adoro esse filme!",
            "gosto_Favorido": "sim"
        }
    }
}

// Filmes e Favorido (tabela de Filmes & Generos, que permite associar múltiplos géneros a um filme)

{
    "db_Filmes_Generos": {
        "1": { // <= `Id_Filmes_Generos` -> Oficial ID - JSON
            "id_Genero": "1",       // Ficar uma cópia de ID (útil para Mysql)
            "filme_ID": "1",        // Chave estrangeira referenciando a tabela `db_Filme`
            "Genero_ID": "1"        // Chave estrangeira referenciando a tabela `db_genero`
        },
        "2": {
            "id_Genero": "2",
            "filme_ID": "1",
            "Genero_ID": "2"
        }
    }
}