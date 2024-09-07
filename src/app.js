// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
// Chamar a função expressz\
const app = express();
app.use(express.static("public"));
// Criar o middleware para receber os dados no corpo da requisição
app.use(express.json());

// Criar a rota listar
// Endereço para acessar a api através de aplicação externa: http://localhost:8080
app.get("/", (req, res) => {
    // Retornar texto como resposta
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT;
const ALTERNATE_PORT = process.env.ALTERNATE_PORT;

const server = app.listen(PORT, () => {


    console.log(`Servidor rodando em localhost:${PORT}`);
});

server.on('error', (err) => {

    if (err.code === 'EADDRINUSE') {
        console.log(`Porta ${PORT} já está em uso. Tentando na porta alternativa ${ALTERNATE_PORT}...`);

        app.listen(ALTERNATE_PORT, () => {


            console.log(`Servidor iniciado em localhost: ${ALTERNATE_PORT} `);
        });

    } else {
        console.error('Erro ao iniciar o servidor:', err);

    }
});


