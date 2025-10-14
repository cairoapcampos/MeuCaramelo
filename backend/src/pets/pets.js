import {
  apiListPets,
  apiCreatePet,
  apiRemovePet,
} from "../services/externalApi.js";

class PetsService {
  async listPets() {
    const pets = await apiListPets();
    return pets.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  async createPet(pet) {
    if (!pet.nome || pet.idade === undefined)
      throw new Error("Dados inválidos");
    return apiCreatePet({ ...pet, idade: Number(pet.idade) });
  }

  async removePet(id) {
    return apiRemovePet(id);
  }
}

const petsService = new PetsService();
export const listPets = (...args) => petsService.listPets(...args);
export const createPet = (...args) => petsService.createPet(...args);
export const removePet = (...args) => petsService.removePet(...args);
export { PetsService };
