// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require('express');
// Chamar a função express
const app = express();

// Criar o middleware para receber os dados no corpo da requisição
app.use(express.json());

// Criar a rota listar
// Endereço para acessar a api através de aplicação externa: http://localhost:8080
app.get("/", (req, res) => {
    // Retornar texto como resposta
    res.send("Bem-vindo a nossa API.");
});







app.post("/users", (req, res) => {
    var { name, email } = req.body;
    return res.json({
        name: name,
        email: email
    });

});




app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});