import {
  apiListPets,
  apiCreatePet,
  apiRemovePet,
} from "../services/externalApi.js";

class Pet {
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

  atualizarObservacoes(novasObs) {
    this.observacoes = novasObs;
  }
}

class PetsService {
  async listPets() {
    const pets = await apiListPets();
    return pets.sort((a, b) => a.nome.localeCompare(b.nome));
  }

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

  async removePet(id) {
    return apiRemovePet(id);
  }
}

const petsService = new PetsService();
export const listPets = (...args) => petsService.listPets(...args);
export const createPet = (...args) => petsService.createPet(...args);
export const removePet = (...args) => petsService.removePet(...args);
export { PetsService, Pet };
