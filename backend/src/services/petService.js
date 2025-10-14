import { apiListPets, apiCreatePet } from "./externalApi.js";

export async function listPets() {
  const pets = await apiListPets();
  return pets.sort((a, b) => a.nome.localeCompare(b.nome));
}

export async function createPet(pet) {
  if (!pet.nome || pet.idade === undefined) throw new Error("Dados inválidos");
  // Garante que idade seja número, mas repassa todos os campos
  return apiCreatePet({ ...pet, idade: Number(pet.idade) });
}
