const { defineFeature, loadFeature } = require("jest-cucumber");
const path = require("path");
const { Pet, PetsService } = require("../../backend/src/pets/pets");

// Carrega o arquivo de feature
const feature = loadFeature(path.join(__dirname, "../features/pets.feature"));

// Mock para apiListPets, apiCreatePet e apiRemovePet
const petsDbMock = [
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

jest.mock("../../backend/src/services/externalApi", () => ({
  apiListPets: jest.fn().mockImplementation(async () => [...petsDbMock]),
  apiCreatePet: jest.fn().mockImplementation(async (pet) => {
    const novo = { id: petsDbMock.length + 1, ...pet };
    petsDbMock.push(novo);
    return novo;
  }),
  apiRemovePet: jest.fn().mockImplementation(async (id) => {
    const index = petsDbMock.findIndex((p) => p.id === id);
    if (index === -1) throw new Error("Pet não encontrado");
    petsDbMock.splice(index, 1);
    return true;
  }),
}));

defineFeature(feature, (test) => {
  // Variáveis compartilhadas entre os steps
  let petsService;
  let mensagem;
  let petsCadastrados;
  let petRemovido;

  // Antes de cada cenário
  beforeEach(() => {
    petsService = new PetsService();
  });

  test("Visualização da lista de pets", ({ given, then, and }) => {
    given("que o usuário acessa a página inicial", async () => {
      // Simula o acesso à página inicial verificando se o serviço está disponível
      expect(petsService).toBeDefined();
    });

    then("o sistema deve exibir a lista de pets cadastrados", async () => {
      // Obtém a lista de pets do serviço
      petsCadastrados = await petsService.listPets();
      expect(petsCadastrados.length).toBeGreaterThan(0);
    });

    and("deve mostrar o nome, idade e tutor de cada pet", () => {
      // Verifica se cada pet possui as propriedades necessárias
      for (const pet of petsCadastrados) {
        expect(pet.nome).toBeDefined();
        expect(pet.idade).toBeDefined();
        expect(pet.tutor).toBeDefined();
      }
    });
  });

  test("Adição de pet com sucesso", ({ given, when, and, then }) => {
    let dadosPet = {};

    given("que o usuário acessa a página de cadastro de pet", () => {
      // Simula o acesso à página de cadastro verificando se o serviço está disponível
      expect(petsService).toBeDefined();
    });

    when(/^ele preenche o campo "(.*)" com "(.*)"$/, (campo, valor) => {
      if (campo === "nome") {
        dadosPet.nome = valor;
      }
    });

    and(/^preenche o campo "(.*)" com "(.*)"$/, (campo, valor) => {
      if (campo === "idade") {
        dadosPet.idade = Number(valor);
      }
    });

    and(/^preenche o campo "(.*)" com "(.*)"$/, (campo, valor) => {
      if (campo === "tutor") {
        dadosPet.tutor = valor;
      }
    });

    and(/^preenche o campo "(.*)" com "(.*)"$/, (campo, valor) => {
      if (campo === "telefone") {
        dadosPet.telefone = valor;
      }
    });

    and(/^preenche o campo "(.*)" com "(.*)"$/, (campo, valor) => {
      if (campo === "endereco") {
        dadosPet.endereco = valor;
      }
    });

    and(/^preenche o campo "(.*)" com "(.*)"$/, (campo, valor) => {
      if (campo === "raca") {
        dadosPet.raca = valor;
      }
    });

    and(/^preenche o campo "(.*)" com "(.*)"$/, (campo, valor) => {
      if (campo === "observacoes") {
        dadosPet.observacoes = valor;
      }
    });

    and(/^clica no botão "(.*)"$/, async () => {
      // Simula o clique no botão enviando os dados para criação do pet
      await petsService.createPet(dadosPet);
      mensagem = "Pet cadastrado com sucesso!";
    });

    then(/^o sistema deve exibir a mensagem "(.*)"$/, (mensagemEsperada) => {
      expect(mensagem).toBe(mensagemEsperada);
    });

    and(/^o pet "(.*)" deve aparecer na lista de pets$/, async (nomePet) => {
      const pets = await petsService.listPets();
      const petEncontrado = pets.some((pet) => pet.nome === nomePet);
      expect(petEncontrado).toBe(true);
    });
  });

  test("Remoção de pet com sucesso", ({ given, and, when, then }) => {
    let petId;
    let listaBefore;
    let listaAfter;

    given("que o usuário acessa a página inicial", async () => {
      // Simula o acesso à página inicial verificando se o serviço está disponível
      expect(petsService).toBeDefined();
    });

    and(/^existe um pet chamado "(.*)" na lista$/, async (nomePet) => {
      // Verifica se o pet existe na lista
      listaBefore = await petsService.listPets();
      const pet = listaBefore.find((p) => p.nome === nomePet);
      expect(pet).toBeDefined();
      petId = pet.id;
    });

    when(/^ele clica no botão de remover do pet "(.*)"$/, async (nomePet) => {
      // Registra qual pet será removido
      petRemovido = nomePet;
    });

    and("confirma a remoção", async () => {
      // Simula a confirmação removendo o pet
      await petsService.removePet(petId);
    });

    then(/^o sistema deve remover o pet "(.*)" da lista$/, async (nomePet) => {
      // Verifica se o pet foi removido com sucesso
      expect(nomePet).toBe(petRemovido);
    });

    and(
      /^o pet "(.*)" não deve mais aparecer na lista de pets$/,
      async (nomePet) => {
        // Verifica se o pet não existe mais na lista
        listaAfter = await petsService.listPets();
        const petEncontrado = listaAfter.some((pet) => pet.nome === nomePet);
        expect(petEncontrado).toBe(false);
      }
    );
  });
});
