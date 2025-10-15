/**
 * Arquivo de inicialização do servidor
 *
 * Responsável por iniciar a aplicação Express na porta definida,
 * separando a configuração do servidor (app.js) da sua inicialização.
 * Este padrão facilita a execução de testes sem iniciar o servidor.
 */

const app = require("./app");
const PORT = process.env.PORT || 4000;

// Inicializa o servidor HTTP
app.listen(PORT, () =>
  console.log(`Backend rodando em http://localhost:${PORT}`)
);
