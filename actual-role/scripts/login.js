//
//
// Disciplina: Trabalho Interdisciplinar - Aplicações Web
// Professor: Rommel Vieira Carneiro (rommelcarneiro@gmail.com)
//
// Código LoginApp utilizado como exemplo para alunos de primeiro período 


// Página inicial de Login
const INDEX_URL = "index.html";
const LOGIN_URL = "login.html";
const ROLES_URL = "roles.html";

// Objeto para o banco de dados de usuários baseado em JSON
var dbUsers = {};

// Objeto para o usuário corrente
var usuarioCorrente = {};

// função para gerar códigos randômicos a serem utilizados como código de usuário
// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}


// Dados de usuários para serem utilizados como carga inicial
const dadosIniciais = {
    users: [
        { "id": generateUUID (), "login": "admin", "senha": "123", "nome": "Administrador do Sistema", "email": "admin@abc.com"},
        { "id": generateUUID (), "login": "user", "senha": "123", "nome": "Usuario Comum", "email": "user@abc.com"},
    ]
};


// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initLoginApp () {
    // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
    var usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse (usuarioCorrenteJSON);
    }
};


// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
function loginUser (login, senha) {

    let objDadosUsuarios = leituraDadosDbUsuarios();
    
    // Verifica todos os itens do banco de dados de usuarios 
    // para localizar o usuário informado no formulario de login
    for (var i = 0; i < objDadosUsuarios.users.length; i++) {
        var usuario = objDadosUsuarios.users[i];
        
        // Se encontrou login, carrega usuário corrente e salva no Session Storage
        if (login == usuario.login && senha == usuario.senha) {
            usuarioCorrente.id = usuario.id;
            usuarioCorrente.nome = usuario.nome;
            usuarioCorrente.sobrenome = usuario.sobrenome;
            usuarioCorrente.login = usuario.login;
            
            usuarioCorrente.rua = usuario.endereco.rua;
            usuarioCorrente.numero = usuario.endereco.numero;
            usuarioCorrente.complemento = usuario.endereco.complemento;
            usuarioCorrente.bairro = usuario.endereco.bairro;
            usuarioCorrente.cidade = usuario.endereco.cidade;
            usuarioCorrente.estado = usuario.endereco.estado;

            usuarioCorrente.biografia = usuario.biografia;
            
            usuarioCorrente.gosto1 = usuario.gostos.gosto1;
            usuarioCorrente.gosto2 = usuario.gostos.gosto2;
            usuarioCorrente.gosto3 = usuario.gostos.gosto3;
            
            usuarioCorrente.idade = usuario.idade;

            usuarioCorrente.carac1 = usuario.caracteristicas.carac1;
            usuarioCorrente.carac2 = usuario.caracteristicas.carac2;
            usuarioCorrente.carac3 = usuario.caracteristicas.carac3;

            usuarioCorrente.instagram = usuario.redesSociais.instagram;
            usuarioCorrente.twitter = usuario.redesSociais.twitter;
            usuarioCorrente.facebook = usuario.redesSociais.facebook;

            usuarioCorrente.telefone = usuario.contatos.telefone;
            usuarioCorrente.email = usuario.contatos.email;
            
            usuarioCorrente.foto = usuario.foto;
            
            // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
            sessionStorage.setItem('usuarioCorrente', JSON.stringify (usuarioCorrente));

            // Retorna true para usuário encontrado
            return true;
        }
    }

    // Se chegou até aqui é por que não encontrou o usuário e retorna falso
    return false;
}

// Apaga os dados do usuário corrente no sessionStorage
function logoutUser () {
    usuarioCorrente = {};
    sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
    window.location = INDEX_URL;
}