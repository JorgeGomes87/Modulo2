// server.js

// Importa o Express
const express = require('express');
const app = express();

// Define a porta
const PORT = process.env.PORT || 3000;

// Middleware para entender JSON no corpo das requisições
app.use(express.json());

// Rota inicial (GET /)
app.get('/', (req, res) => {
    res.send('Servidor rodando com sucesso!');
});

// Exemplo de rota POST (recebe dados do cliente)
app.post('/dados', (req, res) => {
    const { nome, idade } = req.body;
    res.send(`Recebido: Nome = ${nome}, Idade = ${idade}`);
});

// Rota para testar 404
app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
