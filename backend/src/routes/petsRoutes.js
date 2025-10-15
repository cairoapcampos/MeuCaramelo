/**
 * Definição das rotas relacionadas a pets
 *
 * Este módulo configura todas as rotas disponíveis para operações com pets,
 * seguindo o padrão REST para os endpoints da API.
 */

const { Router } = require("express");
const { getPets, addPet, deletePet } = require("../controllers/petsController");

const router = Router(); // Cria um novo roteador Express
router.get("/", getPets);
router.post("/", addPet);
router.delete("/:id", deletePet);

module.exports = router;
