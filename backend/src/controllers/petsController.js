/**
 * Controller para gerenciar as operações relacionadas a pets
 *
 * Este controller é responsável por receber as requisições HTTP,
 * processar os dados, interagir com o serviço de pets e
 * retornar as respostas apropriadas.
 */

const { listPets, createPet, removePet } = require("../pets/pets");

/**
 * Lista todos os pets cadastrados
 *
 * @route GET /api/pets
 * @param {Object} req - Objeto de requisição Express
 * @param {Object} res - Objeto de resposta Express
 * @param {Function} next - Função para passar controle ao próximo middleware
 * @returns {Object} Lista de pets em formato JSON
 */
const getPets = async (req, res, next) => {
  try {
    const pets = await listPets();
    res.json(pets);
  } catch (err) {
    next(err);
  }
};

/**
 * Adiciona um novo pet ao sistema
 *
 * @route POST /api/pets
 * @param {Object} req - Objeto de requisição Express contendo os dados do pet no corpo
 * @param {Object} res - Objeto de resposta Express
 * @param {Function} next - Função para passar controle ao próximo middleware
 * @returns {Object} Pet criado com seu ID em formato JSON
 */
const addPet = async (req, res, next) => {
  try {
    // Recebe todos os campos enviados pelo frontend
    const novoPet = await createPet(req.body);
    res.status(201).json(novoPet);
  } catch (err) {
    next(err);
  }
};

/**
 * Remove um pet pelo ID
 *
 * @route DELETE /api/pets/:id
 * @param {Object} req - Objeto de requisição Express contendo o ID do pet a remover
 * @param {Object} res - Objeto de resposta Express
 * @param {Function} next - Função para passar controle ao próximo middleware
 * @returns {Object} Mensagem de confirmação da remoção
 */
const deletePet = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }
    await removePet(id);
    res.status(200).json({ message: "Pet removido com sucesso" });
  } catch (err) {
    if (err.message === "Pet não encontrado") {
      return res.status(404).json({ error: err.message });
    }
    next(err);
  }
};

module.exports = {
  getPets,
  addPet,
  deletePet,
};
