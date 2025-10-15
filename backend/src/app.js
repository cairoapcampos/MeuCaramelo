/**
 * Arquivo principal da aplicação Express
 *
 * Configura o servidor Express com middlewares, rotas e tratamento de erros.
 * Este é o ponto central da API que define como as requisições serão processadas.
 */

const express = require("express");
const petsRoutes = require("./routes/petsRoutes");
const cors = require("cors");

const app = express();
app.use(cors());

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas principais
app.use("/api/pets", petsRoutes);

// Rota raiz (mensagem inicial)
app.get("/", (req, res) => {
  res.status(200).send("🚀 API do Meu Caramelo – Pet Shop está rodando!");
});

// Middleware de tratamento de erros (deve vir por último)
app.use((err, req, res, next) => {
  console.error("Erro interno:", err);
  res.status(500).json({ error: "Erro interno no servidor" });
});

module.exports = app;
