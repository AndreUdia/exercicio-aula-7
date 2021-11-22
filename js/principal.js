const userTeste = 
    {
        nome: "Alice Penelope",
        posts: 243,
        followers: 1500,
        following: 2500,
        amigos: [
            {
                nome: "@joseeduardo",
                imagem: "../assets/img/amigo_amor.jpg"
            },
            {
                nome: "@bia345",
                imagem: "../assets/img/amigo_bia.jpg"
            },
            {
                nome: "@joicinha341",
                imagem: "../assets/img/amigo_joice.jpg"
            },
            {
                nome: "@luiznaturesa",
                imagem: "../assets/img/amigo_luis.jpg"
            },
            {
                nome: "@pedro1944",
                imagem: "../assets/img/amigo_amor.jpg"
            }
        ],
        fotos: [
            {
                post: "../assets/img/floresta1.jpg"
            },
            {
                post: "../assets/img/floresta2.jpg"
            },
            {
                post: "../assets/img/floresta3.jpg"
            },
            {
                post: "../assets/img/floresta4.jpg"
            }
        ]
    };

carregar = () => {
    console.log(userTeste);
};

carregar();