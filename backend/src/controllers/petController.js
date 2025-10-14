import { listPets, createPet } from "../services/petService.js";

export const getPets = async (req, res, next) => {
  try {
    const pets = await listPets();
    res.json(pets);
  } catch (err) {
    next(err);
  }
};

export const addPet = async (req, res, next) => {
  try {
    // Recebe todos os campos enviados pelo frontend
    const novoPet = await createPet(req.body);
    res.status(201).json(novoPet);
  } catch (err) {
    next(err);
  }
};
