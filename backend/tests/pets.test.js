import { PetsService } from "../src/pets/pets.js";

describe("PetsService", () => {
  let petsService;

  beforeEach(() => {
    petsService = new PetsService();
  });

  describe("listPets", () => {
    it("deve retornar um array de pets ordenados por nome", async () => {
      const pets = await petsService.listPets();
      expect(Array.isArray(pets)).toBe(true);
      // Se houver pets, verifica se estão ordenados
      if (pets.length > 1) {
        const nomes = pets.map((p) => p.nome);
        const nomesOrdenados = [...nomes].sort();
        expect(nomes).toEqual(nomesOrdenados);
      }
    });
  });

  describe("createPet", () => {
    it("deve criar um novo pet com dados válidos", async () => {
      const novoPet = {
        nome: "TestePet",
        idade: 2,
        tutor: "Tutor Teste",
        telefone: "123456789",
        endereco: "Rua Teste, 123",
        raca: "SRD",
        observacoes: "Nenhuma",
      };
      const petCriado = await petsService.createPet(novoPet);
      expect(petCriado).toMatchObject(novoPet);
      expect(petCriado).toHaveProperty("id");
    });

    it("deve lançar erro se dados forem inválidos", async () => {
      await expect(petsService.createPet({})).rejects.toThrow(
        "Dados inválidos"
      );
    });
  });

  describe("removePet", () => {
    it("deve remover um pet existente pelo id", async () => {
      const novoPet = await petsService.createPet({
        nome: "Remover",
        idade: 1,
        tutor: "Teste",
        telefone: "000",
        endereco: "Rua X",
        raca: "SRD",
        observacoes: "",
      });
      const id = novoPet.id;
      const resultado = await petsService.removePet(id);
      expect(resultado).toBe(true);
      const pets = await petsService.listPets();
      expect(pets.find((p) => p.id === id)).toBeUndefined();
    });

    it("deve lançar erro ao tentar remover um pet inexistente", async () => {
      await expect(petsService.removePet(9999)).rejects.toThrow(
        "Pet não encontrado"
      );
    });
  });
});
