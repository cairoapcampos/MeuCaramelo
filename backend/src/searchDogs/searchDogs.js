/**
 * Módulo para busca de informações sobre raças de cachorros
 *
 * Este módulo se integra com a API externa api-ninjas.com para obter
 * dados detalhados sobre diferentes raças de cães.
 */
const axios = require("axios");

/**
 * Classe para interação com API de informações sobre raças de cachorros
 */
class SearchDogs {
  /**
   * Cria uma nova instância do buscador de raças
   *
   * @param {string} apiKey - Chave de API para autenticação com api-ninjas
   */
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.api-ninjas.com/v1/dogs";
  }

  /**
   * Busca informações sobre uma raça específica de cachorro pelo nome
   *
   * @param {string} nome - Nome da raça a ser pesquisada
   * @returns {Promise<Object>} Objeto contendo informações sobre a raça encontrada
   * @throws {Error} Se o nome for inválido ou a raça não for encontrada
   */
  async buscarRaca(nome) {
    if (!nome || typeof nome !== "string") {
      throw new Error("Nome da raça inválido");
    }
    const config = this.apiKey ? { headers: { "X-Api-Key": this.apiKey } } : {};
    const { data } = await axios.get(
      `${this.baseUrl}?name=${encodeURIComponent(nome)}`,
      config
    );
    if (!data || data.length === 0) {
      throw new Error("Raça não encontrada");
    }
    return data[0];
  }
}

module.exports = SearchDogs;
