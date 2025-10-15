const API_URL = 'http://localhost:4000/api/pets';

export async function getPets() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addPet(pet) {
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pet)
  });
}

export async function removePet(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) {
    try {
      const error = await res.json();
      throw new Error(error.error || 'Erro ao remover o pet');
    } catch (e) {
      throw new Error(`Erro ao remover o pet (${res.status})`);
    }
  }
  
  // Verifica se existe conteúdo para fazer o parse
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return await res.json();
  }
  
  // Se não houver conteúdo JSON, retorna um objeto vazio
  return { message: "Pet removido com sucesso" };
}
