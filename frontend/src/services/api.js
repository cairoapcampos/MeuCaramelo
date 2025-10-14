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
