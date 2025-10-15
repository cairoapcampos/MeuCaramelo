/**
 * Serviço de API externa para gerenciamento de pets
 *
 * Este módulo simula uma API externa para persistir dados de pets.
 * Em um ambiente de produção, essas funções se conectariam a um banco de dados real.
 */

/**
 * Remove um pet do banco de dados pelo ID
 *
 * @param {number} id - ID do pet a ser removido
 * @returns {Promise<boolean>} true se o pet foi removido com sucesso
 * @throws {Error} Se o pet não for encontrado
 */
async function apiRemovePet(id) {
  await new Promise((r) => setTimeout(r, 10));
  const index = petsDb.findIndex((p) => p.id === id);
  if (index === -1) throw new Error("Pet não encontrado");
  petsDb.splice(index, 1);
  return true;
}
/**
 * Banco de dados em memória simulando os pets cadastrados
 * Usado apenas para fins de desenvolvimento e teste
 */
const petsDb = [
  {
    id: 1,
    nome: "Bolacha",
    idade: 3,
    tutor: "Maria",
    telefone: "35999999999",
    endereco: "Rua das Flores, 123, Jardim do Lago, Machado/MG",
    raca: "Vira-Lata Caramelo",
    observacoes:
      "Muito brincalhão, adora correr no parque e brincar com outros cães.",
  },
  {
    id: 2,
    nome: "Rabisco",
    idade: 2,
    tutor: "João",
    telefone: "35988888888",
    endereco: "Av. Brasil, 456, Centro, Rio de Janeiro/RJ",
    raca: "Pinscher",
    observacoes: "Adora passear, é muito protetor e late para estranhos.",
  },
];

/**
 * Lista todos os pets cadastrados no banco de dados
 *
 * @returns {Promise<Array>} Cópia da lista de pets
 */
async function apiListPets() {
  await new Promise((r) => setTimeout(r, 10)); // Simula delay de rede
  return [...petsDb]; // Retorna uma cópia para evitar modificações diretas
}

/**
 * Adiciona um novo pet ao banco de dados
 *
 * @param {Object} pet - Dados do pet a ser adicionado
 * @returns {Promise<Object>} Pet criado com ID gerado
 */
async function apiCreatePet(pet) {
  await new Promise((r) => setTimeout(r, 10));
  const novo = { id: petsDb.length + 1, ...pet };
  petsDb.push(novo);
  return novo;
}

module.exports = {
  apiRemovePet,
  apiListPets,
  apiCreatePet,
};
