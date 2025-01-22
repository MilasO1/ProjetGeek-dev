import express from "express";

// Créer une instance de routeur Express
const router = express.Router();

import { createAd, getAllAds, deleteAd } from "../controllers/adController.js";

// ========== Gestion des Annonces ==========

// Obtenir la liste des annonces (avec filtre par type)
router.get("/", getAllAds);

// Créer une annonce (type: vente ou don)
router.post("/", createAd);

// TODO: Afficher les détails d'une annonce
//router.get("/ads/:id", getAdById);

// Supprimer une annonce (avec l'id de l'annonce)
router.delete("/:id", deleteAd);

export default router;
