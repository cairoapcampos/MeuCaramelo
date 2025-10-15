const axios = require("axios");
const SearchDogs = require("../src/searchDogs/searchDogs");

// Mock completo do axios para CommonJS
jest.mock("axios");

describe("SearchDogs integração com API externa", () => {
  let searchDogs;
  let axiosGetSpy;

  beforeEach(() => {
    // Limpa todos os mocks antes de cada teste
    jest.clearAllMocks();
    // Cria um spy no método get do axios
    axiosGetSpy = jest.spyOn(axios, "get");
    searchDogs = new SearchDogs("FAKE_API_KEY");
  });

  afterEach(() => {
    // Restaura o comportamento original após cada teste
    axiosGetSpy.mockRestore();
  });

  it("deve retornar dados da raça ao buscar com nome válido", async () => {
    const mockData = [{ name: "Poodle", origin: "France" }];

    // Configurar o spy do axios.get
    axiosGetSpy.mockResolvedValueOnce({ data: mockData });

    const resultado = await searchDogs.buscarRaca("poodle");
    expect(resultado).toEqual(mockData[0]);
    expect(axiosGetSpy).toHaveBeenCalledWith(
      expect.stringContaining("poodle"),
      expect.objectContaining({ headers: { "X-Api-Key": "FAKE_API_KEY" } })
    );
  });

  it("deve lançar erro se nome for inválido", async () => {
    await expect(searchDogs.buscarRaca("")).rejects.toThrow(
      "Nome da raça inválido"
    );
  });

  it("deve lançar erro se a raça não for encontrada", async () => {
    // Configurar o spy para retornar uma lista vazia
    axiosGetSpy.mockResolvedValueOnce({ data: [] });

    await expect(searchDogs.buscarRaca("raçainexistente")).rejects.toThrow(
      "Raça não encontrada"
    );
  });

  it("deve fazer requisição sem chave de API quando não fornecida", async () => {
    // Cria instância sem API key
    const searchDogsSemKey = new SearchDogs();
    const mockData = [{ name: "Poodle", origin: "France" }];

    // Configurar o spy para retornar dados
    axiosGetSpy.mockResolvedValueOnce({ data: mockData });

    const resultado = await searchDogsSemKey.buscarRaca("poodle");
    expect(resultado).toEqual(mockData[0]);
    // Verifica se a chamada foi feita sem o header de API Key
    expect(axiosGetSpy).toHaveBeenCalledWith(
      expect.stringContaining("poodle"),
      {} // Sem headers
    );
  });
});
