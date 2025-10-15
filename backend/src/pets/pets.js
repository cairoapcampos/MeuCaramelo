/**
 * Módulo de gerenciamento de pets
 *
 * Este módulo contém as classes e funções para manipulação de pets no sistema,
 * incluindo validação de dados, criação, listagem e remoção de pets.
 */

const {
  apiListPets,
  apiCreatePet,
  apiRemovePet,
} = require("../services/externalApi");

/**
 * Classe que representa um pet no sistema
 *
 * Responsável por validar e armazenar dados de um pet
 */
class Pet {
  /**
   * Cria uma nova instância de Pet com validação de dados
   *
   * @param {string} nome - Nome do pet (obrigatório)
   * @param {number} idade - Idade do pet em anos (obrigatório, não negativa)
   * @param {string} tutor - Nome do tutor/dono do pet
   * @param {string} telefone - Telefone de contato do tutor
   * @param {string} endereco - Endereço do tutor
   * @param {string} raca - Raça do pet
   * @param {string} observacoes - Informações adicionais sobre o pet
   */
  constructor(nome, idade, tutor, telefone, endereco, raca, observacoes) {
    if (!nome || typeof nome !== "string") {
      throw new Error("Nome inválido");
    }
    if (typeof idade !== "number" || idade < 0) {
      throw new Error("Idade inválida");
    }
    this.nome = nome;
    this.idade = idade;
    this.tutor = tutor;
    this.telefone = telefone;
    this.endereco = endereco;
    this.raca = raca;
    this.observacoes = observacoes;
  }

  /**
   * Atualiza as observações do pet
   *
   * @param {string} novasObs - Novas observações para o pet (pode ser string vazia ou null)
   */
  atualizarObservacoes(novasObs) {
    this.observacoes = novasObs;
  }
}

/**
 * Serviço para gerenciar operações relacionadas a pets
 *
 * Implementa os métodos de negócio para listar, criar e remover pets,
 * fazendo a ponte entre a API e o modelo de dados.
 */
class PetsService {
  /**
   * Lista todos os pets cadastrados, ordenados por nome
   *
   * @returns {Promise<Array>} Lista de pets ordenada alfabeticamente
   */
  async listPets() {
    const pets = await apiListPets();
    return pets.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  /**
   * Cria um novo pet após validar seus dados
   *
   * @param {Object} pet - Objeto com os dados do pet a ser criado
   * @returns {Promise<Object>} Pet criado com ID gerado
   * @throws {Error} Se os dados do pet forem inválidos
   */
  async createPet(pet) {
    // Cria uma instância de Pet para validar os dados
    const novoPet = new Pet(
      pet.nome,
      Number(pet.idade),
      pet.tutor,
      pet.telefone,
      pet.endereco,
      pet.raca,
      pet.observacoes
    );
    return apiCreatePet({ ...novoPet });
  }

  /**
   * Remove um pet pelo seu ID
   *
   * @param {number} id - ID do pet a ser removido
   * @returns {Promise<boolean>} true se o pet foi removido com sucesso
   * @throws {Error} Se o pet não for encontrado
   */
  async removePet(id) {
    return apiRemovePet(id);
  }
}

// Instancia um único serviço (padrão Singleton) para ser compartilhado
const petsService = new PetsService();

/**
 * Funções auxiliares que encapsulam as chamadas ao serviço
 * Facilitam o uso das funcionalidades sem precisar instanciar o serviço
 */
const listPets = (...args) => petsService.listPets(...args);
const createPet = (...args) => petsService.createPet(...args);
const removePet = (...args) => petsService.removePet(...args);

module.exports = {
  PetsService,
  Pet,
  listPets,
  createPet,
  removePet,
};
