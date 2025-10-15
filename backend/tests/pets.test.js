const { listPets, createPet, removePet } = require("../src/pets/pets");
describe("Funções exportadas diretamente", () => {
  it("listPets deve retornar um array ordenado", async () => {
    const pets = await listPets();
    expect(Array.isArray(pets)).toBe(true);
    if (pets.length > 1) {
      const nomes = pets.map((p) => p.nome);
      const nomesOrdenados = [...nomes].sort();
      expect(nomes).toEqual(nomesOrdenados);
    }
  });

  it("createPet deve criar um pet válido", async () => {
    const novoPet = {
      nome: "Bidu",
      idade: 1,
      tutor: "Teste",
      telefone: "000",
      endereco: "Rua Exportada",
      raca: "Vira-lata",
      observacoes: "Direto",
    };
    const petCriado = await createPet(novoPet);
    expect(petCriado).toMatchObject(novoPet);
    expect(petCriado).toHaveProperty("id");
  });

  it("removePet deve remover um pet existente", async () => {
    const novoPet = await createPet({
      nome: "Rex",
      idade: 2,
      tutor: "Teste",
      telefone: "000",
      endereco: "Rua Exportada",
      raca: "Vira-lata",
      observacoes: "Direto",
    });
    const id = novoPet.id;
    const resultado = await removePet(id);
    expect(resultado).toBe(true);
    const pets = await listPets();
    expect(pets.find((p) => p.id === id)).toBeUndefined();
  });

  it("createPet deve lançar erro se dados forem inválidos", async () => {
    await expect(createPet({})).rejects.toThrow("Nome inválido");
  });
});

const { Pet, PetsService } = require("../src/pets/pets");

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
      await expect(petsService.createPet({})).rejects.toThrow("Nome inválido");
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

describe("Pet", () => {
  it("deve aceitar valores opcionais nulos", () => {
    const pet = new Pet("Bob", 2);
    expect(pet.nome).toBe("Bob");
    expect(pet.idade).toBe(2);
    expect(pet.tutor).toBeUndefined();
    expect(pet.telefone).toBeUndefined();
    expect(pet.endereco).toBeUndefined();
    expect(pet.raca).toBeUndefined();
    expect(pet.observacoes).toBeUndefined();
  });

  it("deve atualizar observações para vazio", () => {
    p.atualizarObservacoes("");
    expect(p.observacoes).toBe("");
  });

  it("deve atualizar observações para null", () => {
    p.atualizarObservacoes(null);
    expect(p.observacoes).toBe(null);
  });
  let p;

  beforeEach(() => {
    p = new Pet("Rex", 3, "João", "123", "Rua X", "Vira-lata", "Saudável");
  });

  afterEach(() => {
    p = null;
  });

  it("deve ser criado com os atributos corretos", () => {
    expect(p.nome).toBe("Rex");
    expect(p.idade).toBe(3);
    expect(p.tutor).toBe("João");
    expect(p.telefone).toBe("123");
    expect(p.endereco).toBe("Rua X");
    expect(p.raca).toBe("Vira-lata");
    expect(p.observacoes).toBe("Saudável");
  });

  it("deve lançar erro se nome for vazio", () => {
    expect(() => new Pet("", 2)).toThrow("Nome inválido");
  });

  it("deve lançar erro se nome não for string", () => {
    expect(() => new Pet(123, 2)).toThrow("Nome inválido");
  });

  it("deve lançar erro se idade for negativa", () => {
    expect(() => new Pet("Rex", -1)).toThrow("Idade inválida");
  });

  it("deve lançar erro se idade não for número", () => {
    expect(() => new Pet("Rex", "dois")).toThrow("Idade inválida");
  });

  it("deve atualizar observações", () => {
    p.atualizarObservacoes("Nova observação");
    expect(p.observacoes).toBe("Nova observação");
  });
});

describe("A lista de pets", () => {
  let pets;

  beforeAll(() => {
    pets = [
      new Pet("Rex", 3, "João", "123", "Rua X", "Vira-lata", "Saudável"),
      new Pet("Bidu", 2, "Maria", "456", "Rua Y", "Poodle", "Alergia"),
      new Pet("Thor", 1, "Pedro", "789", "Rua Z", "Pastor Alemão", "Saudável"),
    ];
  });

  afterAll(() => {
    pets = null;
  });

  it("deve ter 3 pets na lista inicial", () => {
    expect(pets.length).toBe(3);
  });

  it("deve ter Rex como primeiro elemento", () => {
    expect(pets[0].nome).toBe("Rex");
  });

  it("deve conter um pet chamado Thor", () => {
    const nomes = pets.map((p) => p.nome);
    expect(nomes).toContain("Thor");
  });
});
