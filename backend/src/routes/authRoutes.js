import express from "express";

// Importer le controller authController
import { register, login, logout, getUsers } from "../controllers/authController.js";

// Créer une instance de routeur Express
const router = express.Router();

import auth from "../middlewares/authMiddleware.js";

export default router; // Exporter le routeur pour l'utiliser dans d'autres fichiers

// Ecouter la route avec le methode GET envoyé de "/" = "/api/users/" TODO: getAllUsers
router.get("/", auth, getUsers);

// ========== Gestion des Utilisateurs ==========

// Inscription / creation d'un compte
router.post("/register", register);

// Se connecter
router.post("/login", login);

// Déconnexion
router.post("/logout", logout);

// ========== Gestion des Dons ========== TODO:

// Lister les objets donnés disponibles
router.get("/api/donations", (req, res) => {
  res.send("Lister les objets donnés disponibles");
});

// Reserver un objet donné
router.post("/api/donations/reserver", (req, res) => {
  res.send("Réerver un objet donné");
});
