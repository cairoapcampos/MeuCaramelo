export async function apiRemovePet(id) {
  await new Promise((r) => setTimeout(r, 10));
  const index = petsDb.findIndex((p) => p.id === id);
  if (index === -1) throw new Error("Pet não encontrado");
  petsDb.splice(index, 1);
  return true;
}
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

export async function apiListPets() {
  await new Promise((r) => setTimeout(r, 10));
  return [...petsDb];
}

export async function apiCreatePet(pet) {
  await new Promise((r) => setTimeout(r, 10));
  const novo = { id: petsDb.length + 1, ...pet };
  petsDb.push(novo);
  return novo;
}
