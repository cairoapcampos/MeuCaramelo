import { Router } from "express";
import { getPets, addPet } from "../controllers/petsController.js";

const router = Router();
router.get("/", getPets);
router.post("/", addPet);
export default router;
