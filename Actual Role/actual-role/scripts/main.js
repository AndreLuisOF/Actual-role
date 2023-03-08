const dbUsuarios = {
    users: [
        {
            id: 1,
            nome: "Miguel",
            sobrenome: "Correia",
            login: "miguelcorreia",
            senha: "1234",
            endereco: {
                rua: "Rua das Flores",
                numero: 127,
                complemento: "Apto 202",
                bairro: "Nova Suíça",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            biografia: "Sou um cara simples. Gosto de sair pra curtir com meus amigos e beber uma cervejinha. Para mim, quanto mais gente no rolê melhor!",
            gostos: {
                gosto1: "Cerveja",
                gosto2: "Música",
                gosto3: "Dançar"
            },
            idade: 25,
            caracteristicas: {
                carac1: "Animado",
                carac2: "Extrovertido",
                carac3: "Amigável"
            },
            redesSociais: {
                instagram: "miguelcorreia",
                twitter: "miguelcorreia",
                facebook: "miguelcorreia"
            },
            contatos: {
                telefone: 31997445618,
                email: "miguelcorreia@email.com"
            },
            foto: "https://randomuser.me/api/portraits/men/66.jpg"
        },
        {
            id: 2,
            nome: "Erick",
            sobrenome: "Cavalcanti",
            login: "erickcavalcanti",
            senha: "1234",
            endereco: {
                rua: "Rua Engenheiro Passos",
                numero: 1102,
                complemento: "",
                bairro: "Cruzeiro",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            biografia: "Nasci em uma família de músicos e isso sempre me influenciou em todos os aspectos. Gosto de ir para qualquer lugar que tenha música boa.",
            gostos: {
                gosto1: "Música",
                gosto2: "Shows",
                gosto3: "Corrida"
            },
            idade: 21,
            caracteristicas: {
                carac1: "Calmo",
                carac2: "Tímido",
                carac3: "Amigável"
            },
            redesSociais: {
                instagram: "erickcavalcanti",
                twitter: "erickcavalcanti",
                facebook: "erickcavalcanti"
            },
            contatos: {
                telefone: 31987456178,
                email: "erickcavalcanti@email.com"
            },
            foto: "https://randomuser.me/api/portraits/men/46.jpg"
        },
        {
            id: 3,
            nome: "Manuela",
            sobrenome: "Costa",
            login: "manuelacosta",
            senha: "1234",
            endereco: {
                rua: "Travessa Deocleciano Fonseca",
                numero: 1650,
                complemento: "Apto 104",
                bairro: "Vila César",
                cidade: "Contagem",
                estado: "MG"
            },
            biografia: "Gosto de sair para lugares tranquilos para poder relaxar a cabeça da rotina estressante da semana. Não curto lugares muito cheios.",
            gostos: {
                gosto1: "Academia",
                gosto2: "Dançar",
                gosto3: "Drinks"
            },
            idade: 28,
            caracteristicas: {
                carac1: "Calma",
                carac2: "Falante",
                carac3: "Saudável"
            },
            redesSociais: {
                instagram: "manuelacosta",
                twitter: "manuelacosta",
                facebook: "manuelacosta"
            },
            contatos: {
                telefone: 31995621112,
                email: "manuelacosta@email.com"
            },
            foto: "https://randomuser.me/api/portraits/women/90.jpg"
        },
        {
            id: 4,
            nome: "Danilo",
            sobrenome: "Barbosa",
            login: "danilobarbosa",
            senha: "1234",
            endereco: {
                rua: "Rua Presidente Juscelino Kubitschek de Oliveira",
                numero: 338,
                complemento: "",
                bairro: "Suzano",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            biografia: "Trabalho como DJ e estou sempre procurando divulgar meus eventos por aqui. Para quem curte o meu trabalho, não deixa de me seguir!",
            gostos: {
                gosto1: "Música",
                gosto2: "Balada",
                gosto3: "Academia"
            },
            idade: 24,
            caracteristicas: {
                carac1: "Extrovertido",
                carac2: "Calmo",
                carac3: "Engraçado"
            },
            redesSociais: {
                instagram: "danbarbosa",
                twitter: "danbarbosa",
                facebook: "danbarbosa"
            },
            contatos: {
                telefone: 31984162288,
                email: "danbarbosa@email.com"
            },
            foto: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
            id: 5,
            nome: "Malvina",
            sobrenome: "Mendes",
            login: "malvinamendes",
            senha: "1234",
            endereco: {
                rua: "Rua São João",
                numero: 5838,
                complemento: "",
                bairro: "Gameleira",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            biografia: "Gosto de conhecer pessoas novas e diferentes, para estar sempre variando os lugares onde saio. Não gosto de ficar em casa de jeito nenhum.",
            gostos: {
                gosto1: "Cerveja",
                gosto2: "Balada",
                gosto3: "Futebol"
            },
            idade: 19,
            caracteristicas: {
                carac1: "Engraçada",
                carac2: "Companheira",
                carac3: "Alegre"
            },
            redesSociais: {
                instagram: "malvinamendes",
                twitter: "malvinamendes",
                facebook: "malvinamendes"
            },
            contatos: {
                telefone: 31983667365,
                email: "malvinamendes@email.com"
            },
            foto: "https://randomuser.me/api/portraits/women/35.jpg"
        },
        {
            id: 6,
            nome: "Félix",
            sobrenome: "Roberto",
            login: "felixroberto",
            senha: "1234",
            endereco: {
                rua: "Rua Nova Rezende",
                numero: 120,
                complemento: "",
                bairro: "Esplanada",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            biografia: "Sou novo na cidade e gostaria de conhecer pessoas novas. Gosto muito de churrasco e sair pra beber cerveja com os amigos. Adiciona aí!",
            gostos: {
                gosto1: "Cerveja",
                gosto2: "Churrasco",
                gosto3: "Futebol"
            },
            idade: 20,
            caracteristicas: {
                carac1: "Tranquilo",
                carac2: "Engraçado",
                carac3: "Piadista"
            },
            redesSociais: {
                instagram: "felixroberto",
                twitter: "felixroberto",
                facebook: "felixroberto"
            },
            contatos: {
                telefone: 31993304242,
                email: "felixroberto@email.com"
            },
            foto: "https://randomuser.me/api/portraits/men/28.jpg"
        },
        {
            id: 7,
            nome: "Lucas",
            sobrenome: "Santos",
            login: "lucasantos",
            senha: "1234",
            endereco: {
                rua: "Rua Conde Oeste",
                numero: 572,
                complemento: "",
                bairro: "Saudade",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            biografia: "Sou um cara que gosta de conhecer gente nova e ir pra lugares com música ao vivo. Me chamar pra ir pro bar é sempre uma boa!",
            gostos: {
                gosto1: "Música",
                gosto2: "Churrasco",
                gosto3: "Cerveja"
            },
            idade: 25,
            caracteristicas: {
                carac1: "Extrovertido",
                carac2: "Engraçado",
                carac3: "Ansioso"
            },
            redesSociais: {
                instagram: "lucassantos",
                twitter: "lucassantos",
                facebook: "lucassantos"
            },
            contatos: {
                telefone: 31997888556,
                email: "lucassantos@email.com"
            },
            foto: "https://randomuser.me/api/portraits/men/86.jpg"
        },
        {
            id: 8,
            nome: "Thiago",
            sobrenome: "Alves",
            login: "thiagoalves",
            senha: "1234",
            endereco: {
                rua: "Rua Tebas",
                numero: 350,
                complemento: "Apto 702",
                bairro: "Vera Cruz",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            biografia: "Gosto muito de sair para tomar cerveja com os amigos. Recentemente, comecei a fabricar a minha própria e chamar mais gente aqui pra casa.",
            gostos: {
                gosto1: "Futebol",
                gosto2: "Churrasco",
                gosto3: "Cerveja"
            },
            idade: 27,
            caracteristicas: {
                carac1: "Extrovertido",
                carac2: "Engraçado",
                carac3: "Amigável"
            },
            redesSociais: {
                instagram: "thiagoalves",
                twitter: "thiagoalves",
                facebook: "thiagoalves"
            },
            contatos: {
                telefone: 34983667465,
                email: "thiagoalves@email.com"
            },
            foto: "https://randomuser.me/api/portraits/men/95.jpg"
        },
        {
            id: 9,
            nome: "Diana",
            sobrenome: "Michele",
            login: "dianamichele",
            senha: "1234",
            endereco: {
                rua: "Rua Taribau",
                numero: 450,
                complemento: "Apto 1001",
                bairro: "Santo André",
                cidade: "Betim",
                estado: "MG"
            },
            biografia: "Sou veterinária e gosto de eventos onde a gente pode levar os bichinhos. Meus cachorros são como se fossem os meus filhos!",
            gostos: {
                gosto1: "Animais",
                gosto2: "Corrida",
                gosto3: "Vôlei"
            },
            idade: 26,
            caracteristicas: {
                carac1: "Tímida",
                carac2: "Introvertida",
                carac3: "Amigável"
            },
            redesSociais: {
                instagram: "dianamichele",
                twitter: "dianamichele",
                facebook: "dianamichele"
            },
            contatos: {
                telefone: 34994161616,
                email: "dianamichele@email.com"
            },
            foto: "https://randomuser.me/api/portraits/women/45.jpg"
        },
        {
            id: 10,
            nome: "Victor",
            sobrenome: "Nunes",
            login: "victornunes",
            senha: "1234",
            endereco: {
                rua: "Rua Xangrilá",
                numero: 150,
                complemento: "",
                bairro: "Vitoriano",
                cidade: "Ribeirão das Neves",
                estado: "MG"
            },
            biografia: "Gosto muito de tecnologia e de futebol. Qualquer rolê que envolva qualquer uma dessas coisa, eu já topo!",
            gostos: {
                gosto1: "Tecnologia",
                gosto2: "Futebol",
                gosto3: "Basquete"
            },
            idade: 19,
            caracteristicas: {
                carac1: "Tímido",
                carac2: "Tranquilo",
                carac3: "Amigável"
            },
            redesSociais: {
                instagram: "victornunes",
                twitter: "victornunes",
                facebook: "victornunes"
            },
            contatos: {
                telefone: 32998271415,
                email: "victornunes@email.com"
            },
            foto: "https://randomuser.me/api/portraits/men/13.jpg"
        },
        {
            id: 11,
            nome: "Marina",
            sobrenome: "Drummond",
            login: "marinadrummond",
            senha: "1234",
            endereco: {
                rua: "Rua Capanarama",
                numero: 850,
                complemento: "Apto 503",
                bairro: "Belvedere",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            biografia: "Se eu pudesse, sairia todos os dias. Não gosto muito de trabalhar, acho muito maçante. Só se vive uma vez!",
            gostos: {
                gosto1: "Balada",
                gosto2: "Música",
                gosto3: "Dançar"
            },
            idade: 19,
            caracteristicas: {
                carac1: "Extrovertida",
                carac2: "Animada",
                carac3: "Ansiosa"
            },
            redesSociais: {
                instagram: "maridrummond",
                twitter: "maridrummond",
                facebook: "maridrummond"
            },
            contatos: {
                telefone: 31999887766,
                email: "maridrummond@email.com"
            },
            foto: "https://randomuser.me/api/portraits/women/48.jpg"
        },
        {
            id: 12,
            nome: "Pedro",
            sobrenome: "Lobo",
            login: "pedrolobo",
            senha: "1234",
            endereco: {
                rua: "Rua Sergipe",
                numero: 4114,
                complemento: "Apto 201",
                bairro: "Savassi",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            biografia: "Terminei o meu namoro recentemente e quero voltar a sair mais e conhecer gente nova. Aquela vida de só ficar em casa não tava dando mais...",
            gostos: {
                gosto1: "Balada",
                gosto2: "Música",
                gosto3: "Bebidas"
            },
            idade: 18,
            caracteristicas: {
                carac1: "Extrovertido",
                carac2: "Amigável",
                carac3: "Companheiro"
            },
            redesSociais: {
                instagram: "pedroloboo",
                twitter: "pedroloboo",
                facebook: "pedroloboo"
            },
            contatos: {
                telefone: 31997769523,
                email: "pedroloboo@email.com"
            },
            foto: "https://randomuser.me/api/portraits/men/9.jpg"
        },
        {
            id: 13,
            nome: "Marcelo",
            sobrenome: "Henrique",
            login: "marcelohenrique",
            senha: "1234",
            endereco: {
                rua: "Rua Amadeus",
                numero: 904,
                complemento: "",
                bairro: "Horto",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            biografia: "Sou um cara tranquilo que gosta de ler, escrever e sair com os amigos. Qualquer rolê mais de boa é a minha praia!",
            gostos: {
                gosto1: "Leitura",
                gosto2: "Música",
                gosto3: "Bebidas"
            },
            idade: 28,
            caracteristicas: {
                carac1: "Tímido",
                carac2: "Tranquilo",
                carac3: "Companheiro"
            },
            redesSociais: {
                instagram: "marcelhenri",
                twitter: "marcelhenri",
                facebook: "marcelhenri"
            },
            contatos: {
                telefone: 31972601515,
                email: "marcelhenri@email.com"
            },
            foto: "https://randomuser.me/api/portraits/men/99.jpg"
        },
        {
            id: 14,
            nome: "Oscar",
            sobrenome: "Álvaro",
            login: "oscaralvaro",
            senha: "1234",
            endereco: {
                rua: "Rua Amedeperre",
                numero: 1120,
                complemento: "",
                bairro: "Cidade Nova",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            biografia: "Estou querendo variar um pouco os rolês que eu frequento. Curto ambientes mais animados e com muita gente!",
            gostos: {
                gosto1: "Balada",
                gosto2: "Música",
                gosto3: "Churrasco"
            },
            idade: 19,
            caracteristicas: {
                carac1: "Extrovertido",
                carac2: "Tranquilo",
                carac3: "Amigável"
            },
            redesSociais: {
                instagram: "oscaralvaro",
                twitter: "oscaralvaro",
                facebook: "oscaralvaro"
            },
            contatos: {
                telefone: 31999998888,
                email: "oscaralvaro@email.com"
            },
            foto: "https://randomuser.me/api/portraits/men/76.jpg"
        },
        {
            id: 15,
            nome: "Carla",
            sobrenome: "Fontoura",
            login: "carlafontoura",
            senha: "1234",
            endereco: {
                rua: "Rua Padre Belchior",
                numero: 420,
                complemento: "Apto 401",
                bairro: "Ouro Preto",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            biografia: "Não gosto muito de sair de casa. Prefiro os rolês mais caseiros quando saio, tipo ir na casa dos amigos para ver um filme ou coisa do tipo...",
            gostos: {
                gosto1: "Cinema",
                gosto2: "Música",
                gosto3: "Teatro"
            },
            idade: 19,
            caracteristicas: {
                carac1: "Calma",
                carac2: "Engraçada",
                carac3: "Amigável"
            },
            redesSociais: {
                instagram: "fontouracarla",
                twitter: "fontouracarla",
                facebook: "fontouracarla"
            },
            contatos: {
                telefone: 31987459129,
                email: "fontouracarla@email.com"
            },
            foto: "https://randomuser.me/api/portraits/women/86.jpg"
        },
        {
            id: 16,
            nome: "Ana",
            sobrenome: "Carolina",
            login: "anacarolina",
            senha: "1234",
            endereco: {
                rua: "Rua Jorge Amado",
                numero: 871,
                complemento: "",
                bairro: "Aurora",
                cidade: "Contagem",
                estado: "MG"
            },
            biografia: "Gosto de sair para eventos de rua, como rolês culturais e bloquinhos de carnaval. Não curto muito ir para lugares caros ou fechados.",
            gostos: {
                gosto1: "Cinema",
                gosto2: "Música",
                gosto3: "Teatro"
            },
            idade: 24,
            caracteristicas: {
                carac1: "Calma",
                carac2: "Engraçada",
                carac3: "Amigável"
            },
            redesSociais: {
                instagram: "carolinaana",
                twitter: "carolinaana",
                facebook: "carolinaana"
            },
            contatos: {
                telefone: 3198765432,
                email: "carolinaana@email.com"
            },
            foto: "https://randomuser.me/api/portraits/women/24.jpg"
        },
        {
            id: 17,
            nome: "Lívia",
            sobrenome: "Lázaro",
            login: "livialazaro",
            senha: "1234",
            endereco: {
                rua: "Rua Violeta",
                numero: 87,
                complemento: "",
                bairro: "Esplanada",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            biografia: "Entrei na faculdade agora e quero conhecer pessoas novas. Gosto de todo tipo de evento e música, então é só chamar!",
            gostos: {
                gosto1: "Balada",
                gosto2: "Teatro",
                gosto3: "Barzinho"
            },
            idade: 18,
            caracteristicas: {
                carac1: "Extrovertida",
                carac2: "Sociável",
                carac3: "Calma"
            },
            redesSociais: {
                instagram: "lililazar",
                twitter: "lililazar",
                facebook: "lililazar"
            },
            contatos: {
                telefone: 31997888541,
                email: "lililazar@email.com"
            },
            foto: "https://randomuser.me/api/portraits/women/77.jpg"
        },
        {
            id: 18,
            nome: "Beatriz",
            sobrenome: "Sousa",
            login: "biasouza",
            senha: "1234",
            endereco: {
                rua: "Rua 28 de Março",
                numero: 687,
                complemento: "",
                bairro: "Pompéia",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            biografia: "Estou morando sozinha em BH e quero muito fazer novos amigos. Gosto de qualquer tipo de rolê, desde que não tenha tanta bebida!",
            gostos: {
                gosto1: "Corrida",
                gosto2: "Praia",
                gosto3: "Cinema"
            },
            idade: 28,
            caracteristicas: {
                carac1: "Engraçada",
                carac2: "Sociável",
                carac3: "Calma"
            },
            redesSociais: {
                instagram: "biasouza",
                twitter: "biasouza",
                facebook: "biasouza"
            },
            contatos: {
                telefone: 31984562129,
                email: "biasouza@email.com"
            },
            foto: "https://randomuser.me/api/portraits/women/53.jpg"
        },
        {
            id: 19,
            nome: "Túlio",
            sobrenome: "Henrique",
            login: "tuliohenrique",
            senha: "1234",
            endereco: {
                rua: "Rua Tino Marcos",
                numero: 700,
                complemento: "Apto 101",
                bairro: "União",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            biografia: "Gosto de sair pra tocar com meus amigos e fazer alguns shows. Quem quiser ir nos nossos ensaios, é só me adicionar por aqui!",
            gostos: {
                gosto1: "Música",
                gosto2: "Comida",
                gosto3: "Cinema"
            },
            idade: 25,
            caracteristicas: {
                carac1: "Tranquilo",
                carac2: "Engraçado",
                carac3: "Calmo"
            },
            redesSociais: {
                instagram: "tulinhenrique",
                twitter: "tulinhenrique",
                facebook: "tulinhenrique"
            },
            contatos: {
                telefone: 31992234662,
                email: "tulinhenrique@email.com"
            },
            foto: "https://randomuser.me/api/portraits/men/13.jpg"
        },
        {
            id: 20,
            nome: "Isabela",
            sobrenome: "Tamires",
            login: "isabelatamires",
            senha: "1234",
            endereco: {
                rua: "Rua Rafael Brandão",
                numero: 820,
                complemento: "Apto 901",
                bairro: "Buritis",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            biografia: "Gosto de praticar esportes e participar de competições de crossfit. Estou querendo encontrar mais pessoas que animem esses tipos de rolês!",
            gostos: {
                gosto1: "Esportes",
                gosto2: "Comida",
                gosto3: "Teatro"
            },
            idade: 26,
            caracteristicas: {
                carac1: "Extrovertida",
                carac2: "Saudável",
                carac3: "Calma"
            },
            redesSociais: {
                instagram: "isatamiress",
                twitter: "isatamiress",
                facebook: "isatamiress"
            },
            contatos: {
                telefone: 31997885623,
                email: "isatamiress@email.com"
            },
            foto: "https://randomuser.me/api/portraits/women/14.jpg"
        }
    ]
};

const dbMelhoresAmigos = {
    "users": []
}

const dbRolesGeral = {
    "roles": [
        {
            id: 1,
            nome: "Ensaio de Carnaval - Volta, Belchior!",
            endereco: {
                rua: "Rua Alvinópolis",
                numero: 408,
                complemento: "",
                bairro: "Santa Tereza",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            data: {
                dia: 21,
                mes: 12,
                ano: 2022
            },
            descricao: "Um dos blocos mais tradicionais do carnaval belo-horizontino já está se preparando para desfilar no início do ano que vem. Acompanhe o nosso ensaio!",
            avaliacao: "★★★★☆",
            filtros: {
                faixaetaria: 0,
                preco: 15,
                organizador: "Camila Oliveira",
                categoria: "Festas e Shows"
            },
            imagens: {
                capa: "imgs/roles/role-00.jpg",
                foto1: "imgs/roles/role-00-01.jpg",
                foto2: "imgs/roles/role-00-02.jpg",
                foto3: "imgs/roles/role-00-03.jpg"
            },
            contatos: {
                telefone: 988776655,
                instagram: "instagram.com/voltabelchior",
                email: "voltabelchior@email.com",
                facebook: "facebook.com/voltabelchior"
            }
        },
        {
            id: 2,
            nome: "Cervejada do Barba Azul",
            endereco: {
                rua: "Av. Getúlio Vargas",
                numero: 216,
                complemento: "",
                bairro: "Funcionários",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            data: {
                dia: 13,
                mes: 12,
                ano: 2022
            },
            descricao: "Traga um grupo de, no mínimo, dez amigos e receba uma torre de chopp grátis. Promoção válida apenas hoje!",
            avaliacao: "★★★★☆",
            filtros: {
                faixaetaria: 18,
                preco: 0,
                organizador: "Reginaldo Lima",
                categoria: "Gastronomia"
            },
            imagens: {
                capa: "imgs/roles/role-01.jpg",
                foto1: "imgs/roles/role-01-01.jpg",
                foto2: "imgs/roles/role-01-02.jpg",
                foto3: "imgs/roles/role-01-03.jpg"
            },
            contatos: {
                telefone: 994218616,
                instagram: "instagram.com/barbaazul",
                email: "barbaazul@email.com",
                facebook: "facebook.com/barbaazul"
            }
        },
        {
            id: 3,
            nome: "Festival de Pastel",
            endereco: {
                rua: "Rua São Gotardo",
                numero: 273,
                complemento: "",
                bairro: "Santa Tereza",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            data: {
                dia: 06,
                mes: 12,
                ano: 2022
            },
            descricao: "Se você quer comer um pastel e tomar um caldo de cana, aqui é o lugar certo! Quem não gosta, é maluco.",
            avaliacao: "★★★★★",
            filtros: {
                faixaetaria: 0,
                preco: 20,
                organizador: "Beatriz Souza",
                categoria: "Gastronomia"
            },
            imagens: {
                capa: "imgs/roles/role-02.jpg",
                foto1: "imgs/roles/role-02-01.jpg",
                foto2: "imgs/roles/role-02-02.jpg",
                foto3: "imgs/roles/role-02-03.jpg"
            },
            contatos: {
                telefone: 992140505,
                instagram: "instagram.com/festivalpastel",
                email: "festivalpastel@email.com",
                facebook: "facebook.com/festivalpastel"
            }
        },
        {
            id: 4,
            nome: "Samba no Quintal",
            endereco: {
                rua: "Av. Dom Pedro II",
                numero: 3608,
                complemento: "",
                bairro: "Jardim Montanhês",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            data: {
                dia: 07,
                mes: 12,
                ano: 2022
            },
            descricao: "Venha esfriar a cabeça dessa semana estressante escutando um sambinha de qualidade!",
            avaliacao: "★★★★☆",
            filtros: {
                faixaetaria: 18,
                preco: 65,
                organizador: "Júlia Rocha",
                categoria: "Festas e Shows"
            },
            imagens: {
                capa: "imgs/roles/role-03.jpg",
                foto1: "imgs/roles/role-03-01.jpg",
                foto2: "imgs/roles/role-03-02.jpg",
                foto3: "imgs/roles/role-03-03.jpg"
            },
            contatos: {
                telefone: 999881122,
                instagram: "instagram.com/juliarocha",
                email: "juliarocha@email.com",
                facebook: "facebook.com/juliarocha"
            }
        },
        {
            id: 5,
            nome: "Velório do Porco",
            endereco: {
                rua: "Av. 28 de Setembro",
                numero: 862,
                complemento: "",
                bairro: "Esplanada",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            data: {
                dia: 21,
                mes: 12,
                ano: 2022
            },
            descricao: "Marque presença no nosso evento anual de Velório do Porco. Depois de dois anos parados por causa da pandemia, voltamos!",
            avaliacao: "★★★★☆",
            filtros: {
                faixaetaria: 18,
                preco: 80,
                organizador: "Reginaldo Lima",
                categoria: "Gastronomia"
            },
            imagens: {
                capa: "imgs/roles/role-04.jpg",
                foto1: "imgs/roles/role-04-01.jpg",
                foto2: "imgs/roles/role-04-02.jpg",
                foto3: "imgs/roles/role-04-03.jpg"
            },
            contatos: {
                telefone: 993145162,
                instagram: "instagram.com/regisbar",
                email: "regisbar@email.com",
                facebook: "facebook.com/regisbar"
            }
        },
        {
            id: 6,
            nome: "Corrida em Grupo",
            endereco: {
                rua: "Av. José Cândido da Silveira",
                numero: 300,
                complemento: "",
                bairro: "Cidade Nova",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            data: {
                dia: 14,
                mes: 12,
                ano: 2022
            },
            descricao: "Estou pensando em organizar um grupo para correr ao ar livre toda semana. Quem tiver interesse, só colar!",
            avaliacao: "★☆☆☆☆",
            filtros: {
                faixaetaria: 0,
                preco: 0,
                organizador: "Raíssa Matoso",
                categoria: "Esportes"
            },
            imagens: {
                capa: "imgs/roles/role-05.jpg",
                foto1: "imgs/roles/role-05-01.jpg",
                foto2: "imgs/roles/role-05-02.jpg",
                foto3: "imgs/roles/role-05-03.jpg"
            },
            contatos: {
                telefone: 998411625,
                instagram: "instagram.com/raissacorredora",
                email: "raissacorredora@email.com",
                facebook: "facebook.com/raissacorredora"
            }
        },
        {
            id: 7,
            nome: "Campeonato - Pelada Zona Leste",
            endereco: {
                rua: "Rua Boninas",
                numero: 845,
                complemento: "",
                bairro: "Esplanada",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            data: {
                dia: 08,
                mes: 12,
                ano: 2022
            },
            descricao: "Estou pensando em organizar um grupo para correr ao ar livre toda semana. Quem tiver interesse, só colar!",
            avaliacao: "★★★☆☆",
            filtros: {
                faixaetaria: 18,
                preco: 60,
                organizador: "Lúcio Emiliano",
                categoria: "Esportes"
            },
            imagens: {
                capa: "imgs/roles/role-06.jpg",
                foto1: "imgs/roles/role-06-01.jpg",
                foto2: "imgs/roles/role-06-02.jpg",
                foto3: "imgs/roles/role-06-03.jpg"
            },
            contatos: {
                telefone: 986696452,
                instagram: "instagram.com/peladazonaleste",
                email: "peladazonaleste@email.com",
                facebook: "facebook.com/peladazonaleste"
            }
        },
        {
            id: 8,
            nome: "Festival da Cachaça",
            endereco: {
                rua: "Av. Amazonas",
                numero: 6200,
                complemento: "",
                bairro: "Gameleira",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            data: {
                dia: 12,
                mes: 12,
                ano: 2022
            },
            descricao: "As melhores cachaças de Minas Gerais, todas reuinidas em um só lugar. Venha conferir e degustar!",
            avaliacao: "★★★★★",
            filtros: {
                faixaetaria: 18,
                preco: 105,
                organizador: "Expominas BH",
                categoria: "Gastronomia"
            },
            imagens: {
                capa: "imgs/roles/role-07.jpg",
                foto1: "imgs/roles/role-07-01.jpg",
                foto2: "imgs/roles/role-07-02.jpg",
                foto3: "imgs/roles/role-07-03.jpg"
            },
            contatos: {
                telefone: 997769126,
                instagram: "instagram.com/expominasbh",
                email: "expominasbh@email.com",
                facebook: "facebook.com/expominasbh"
            }
        },
        {
            id: 9,
            nome: "Festival Tropical na Pampulha",
            endereco: {
                rua: "Rua Expedicionário Celso Racioppi",
                numero: 185,
                complemento: "",
                bairro: "São Luiz",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            data: {
                dia: 27,
                mes: 12,
                ano: 2022
            },
            descricao: "O melhor Festival Tropical de Belo Horizonte está de volta. Não perca de jeito nenhum!",
            avaliacao: "★★★☆☆",
            filtros: {
                faixaetaria: 18,
                preco: 230,
                organizador: "Esther Sabino",
                categoria: "Festas e Shows"
            },
            imagens: {
                capa: "imgs/roles/role-08.jpg",
                foto1: "imgs/roles/role-08-01.jpg",
                foto2: "imgs/roles/role-08-02.jpg",
                foto3: "imgs/roles/role-08-03.jpg"
            },
            contatos: {
                telefone: 972354619,
                instagram: "instagram.com/festivaltropical",
                email: "festivaltropical@email.com",
                facebook: "facebook.com/festivaltropical"
            }
        },
        {
            id: 10,
            nome: "Aniversário da Duda",
            endereco: {
                rua: "Rua dos Guajajaras",
                numero: 842,
                complemento: "",
                bairro: "Centro",
                cidade: "Belo Horizonte",
                estado: "MG"
            },
            data: {
                dia: 17,
                mes: 12,
                ano: 2022
            },
            descricao: "Vou comemorar meu aniversário na Major e tá todo mundo convidado!",
            avaliacao: "★★★☆☆",
            filtros: {
                faixaetaria: 18,
                preco: 100,
                organizador: "Maria Eduarda",
                categoria: "Festas e Shows"
            },
            imagens: {
                capa: "imgs/roles/role-09.jpg",
                foto1: "imgs/roles/role-09-01.jpg",
                foto2: "imgs/roles/role-09-02.jpg",
                foto3: "imgs/roles/role-09-03.jpg"
            },
            contatos: {
                telefone: 992145166,
                instagram: "instagram.com/duda1996",
                email: "duda1996@email.com",
                facebook: "facebook.com/duda1996"
            }
        }
    ]
}

const dbRolesFavoritos = {
    "roles": []
}

//
//
//
//
//

// FUNÇÃO PARA O CAMPO DE PESQUISA DO HEADER

let barraPesquisaHeader = document.querySelector('.barra--pesquisa');

barraPesquisaHeader.addEventListener('submit', (event) => {
    if (document.querySelector('#input-pesquisa').value.length < 1) {
        event.preventDefault();
    }
});

// FUNÇÕES PARA EXIBIR OS USUÁRIOS E AMIGOS

function exibeAmigosPainelLateral() {
    let str = '';

    let objDadosMelhoresAmigos = leituraDadosDbMelhoresAmigos();

    for (let i = 0; i < objDadosMelhoresAmigos.users.length; i++) {
        let userItem = objDadosMelhoresAmigos.users[i];

        str += `<div class="campo-amigos--item-amigo">
                    <div class="item-amigo--perfil-foto">
                        <img src="${userItem.foto}" alt="Foto de perfil">
                    </div>
                    <div class="item-amigo--perfil-nome">
                        <a href="usuario.html?id=${userItem.id}" rel="noopener noreferrer"><p>${userItem.nome} ${userItem.sobrenome}</p></a>
                    </div>
                </div>`;
    }

    document.querySelector('.offcanvas-body--campo-amigos').innerHTML = str;
}

function exibeMelhoresAmigos() {
    let str = ``;

    let objDadosMelhoresAmigos = leituraDadosDbMelhoresAmigos();

    if (objDadosMelhoresAmigos.users.length > 0) {
        for (let i = 0; i < objDadosMelhoresAmigos.users.length; i++) {
            let userItem = objDadosMelhoresAmigos.users[i];

            str += `<div class="campo-amigos--item-amigo">
                        <div class="item-amigo--perfil-foto">
                            <img src="${userItem.foto}" alt="Foto de perfil">
                        </div>
                        <div class="item-amigo--perfil-nome">
                            <a href="usuario.html?id=${userItem.id}" rel="noopener noreferrer"><p>${userItem.nome} ${userItem.sobrenome}</p></a>
                        </div>

                        <div class="item-amigo--botao-remover">
                        <button id="btnRemover" type="button" value="${userItem.id}" onclick="removerContato(${userItem.id}, ${[i]})"><i class="fa-solid fa-user-minus"></i></button>
                        </div>
                    </div>`;
        }
    } else {
        str = `<p class="coluna--melhores-amigos-texto-negativo">Nenhum amigo encontrado!</p>
                <div class="coluna--melhores-amigos-resultado-negativo">
                    <img src="imgs/no-friend.png" alt="Nenhum amigo encontrado">
                </div>`;
    }

    document.querySelector('#telaMelhoresAmigos').innerHTML = str;
}

function exibeUsuariosGeral() {
    let str = '';

    let objDadosUsuarios = leituraDadosDbUsuarios();

    for (let i = 0; i < objDadosUsuarios.users.length; i++) {
        let userItem = objDadosUsuarios.users[i];

        if(usuarioCorrente.nome!=userItem.nome && usuarioCorrente.sobrenome!=userItem.sobrenome) {

            str += `<div class="campo-amigos--item-amigo">
            <div class="item-amigo--perfil-foto">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal${[i]}"><img src="${userItem.foto}" alt="Foto de perfil"></a>
            </div>
            <div class="item-amigo--perfil-nome">
                <a href="usuario.html?id=${[i]}" rel="noopener noreferrer"><p>${userItem.nome} ${userItem.sobrenome}</p></a>
            </div>
            
            <div class="item-amigo--botao-adicionar">
            <button id="btnAdicionar${[i]}" type="button" value="${[i]}" onclick="incluirItemMelhorAmigo(${[i]})"><i class="fa-solid fa-user-plus"></i> Adicionar</button>
            </div>
            </div>
            
            <div class="modal fade" id="exampleModal${[i]}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Resumo do Perfil:</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body--perfil-imagem">
                            <img src="${userItem.foto}" alt="Foto de perfil">
                        </div>
                        
                        <div class="modal-body--perfil-descricao-infos">
                            <h5 style="display: block; margin-bottom: 10px;">${userItem.nome} ${userItem.sobrenome}</h5>
                            <p style="color: var(--vermelho-letras); font-weight: 600;">${userItem.endereco.cidade}</p>
                            <p>${userItem.contatos.telefone}</p>
                            <p style="color: var(--vermelho-letras);">${userItem.contatos.email}</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a href="usuario.html?id=${[i]}" rel="noopener noreferrer"><button type="button" class="btn btn-warning">Ver Perfil Completo</button></a>
                    </div>
                    </div>
                </div>
            </div>`;

        }
    }

    document.querySelector('#telaUsuariosGeral').innerHTML = str;
}

//
//
//
//
//

// CAMPOS DE PESQUISA NOS NOMES DE USUÁRIOS E AMIGOS

function pesquisaAmigosPainelLateral(nomeuser) {
    console.log(nomeuser);

    let str = '';
    let filter = nomeuser.toUpperCase();
    let objDadosMelhoresAmigos = leituraDadosDbMelhoresAmigos();

    for (let i = 0; i < objDadosMelhoresAmigos.users.length; i++) {
        let userItem = objDadosMelhoresAmigos.users[i];
        txtValue = userItem.nome;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            str += `<div class="campo-amigos--item-amigo">
                        <div class="item-amigo--perfil-foto">
                            <img src="${userItem.foto}" alt="Foto de perfil">
                        </div>
                        <div class="item-amigo--perfil-nome">
                            <a href="usuario.html?id=${userItem.id}" rel="noopener noreferrer"><p>${userItem.nome} ${userItem.sobrenome}</p></a>
                        </div>
                    </div>`;
        } else {
            exibeAmigosPainelLateral();
        }
    }

    document.querySelector('.offcanvas-body--campo-amigos').innerHTML = str;
}

function pesquisaMelhoresAmigos(nomeuser) {
    console.log(nomeuser);

    let str = '';
    let filter = nomeuser.toUpperCase();
    let objDadosMelhoresAmigos = leituraDadosDbMelhoresAmigos();

    for (let i = 0; i < objDadosMelhoresAmigos.users.length; i++) {
        let userItem = objDadosMelhoresAmigos.users[i];
        txtValue = userItem.nome;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            str += `<div class="campo-amigos--item-amigo">
                        <div class="item-amigo--perfil-foto">
                            <img src="${userItem.foto}" alt="Foto de perfil">
                        </div>
                        <div class="item-amigo--perfil-nome">
                            <a href="usuario.html?id=${userItem.id}" rel="noopener noreferrer"><p>${userItem.nome} ${userItem.sobrenome}</p></a>
                        </div>

                        <div class="item-amigo--botao-remover">
                        <button id="btnRemover" type="button" value="${userItem.id}" onclick="removerContato(${userItem.id}, ${[i]})"><i class="fa-solid fa-user-minus"></i></button>
                        </div>
                    </div>`;
        } else {
            exibeMelhoresAmigos();
        }
    }

    document.querySelector('#telaMelhoresAmigos').innerHTML = str;
}

function pesquisaUsuarioGeral(nomeuser) {

    let str = '';
    let filter = nomeuser.toUpperCase();
    let objDadosUsuarios = leituraDadosDbUsuarios();

    for (let i = 0; i < objDadosUsuarios.users.length; i++) {
        let userItem = objDadosUsuarios.users[i];
        txtValue = userItem.nome;
        if (txtValue.toUpperCase().indexOf(filter) > -1 && (usuarioCorrente.nome!=userItem.nome && usuarioCorrente.sobrenome!=userItem.sobrenome)) {
            str += `<div class="campo-amigos--item-amigo">
                        <div class="item-amigo--perfil-foto">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal${[i]}"><img src="${userItem.foto}" alt="Foto de perfil"></a>
                        </div>
                        <div class="item-amigo--perfil-nome">
                            <a href="usuario.html?id=${[i]}" rel="noopener noreferrer"><p>${userItem.nome} ${userItem.sobrenome}</p></a>
                        </div>
                        
                        <div class="item-amigo--botao-adicionar">
                        <button id="btnAdicionar${[i]}" type="button" value="${[i]}" onclick="incluirItemMelhorAmigo(${[i]})"><i class="fa-solid fa-user-plus"></i> Adicionar</button>
                        </div>
                        </div>
                        
                        <div class="modal fade" id="exampleModal${[i]}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Resumo do Perfil:</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="modal-body--perfil-imagem">
                                        <img src="${userItem.foto}" alt="Foto de perfil">
                                    </div>
                                    
                                    <div class="modal-body--perfil-descricao-infos">
                                        <h5 style="display: block; margin-bottom: 10px;">${userItem.nome} ${userItem.sobrenome}</h5>
                                        <p style="color: var(--vermelho-letras); font-weight: 600;">${userItem.endereco.cidade}</p>
                                        <p>${userItem.contatos.telefone}</p>
                                        <p style="color: var(--vermelho-letras);">${userItem.contatos.email}</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <a href="usuario.html?id=${[i]}" rel="noopener noreferrer"><button type="button" class="btn btn-warning">Ver Perfil Completo</button></a>
                                </div>
                                </div>
                            </div>
                        </div>`;
        } else {
            exibeUsuariosGeral();
        }
    }

    document.querySelector('#telaUsuariosGeral').innerHTML = str;
}

//
//
//
//
//

// FUNÇÕES PARA O LOCAL STORAGE DE USUÁRIOS

function leituraDadosDbUsuarios() {
    let strDados = localStorage.getItem('dbUsers');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = dbUsuarios;
    }

    return objDados;
}

function salvaDadosDbUsuarios(dados) {
    localStorage.setItem('dbUsers', JSON.stringify(dados));
}

function incluirContato(nome, sobrenome, login, email, senha, rua, numero, complemento, bairro, cidade, estado, telefone, twitter, instagram, facebook, imagem) {
    // Ler os dados do localStorage
    let objDados = leituraDadosDbUsuarios();

    let num = objDados.users.length;

    // Incluir um novo contato
    let novoContato = {
        id: (num + 1),
        nome: nome,
        sobrenome: sobrenome,
        login: login,
        senha: senha,
        endereco: {
            rua: rua,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            estado: estado
        },
        biografia: "Sou um novo usuário!",
        gostos: {
            gosto1: "Novo",
            gosto2: "Novo",
            gosto3: "Novo"
        },
        idade: 18,
        caracteristicas: {
            carac1: "Nova",
            carac2: "Nova",
            carac3: "Nova"
        },
        redesSociais: {
            instagram: instagram,
            twitter: twitter,
            facebook: facebook
        },
        contatos: {
            telefone: telefone,
            email: email
        },
        foto: imagem
    };
    objDados.users.push(novoContato);

    // Salvar os dados no localStorage novamente
    salvaDadosDbUsuarios(objDados);
}

//
//
//
//
//

// FUNÇÕES PARA O LOCAL STORAGE DE MELHORES AMIGOS

function leituraDadosDbMelhoresAmigos() {
    let strDados = localStorage.getItem('dbBestFriends');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    } else {
        objDados = dbMelhoresAmigos;
    }

    return objDados;
}

function salvaDadosDbMelhoresAmigos(dados) {
    localStorage.setItem('dbBestFriends', JSON.stringify(dados));
}

function incluirItemMelhorAmigo(pos) {
    // Ler os dados do localStorage
    let objDados = leituraDadosDbMelhoresAmigos();

    let dbUsuarios = leituraDadosDbUsuarios();

    // Incluir um novo contato
    let novoAmigo = {
        id: pos,
        nome: dbUsuarios.users[pos].nome,
        sobrenome: dbUsuarios.users[pos].sobrenome,
        login: dbUsuarios.users[pos].login,
        endereco: {
            rua: dbUsuarios.users[pos].endereco.rua,
            numero: dbUsuarios.users[pos].endereco.numero,
            complemento: dbUsuarios.users[pos].endereco.complemento,
            bairro: dbUsuarios.users[pos].endereco.bairro,
            cidade: dbUsuarios.users[pos].endereco.cidade,
            estado: dbUsuarios.users[pos].endereco.estado
        },
        biografia: dbUsuarios.users[pos].biografia,
        gostos: {
            gosto1: dbUsuarios.users[pos].gostos.gosto1,
            gosto2: dbUsuarios.users[pos].gostos.gosto2,
            gosto3: dbUsuarios.users[pos].gostos.gosto3
        },
        idade: dbUsuarios.users[pos].idade,
        caracteristicas: {
            carac1: dbUsuarios.users[pos].caracteristicas.carac1,
            carac2: dbUsuarios.users[pos].caracteristicas.carac2,
            carac3: dbUsuarios.users[pos].caracteristicas.carac3
        },
        redesSociais: {
            instagram: dbUsuarios.users[pos].redesSociais.instagram,
            twitter: dbUsuarios.users[pos].redesSociais.twitter,
            facebook: dbUsuarios.users[pos].redesSociais.facebook
        },
        contatos: {
            telefone: dbUsuarios.users[pos].contatos.telefone,
            email: dbUsuarios.users[pos].contatos.email
        },
        foto: dbUsuarios.users[pos].foto
    };

    objDados.users.push(novoAmigo);

    // Salvar os dados no localStorage novamente
    salvaDadosDbMelhoresAmigos(objDados);

    // Atualizar
    exibeMelhoresAmigos();

    // Altera estado do botão
    alteraBotao(pos);

    exibeAmigosPainelLateral();
}

//
//
//
//
//

// BOTÕES DE ADICIONAR E REMOVER CONTATO

function alteraBotao(pos) {
    $('#btnAdicionar' + pos).html(`<i class="fa-solid fa-check"></i> Adicionado`);
    $('#btnAdicionar' + pos).prop("disabled", true);
}

function removerContato(pos, id) {
    let objDados = leituraDadosDbMelhoresAmigos();

    objDados.users.splice(id, 1);

    retornaBotao(pos);

    // Salvar os dados no localStorage novamente
    salvaDadosDbMelhoresAmigos(objDados);

    // Atualiza
    exibeMelhoresAmigos();

    exibeAmigosPainelLateral();
}

function retornaBotao(pos) {
    $('#btnAdicionar' + pos).html(`<i class="fa-solid fa-user-plus"></i> Adicionar`);
    $('#btnAdicionar' + pos).prop("disabled", false);
}

/* Conferir usuários adicionados */

function confereUsuariosAdicionados() {

    let objDados = leituraDadosDbUsuarios();
    let objDadosMelhoresAmigos = leituraDadosDbMelhoresAmigos();
    let j;
    let i;

    for (j = 0; j < objDadosMelhoresAmigos.users.length; j++) {
        for (i = 0; i < objDados.users.length; i++) {
            let userMelhorAmigoItem = objDadosMelhoresAmigos.users[j];
            let userItem = objDados.users[i];

            if (userMelhorAmigoItem.nome == userItem.nome) {
                alteraBotao(i);
            }
        }
    }
}

//
//
//
//
//

/* || PÁGINA DE PERFIL DO USUÁRIO || */

function exibePerfilUsuario(id) {

    let objDadosUsuarios = leituraDadosDbUsuarios();
    let userItem = objDadosUsuarios.users[id];

    let ttl = `Perfil Usuário - ${userItem.nome}`;

    let str = `<div class="row">
                    <div class="col-4">
                        <div class="perfil-usuario--foto-perfil">
                            <img src="${userItem.foto}" alt="Foto de perfil do usuário">
                        </div>
                    </div>
                    <div class="col-8 perfil-usuario--coluna-infos">
                        <div class="perfil-usuario--infos-gerais">
                            <h1>${userItem.nome}</h1>
                            <p style="color: var(--vermelho-letras); font-weight: 600;">${userItem.endereco.cidade}</p>
                            <p style="font-weight: 200; margin-bottom: 0; text-align: justify;">${userItem.biografia}</p>
                        </div>

                        <div class="perfil-usuario--contatos-gerais">
                            <a href="mailto:${userItem.contatos.email}"><button><i class="fa-solid fa-envelope"></i>Mensagem</button></a>
                        </div>

                        <div class="perfil-usuario--botoes-feed">
                            <button class="perfil-usuario--botoes-feed--sobre tablink w3-red"
                                onclick="abreAbaInfosUsuario(event, 'abaSobre')"><i
                                    class="fa-solid fa-user"></i>Sobre</button><button
                                class="perfil-usuario--botoes-feed--recados tablink"
                                onclick="abreAbaInfosUsuario(event, 'abaRecados')"><i
                                    class="fa-solid fa-comment"></i>Recados</button>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-4 perfil-usuario--infos-detalhadas">
                        <div class="perfil-usuario--lista-infos-detalhadas">
                            <div class="perfil-usuario--lista-infos-detalhadas--titulo">
                                <h6
                                    style="font-size: 16px; font-weight: 600; margin-bottom: 0.5rem; text-transform: uppercase; color: var(--cinza-borda);">
                                    Gostos</h6>
                            </div>
                            <p>${userItem.gostos.gosto1}</p>
                            <p>${userItem.gostos.gosto2}</p>
                            <p>${userItem.gostos.gosto3}</p>
                        </div>
                    </div>

                    <div class="col-8 perfil-usuario--sobre-infos">
                        <div id="abaSobre" class="sobre-infos--aba">
                            <div class="perfil-usuario--sobre-infos--contatos">
                                <h6
                                    style="font-size: 14px; font-weight: 600; margin-bottom: 0; text-transform: uppercase; color: var(--cinza-medio); margin-bottom: 15px;">
                                    Informações do Contato:</h6>

                                <div class="col-2" style="display: inline-block;">
                                    <p>Telefone:</p>
                                    <p>Endereço:</p>
                                    <p>Email:</p>
                                </div>

                                <div class="col-9" style="display: inline-block;">
                                    <p style="color: var(--vermelho-letras);">${userItem.contatos.telefone}</p>
                                    <p style="color: var(--vermelho-letras);">${userItem.endereco.rua}, ${userItem.endereco.numero} - ${userItem.endereco.complemento} - ${userItem.endereco.bairro}, ${userItem.endereco.cidade}/${userItem.endereco.estado}</p>
                                    <p style="color: var(--vermelho-letras);">${userItem.contatos.email}</p>
                                </div>
                            </div>

                            <div class="perfil-usuario--sobre-infos--gerais">
                                <h6
                                    style="font-size: 14px; font-weight: 600; margin-bottom: 0; text-transform: uppercase; color: var(--cinza-medio); margin-bottom: 15px; margin-top: 30px;">
                                    Redes Sociais:</h6>

                                <div class="col-2" style="display: inline-block;">
                                    <p>Instagram:</p>
                                    <p>Twitter:</p>
                                    <p>Facebook:</p>
                                </div>

                                <div class="col-8" style="display: inline-block;">
                                    <p style="color: var(--vermelho-letras);">@${userItem.redesSociais.instagram}</p>
                                    <p style="color: var(--vermelho-letras);">@${userItem.redesSociais.twitter}</p>
                                    <p style="color: var(--vermelho-letras);">@${userItem.redesSociais.facebook}</p>
                                </div>
                            </div>
                        </div>

                        <div id="abaRecados" class="sobre-infos--aba" style="display: none;">
                            <div class="perfil-usuario--sobre-infos--recados">
                                <h6
                                    style="font-size: 14px; font-weight: 600; margin-bottom: 0; text-transform: uppercase; color: var(--cinza-medio); margin-bottom: 15px;">
                                    Recados:</h6>
                                    <div class="col-12 pagina--perfil--comentarios">
                                        <div class="pagina--perfil--comentarios--texto">
                                            <textarea name="cmt_perfil" id="cmt_perfil"></textarea>
                                            <button type="submit" class="btn btn-sm btn-dark" id="btn_EnviarCmtPerfil" disabled
                                                onclick="incluirComentarioPerfil(document.getElementById('cmt_perfil').value)">Enviar</button>
                                        </div>
        
                                        <div class="pagina--perfil--comentarios--posts" id="feedCmtPerfil">
                                            
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>`

    document.querySelector('.perfil-usuario').innerHTML = str;
    document.querySelector('title').innerText = ttl;
}

function abreAbaInfosUsuario(evt, abaNome) {
    var i, x, tablinks;
    x = document.getElementsByClassName("sobre-infos--aba");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(abaNome).style.display = "block";
    evt.currentTarget.className += " w3-red";
}

//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//

/* || PÁGINA DE ROLÊS GERAIS || */

// LOCAL STORAGE - ROLÊS GERAIS

function leituraDadosDbRolesGeral() {
    let strDados = localStorage.getItem('dbRoles');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = dbRolesGeral;
    }

    return objDados;
}

function salvaDadosDbRolesGeral(dados) {
    localStorage.setItem('dbRoles', JSON.stringify(dados));
}

function incluirRole(nome, dia, mes, ano, rua, numero, complemento, bairro, cidade, estado, descricao, idade, preco, categoria, telefone, email, instagram, facebook, imagemCapa, imagemEvento1, imagemEvento2, imagemEvento3) {
    // Ler os dados do localStorage
    let objDados = leituraDadosDbRolesGeral();

    let num = objDados.roles.length;

    // Incluir um novo contato
    let novoRole = {
        id: (num + 1),
        nome: nome,
        endereco: {
            rua: rua,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            estado: estado
        },
        data: {
            dia: dia,
            mes: mes,
            ano: ano
        },
        descricao: descricao,
        avaliacao: "☆☆☆☆☆",
        filtros: {
            faixaetaria: idade,
            preco: preco,
            organizador: usuarioCorrente.nome + " " + usuarioCorrente.sobrenome,
            categoria: categoria
        },
        imagens: {
            capa: imagemCapa,
            foto1: imagemEvento1,
            foto2: imagemEvento2,
            foto3: imagemEvento3
        },
        contatos: {
            telefone: telefone,
            instagram: instagram,
            email: email,
            facebook: facebook
        }
    };

    objDados.roles.push(novoRole);

    // Salvar os dados no localStorage novamente
    salvaDadosDbRolesGeral(objDados);
}

//
//
//

// LOCAL STORAGE - ROLÊS FAVORITOS

function leituraDadosDbRolesFavoritos() {
    let strDados = localStorage.getItem('dbFavoritos');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = dbRolesFavoritos;
    }

    return objDados;
}

function salvaDadosDbRolesFavoritos(dados) {
    localStorage.setItem('dbFavoritos', JSON.stringify(dados));
}

function incluirFavorito(pos) {
    // Ler os dados do localStorage
    let objDados = leituraDadosDbRolesFavoritos();

    let dbRolesGeral = leituraDadosDbRolesGeral();

    // Incluir um novo contato
    let novoFavorito = {
        id: pos,
        nome: dbRolesGeral.roles[pos].nome,
        endereco: {
            rua: dbRolesGeral.roles[pos].endereco.rua,
            numero: dbRolesGeral.roles[pos].endereco.numero,
            complemento: dbRolesGeral.roles[pos].endereco.complemento,
            bairro: dbRolesGeral.roles[pos].endereco.bairro,
            cidade: dbRolesGeral.roles[pos].endereco.cidade,
            estado: dbRolesGeral.roles[pos].endereco.estado
        },
        data: {
            dia: dbRolesGeral.roles[pos].data.dia,
            mes: dbRolesGeral.roles[pos].data.mes,
            ano: dbRolesGeral.roles[pos].data.ano
        },
        descricao: dbRolesGeral.roles[pos].descricao,
        avaliacao: dbRolesGeral.roles[pos].avaliacao,
        filtros: {
            faixaetaria: dbRolesGeral.roles[pos].filtros.faixaetaria,
            preco: dbRolesGeral.roles[pos].filtros.preco,
            organizador: dbRolesGeral.roles[pos].filtros.organizador,
            categoria: dbRolesGeral.roles[pos].filtros.categoria
        },
        imagens: {
            capa: dbRolesGeral.roles[pos].imagens.capa,
            foto1: dbRolesGeral.roles[pos].imagens.foto1,
            foto2: dbRolesGeral.roles[pos].imagens.foto2,
            foto3: dbRolesGeral.roles[pos].imagens.foto3
        },
        contatos: {
            telefone: dbRolesGeral.roles[pos].contatos.telefone,
            instagram: dbRolesGeral.roles[pos].contatos.instagram,
            email: dbRolesGeral.roles[pos].contatos.email,
            facebook: dbRolesGeral.roles[pos].contatos.facebook
        }
    };

    objDados.roles.push(novoFavorito);

    // Salvar os dados no localStorage novamente
    salvaDadosDbRolesFavoritos(objDados);

    // Alterar o botão de favorito
    favoritaBotao(pos);
}



//
//
//
//
//



// FUNÇÃO PARA EXIBIR OS ROLÊS
let FILTRO_IDADE = "";
let FILTRO_PRECO = "";
let FILTRO_ORGANIZADOR = "";
let FILTRO_CATEGORIA = "";

function exibeRolesGeral() {
    let str = '';

    let objDadosRoles = leituraDadosDbRolesGeral();
    let objDadosAmigos = leituraDadosDbMelhoresAmigos();
    
    $('#telaNumerosPesquisa').html(``);

    for (let i = 0; i < objDadosRoles.roles.length; i++) {
        let roleItem = objDadosRoles.roles[i];
        if (((FILTRO_IDADE == "") || FILTRO_IDADE == roleItem.filtros.faixaetaria) &&
            ((FILTRO_PRECO == "") || FILTRO_PRECO >= roleItem.filtros.preco) &&
            ((FILTRO_ORGANIZADOR == "") || FILTRO_ORGANIZADOR != "") &&
            ((FILTRO_CATEGORIA == "") || FILTRO_CATEGORIA == roleItem.filtros.categoria)) {

            if (FILTRO_ORGANIZADOR == "Amigo") {
                for (j = 0; j < objDadosAmigos.users.length; j++) {
                    let amigoItem = objDadosAmigos.users[j];


                    if ((amigoItem.nome + " " + amigoItem.sobrenome) == roleItem.filtros.organizador) {

                        str += `<div class="role--card-item">
                                    <div class="role--card-item--imagem">
                                        <a href="evento.html?id=${roleItem.id}"><img src="${roleItem.imagens.capa}" alt="Foto do rolê"></a>
                                    </div>
                                    <div class="role--card-item--infos">
                                        <a href="evento.html?id=${roleItem.id}">
                                            <h3>${roleItem.nome}</h3>
                                        </a>
                                        <a href="evento.html?id=${roleItem.id}">
                                            <p class="recii--organizador">${roleItem.filtros.organizador}</p>
                                        </a>
                                        <div class="role--card-item--infos-detalhes--titulos">
                                            <p><span style="font-weight: 600;">Endereço:</span></p>
                                            <p><span style="font-weight: 600;">Entrada:</span></p>
                                            <p><span style="font-weight: 600;">Data:</span></p>
                                            <p><span style="font-weight: 600;">Avaliação:</span></p>
                                        </div>
                                        <div class="role--card-item--infos-detalhes--descricao">
                                            <p><span style="font-weight: 200;">${roleItem.endereco.rua}, ${roleItem.endereco.numero} - ${roleItem.endereco.bairro}, ${roleItem.endereco.cidade}/${roleItem.endereco.estado}</span></p>
                                            <p><span style="font-weight: 200;">R$ ${roleItem.filtros.preco}</span></p>
                                            <p><span style="font-weight: 200;">${roleItem.data.dia}/${roleItem.data.mes}/${roleItem.data.ano}</span></p>
                                            <p><span style="font-weight: 200; color: var(--amarelo-marca);">${roleItem.avaliacao}</span></p>
                                        </div>
                                    </div>
                                    <div class="role--card-item--botao-detalhes">
                                        <a href="evento.html?id=${roleItem.id}"><button>Ver Detalhes</button></a>
                                    </div>
                                    <div class="role--card-item--botao-favoritar">
                                        <button id="btnDivFavoritar${[i]}" onclick="incluirFavorito(${[i]})"><i class="fa-regular fa-heart fa-2xl"></i></button>
                                    </div>
                                </div>`;
                    }
                }
            } else {

            str += `<div class="role--card-item">
                        <div class="role--card-item--imagem">
                            <a href="evento.html?id=${roleItem.id}"><img src="${roleItem.imagens.capa}" alt="Foto do rolê"></a>
                        </div>
                        <div class="role--card-item--infos">
                            <a href="evento.html?id=${roleItem.id}">
                                <h3>${roleItem.nome}</h3>
                            </a>
                            <a href="evento.html?id=${roleItem.id}">
                                <p class="recii--organizador">${roleItem.filtros.organizador}</p>
                            </a>
                            <div class="role--card-item--infos-detalhes--titulos">
                                <p><span style="font-weight: 600;">Endereço:</span></p>
                                <p><span style="font-weight: 600;">Entrada:</span></p>
                                <p><span style="font-weight: 600;">Data:</span></p>
                                <p><span style="font-weight: 600;">Avaliação:</span></p>
                            </div>
                            <div class="role--card-item--infos-detalhes--descricao">
                                <p><span style="font-weight: 200;">${roleItem.endereco.rua}, ${roleItem.endereco.numero} - ${roleItem.endereco.bairro}, ${roleItem.endereco.cidade}/${roleItem.endereco.estado}</span></p>
                                <p><span style="font-weight: 200;">R$ ${roleItem.filtros.preco}</span></p>
                                <p><span style="font-weight: 200;">${roleItem.data.dia}/${roleItem.data.mes}/${roleItem.data.ano}</span></p>
                                <p><span style="font-weight: 200; color: var(--amarelo-marca);">${roleItem.avaliacao}</span></p>
                            </div>
                        </div>
                        <div class="role--card-item--botao-detalhes">
                            <a href="evento.html?id=${roleItem.id}"><button>Ver Detalhes</button></a>
                        </div>
                        <div class="role--card-item--botao-favoritar">
                            <button id="btnDivFavoritar${[i]}" onclick="incluirFavorito(${[i]})"><i class="fa-regular fa-heart fa-2xl"></i></button>
                        </div>
                    </div>`;
            }
        }
    }

    document.querySelector('#telaRolesGeral').innerHTML = str;

    confereEventosAdicionados()
}

function exibeResultadoPesquisaRoles(nomeRole) {
    let str = '';
    let filter = nomeRole.toUpperCase();
    let objDadosRoles = leituraDadosDbRolesGeral();

    let cont = 0;
    $('#telaNumerosPesquisa').html(`<div class="pesquisa--coluna-roles--titulo-resultados">
                                        <h5>${cont} resultado(s) encontrado(s) para: "${nomeRole}"</h5>
                                    </div>`);
    
    for (let i = 0; i < objDadosRoles.roles.length; i++) {
        let roleItem = objDadosRoles.roles[i];
        txtValue = roleItem.nome;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cont++;
            $('#telaNumerosPesquisa').html(`<div class="pesquisa--coluna-roles--titulo-resultados">
                                                <h5>${cont} resultado(s) encontrado(s) para: <span style="color: var(--amarelo-marca);">"</span><span style="font-weight: 600;">${nomeRole}</span><span style="color: var(--amarelo-marca);">"</span></h5>
                                            </div>`);
            str += `<div class="role--card-item">
                        <div class="role--card-item--imagem">
                            <a href="evento.html?id=${roleItem.id}"><img src="${roleItem.imagens.capa}" alt="Foto do rolê"></a>
                        </div>
                        <div class="role--card-item--infos">
                            <a href="evento.html?id=${roleItem.id}">
                                <h3>${roleItem.nome}</h3>
                            </a>
                            <a href="evento.html?id=${roleItem.id}">
                                <p class="recii--organizador">${roleItem.filtros.organizador}</p>
                            </a>
                            <div class="role--card-item--infos-detalhes--titulos">
                                <p><span style="font-weight: 600;">Endereço:</span></p>
                                <p><span style="font-weight: 600;">Entrada:</span></p>
                                <p><span style="font-weight: 600;">Data:</span></p>
                                <p><span style="font-weight: 600;">Avaliação:</span></p>
                            </div>
                            <div class="role--card-item--infos-detalhes--descricao">
                                <p><span style="font-weight: 200;">${roleItem.endereco.rua}, ${roleItem.endereco.numero} - ${roleItem.endereco.bairro}, ${roleItem.endereco.cidade}/${roleItem.endereco.estado}</span></p>
                                <p><span style="font-weight: 200;">R$ ${roleItem.filtros.preco}</span></p>
                                <p><span style="font-weight: 200;">${roleItem.data.dia}/${roleItem.data.mes}/${roleItem.data.ano}</span></p>
                                <p><span style="font-weight: 200; color: var(--amarelo-marca);">${roleItem.avaliacao}</span></p>
                            </div>
                        </div>
                        <div class="role--card-item--botao-detalhes">
                            <a href="evento.html?id=${roleItem.id}"><button>Ver Detalhes</button></a>
                        </div>
                        <div class="role--card-item--botao-favoritar">
                            <button id="btnDivFavoritar${[i]}" onclick="incluirFavorito(${[i]})"><i class="fa-regular fa-heart fa-2xl"></i></button>
                        </div>
                    </div>`;
        }
    }

    document.querySelector('#telaRolesGeral').innerHTML = str;
}

//
//
//
//
//

// BOTÃO DE ADICIONAR ROLÊ AOS FAVORITOS

function favoritaBotao(pos) {
    $('#btnDivFavoritar' + pos).html(`<span style="color: var(--vermelho-favorito);"><i class="fa-solid fa-heart fa-2xl"></i></span>`);
    $('#btnDivFavoritar' + pos).prop("disabled", true);
}

/* Conferir eventos adicionados */

function confereEventosAdicionados() {

    let objDadosRoles = leituraDadosDbRolesGeral();
    let objDadosFavoritos = leituraDadosDbRolesFavoritos();
    let i;
    let j;

    for (i = 0; i<objDadosRoles.roles.length; i++) {
        for (j=0; j<objDadosFavoritos.roles.length; j++) {
            let roleItem = objDadosRoles.roles[i];
            let favoritoItem = objDadosFavoritos.roles[j];

            if (roleItem.nome == favoritoItem.nome) {
                favoritaBotao(i);
            }
        }
    }
}

function limpaFiltrosRolesGeral() {
    FILTRO_IDADE = "";
    FILTRO_PRECO = "";
    FILTRO_ORGANIZADOR = "";
    FILTRO_CATEGORIA = "";

    exibeRolesGeral();
    confereEventosAdicionados();
}

//
//
//
//
//

// PÁGINA DO EVENTO

function exibePaginaEvento(id) {
    let strNomeEvento = '';
    let strImagensEvento = '';
    let strInfosEvento = '';

    let objDadosRoles = leituraDadosDbRolesGeral();

    for (let i = 0; i < objDadosRoles.roles.length; i++) {
        let roleItem = objDadosRoles.roles[i];

        if (roleItem.id == id) {
            strNomeEvento = `${roleItem.nome}`;

            strImagensEvento = `<div class="carousel-item active">
                                    <img src="${roleItem.imagens.foto1}" class="d-block w-100" alt="Foto do evento">
                                </div>
                                <div class="carousel-item">
                                    <img src="${roleItem.imagens.foto2}" class="d-block w-100" alt="Foto do evento">
                                </div>
                                <div class="carousel-item">
                                    <img src="${roleItem.imagens.foto3}" class="d-block w-100" alt="Foto do evento">
                                </div>`;

            strInfosEvento = `<div class="pagina--evento--descricao">
                                    <p>${roleItem.descricao}</p>
                                </div>

                                <div class="pagina--evento--localizacao">
                                    <h6 class="text-center">Como chegar?</h6>
                                    <p class="text-center">${roleItem.endereco.rua}, ${roleItem.endereco.numero} - ${roleItem.endereco.bairro}, ${roleItem.endereco.cidade}</p>
                                    <div class="text-center">
                                        <a
                                            href="https://www.google.com.br/maps/place/${roleItem.endereco.rua}, ${roleItem.endereco.numero} - ${roleItem.endereco.bairro}, ${roleItem.endereco.cidade} - ${roleItem.endereco.estado}"><button
                                                type="button" class="btn btn-warning"><i
                                                    class="fa-solid fa-map-location-dot"></i>Ver no Mapa</button></a>
                                    </div>
                                </div>

                                <div class="pagina--evento--contatos">
                                    <h6 class="text-center">Contatos:</h6>
                                    <div class="pagina--evento--contatos--principais">
                                        <p><i class="fa-solid fa-phone"></i>(31) ${roleItem.contatos.telefone}</p>
                                        <p><i class="fa-solid fa-envelope"></i>${roleItem.contatos.email}</p>
                                    </div>

                                    <div class="pagina--evento--contatos--sociais">
                                        <p><a href="https://${roleItem.contatos.instagram}"><i class="fa-brands fa-instagram fa-xl"></i></a></p>
                                        <p><a href="https://${roleItem.contatos.facebook}"><i
                                                    class="fa-brands fa-square-facebook fa-xl"></i></a></p>
                                    </div>
                                </div>
                                
                                <div class="pagina--evento--confirmacao">
                                    <h6 class="text-center">Você vai comparecer?</h6>
                                    <div class="pagina--evento--confirmacao--usuarios" id="feedConfirmados">
                                        
                                    </div>

                                    <button onclick="incluirConfirmacaoEvento();" id="btn_ConfirmaPresenca"><i class="fa-solid fa-thumbs-up fa-lg"></i></button>
                                </div>`;
        }
    }

    document.getElementById('evt_NomeEvento').innerHTML = strNomeEvento;
    document.getElementById('evt_ImagensEvento').innerHTML = strImagensEvento;
    document.getElementById('evt_InfosEvento').innerHTML = strInfosEvento;
}

//
//

function leituraDadosDbComentariosRole() {
    let strDados = localStorage.getItem('dbComtRoles');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            comentarios: [
                {
                    user: "Cayo Neves",
                    foto: "https://xsgames.co/randomusers/avatar.php?g=pixel",
                    post: "O rolê tá excelente!",
                    likes: 0
                }, 
                {
                    user: "Ana Montanari",
                    foto: "https://xsgames.co/randomusers/avatar.php?g=pixel",
                    post: "Se tiver guarda chuva, pode trazer. Céu tá escurão.",
                    likes: 0
                }, 
                {
                    user: "Marcelo Victor",
                    foto: "https://xsgames.co/randomusers/avatar.php?g=pixel",
                    post: "Não estão deixando menor de idade entrar. Tive que voltar.",
                    likes: 0
                }
            ]
        };
    }

    return objDados;
}

function salvaDadosDbComentariosRole(dados) {
    localStorage.setItem('dbComtRoles', JSON.stringify(dados));
}

function incluirComentarioRole(comentario) {
    // Ler os dados do localStorage
    let objDados = leituraDadosDbComentariosRole();

    // Incluir um novo comentário do evento
    let novoCmtRole = {
        user: usuarioCorrente.nome + " " + usuarioCorrente.sobrenome,
        foto: usuarioCorrente.foto,
        post: comentario,
        likes: 0
    };

    objDados.comentarios.push(novoCmtRole);

    // Salvar os dados no localStorage novamente
    salvaDadosDbComentariosRole(objDados);

    exibirComentariosRole();

    document.getElementById("cmt_evento").value = "";

    setButtonDisabledState();
}

function exibirComentariosRole() {
    let str = '';
    let numCmt = 0;

    let objDadosCmtRoles = leituraDadosDbComentariosRole();

    for (let i = (objDadosCmtRoles.comentarios.length - 1); i>=0; i--) {
        let cmtRoleItem = objDadosCmtRoles.comentarios[i];

        numCmt++;

        str += `<div class="pagina--evento--comentarios--posts--item">
                    <div class="pagina--evento--comentarios--posts--item--foto">
                        <img src="${cmtRoleItem.foto}" alt="Foto de perfil">
                    </div>
                    <div class="pagina--evento--comentarios--posts--item--infos">
                        <h6>${cmtRoleItem.user}</h6>
                        <p>${cmtRoleItem.post}</p>
                        <p><i class="fa-regular fa-heart"></i>${cmtRoleItem.likes}</p>
                    </div>
                </div>`;
    }

    document.getElementById('feedCmtRoles').innerHTML = str;
    document.getElementById('numCmtRoles').innerHTML = numCmt;
}

//
//

function leituraDadosConfirmacaoEvento() {
    let strDados = localStorage.getItem('dbConfPresenca');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            confirmados: []
        };
    }

    return objDados;
}

function salvaDadosConfirmacaoEvento(dados) {
    localStorage.setItem('dbConfPresenca', JSON.stringify(dados));
}

function incluirConfirmacaoEvento() {
    // Ler os dados do localStorage
    let objDados = leituraDadosConfirmacaoEvento();

    // Incluir um novo comentário do evento
    let novoConfirmado = {
        user: usuarioCorrente.nome + " " + usuarioCorrente.sobrenome,
        foto: usuarioCorrente.foto
    };

    objDados.confirmados.push(novoConfirmado);

    // Salvar os dados no localStorage novamente
    salvaDadosConfirmacaoEvento(objDados);

    // Atualizar exibição
    exibirConfirmacaoEvento();
}

function exibirConfirmacaoEvento() {
    let str = '';

    let objDadosConf = leituraDadosConfirmacaoEvento();

    for (let i = 0; i < objDadosConf.confirmados.length; i++) {
        let itemConf = objDadosConf.confirmados[i];
        
        str += `<img src="${itemConf.foto}" alt="Foto de perfil">`;
        
        if (objDadosConf.confirmados[i].user == (usuarioCorrente.nome + " " + usuarioCorrente.sobrenome)) {
            document.getElementById('btn_ConfirmaPresenca').style.display = "none";
        }
    }
    
    document.getElementById('feedConfirmados').innerHTML = str;

}

//
//
//
//
//

// PÁGINA DO USUÁRIO

function leituraDadosDbComentariosPerfil() {
    let strDados = localStorage.getItem('dbComtPerfil');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            comentarios: []
        };
    }

    return objDados;
}

function salvaDadosDbComentariosPerfil(dados) {
    localStorage.setItem('dbComtPerfil', JSON.stringify(dados));
}

function incluirComentarioPerfil(comentario) {
    // Ler os dados do localStorage
    let objDados = leituraDadosDbComentariosPerfil();

    // Incluir um novo comentário do evento
    let novoCmtRole = {
        user: usuarioCorrente.nome + " " + usuarioCorrente.sobrenome,
        foto: usuarioCorrente.foto,
        post: comentario,
        likes: 0
    };

    objDados.comentarios.push(novoCmtRole);

    // Salvar os dados no localStorage novamente
    salvaDadosDbComentariosPerfil(objDados);

    exibirComentariosPerfil();

    document.getElementById("cmt_perfil").value = "";

    setButtonDisabledState();
}

function exibirComentariosPerfil() {
    let str = '';

    let objDadosCmtRoles = leituraDadosDbComentariosPerfil();

    for (let i = (objDadosCmtRoles.comentarios.length - 1); i>=0; i--) {
        let cmtRoleItem = objDadosCmtRoles.comentarios[i];

        str += `<div class="pagina--evento--comentarios--posts--item">
                    <div class="pagina--evento--comentarios--posts--item--foto">
                        <img src="${cmtRoleItem.foto}" alt="Foto de perfil">
                    </div>
                    <div class="pagina--evento--comentarios--posts--item--infos">
                        <h6>${cmtRoleItem.user}</h6>
                        <p>${cmtRoleItem.post}</p>
                        <p><i class="fa-regular fa-heart"></i>${cmtRoleItem.likes}</p>
                    </div>
                </div>`;
    }

    document.getElementById('feedCmtPerfil').innerHTML = str;
}

//
//
//
//
//

// PÁGINA DO PERFIL

function exibePerfilLogado() {
    let strFotoPerfil = '';
    let strNomeCidade = '';
    let strNumAmigos = 0;
    let strNumFavoritos = 0;
    let strRolesFavoritos = '';

    let objDadosFavoritos = leituraDadosDbRolesFavoritos();
    let objDadosAmigos = leituraDadosDbMelhoresAmigos();

    strFotoPerfil = `<img src="${usuarioCorrente.foto}" alt="Foto de perfil">`;

    strNomeCidade = `<h3>${usuarioCorrente.nome + " " + usuarioCorrente.sobrenome}</h3>
                        <p>${usuarioCorrente.cidade}</p>`;

    for (let i = 0; i < objDadosFavoritos.roles.length; i++) {
        let itemFavorito = objDadosFavoritos.roles[i];

        strNumFavoritos++;

        strRolesFavoritos += `<div class="col-3 role-favorito--card">
                                    <div class="role-favorito--card--item">
                                        <div class="role-favorito--card--item--imagem">
                                            <img src="${itemFavorito.imagens.capa}" alt="Foto do evento">
                                            <button onclick="removeRoleFavorito(${[i]});"><i class="fa-solid fa-circle-xmark fa-lg"></i></button>
                                        </div>
                                        <div class="role-favorito--card--item--nome text-center">
                                            <h6>${itemFavorito.nome}</h6>
                                            <p>${itemFavorito.filtros.categoria}</p>
                                        </div>
                                    </div>
                                </div>`;
    }

    for (let j = 0; j < objDadosAmigos.users.length; j++) {
        strNumAmigos++;
    }

    document.getElementById('perfilFotoUsuario').innerHTML = strFotoPerfil;
    document.getElementById('perfilNomeCidade').innerHTML = strNomeCidade;
    document.getElementById('perfilNumAmigos').innerHTML = strNumAmigos;
    document.getElementById('perfilNumRoles').innerHTML = strNumFavoritos;
    document.getElementById('feedPerfilFavoritos').innerHTML = strRolesFavoritos;
}

function removeRoleFavorito(pos) {
    let objDados = leituraDadosDbRolesFavoritos();

    objDados.roles.splice(pos, 1);

    // Salvar os dados no localStorage novamente
    salvaDadosDbRolesFavoritos(objDados);

    // Atualiza
    exibePerfilLogado();
}

//
//
//
//
//

// PÁGINA INICIAL

function exibePaginaInicialSite() {
    let strDestaques = '';
    let strFestas = '';
    let strGastronomia = '';
    let strEsportes = '';

    let objDados = leituraDadosDbRolesGeral();

    for (let i = 0; i < 3; i++) {

        let itemDestaque = objDados.roles[i];

        strDestaques += `<div class="col-4 destaques--card">
                            <div class="destaques--card--item">
                                <div class="destaques--card--item--imagem">
                                    <a href="evento.html?id=${itemDestaque.id}">
                                    <img src="${itemDestaque.imagens.capa}" alt="Foto do evento">
                                    <div class="destaques--card--item--nome text-center">
                                        <h6>${itemDestaque.nome}</h6>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>`;
    }

    for (let i = 0, j = 3; i < objDados.roles.length, j > 0; i++) {

        let itemFesta = objDados.roles[i];

        if (itemFesta.filtros.categoria == "Festas e Shows") {
            strFestas += `<div class="col-4 destaques--card">
                                <div class="destaques--card--item">
                                    <div class="destaques--card--item--imagem">
                                        <a href="evento.html?id=${itemFesta.id}">
                                        <img src="${itemFesta.imagens.capa}" alt="Foto do evento">
                                        <div class="destaques--card--item--nome text-center">
                                            <h6>${itemFesta.nome}</h6>
                                        </div>
                                        </a>
                                    </div>
                                </div>
                            </div>`;
            j--;
        }
    }
    
    for (let i = 0, j = 3; i < objDados.roles.length, j > 0; i++) {

        let itemGastronomia = objDados.roles[i];

        if (itemGastronomia.filtros.categoria == "Gastronomia") {
            strGastronomia += `<div class="col-4 destaques--card">
                                <div class="destaques--card--item">
                                    <div class="destaques--card--item--imagem">
                                        <a href="evento.html?id=${itemGastronomia.id}">
                                        <img src="${itemGastronomia.imagens.capa}" alt="Foto do evento">
                                        <div class="destaques--card--item--nome text-center">
                                            <h6>${itemGastronomia.nome}</h6>
                                        </div>
                                        </a>
                                    </div>
                                </div>
                            </div>`;
            j--;
        }
    }

    for (let i = 0; i < objDados.roles.length; i++) {

        let itemEsportes = objDados.roles[i];

        if (itemEsportes.filtros.categoria == 'Esportes') {
            strEsportes += `<div class="col-4 destaques--card">
                                <div class="destaques--card--item">
                                    <div class="destaques--card--item--imagem">
                                        <a href="evento.html?id=${itemEsportes.id}">
                                        <img src="${itemEsportes.imagens.capa}" alt="Foto do evento">
                                        <div class="destaques--card--item--nome text-center">
                                            <h6>${itemEsportes.nome}</h6>
                                        </div>
                                        </a>
                                    </div>
                                </div>
                            </div>`;
        }
    }
    
    document.getElementById('feedDestaquesInicial').innerHTML = strDestaques;
    document.getElementById('feedCategoriaFestas').innerHTML = strFestas;
    document.getElementById('feedCategoriaGastronomia').innerHTML = strGastronomia;
    document.getElementById('feedCategoriaEsportes').innerHTML = strEsportes;
}