// Importer le module Express
import express from "express";

// Importer le module DotEnv
import dotenv from "dotenv";
// Lancer le module DotEnv pour pouvoir utiliser les variables d'environnement
dotenv.config();

// Importer les routes
import authRoutes from "./routes/authRoutes.js";
import adRoutes from "./routes/adRoutes.js";

// Créer l'application Express
const app = express();

// Utiliser le middleware express.json() pour parser les requêtes JSON
app.use(express.json());

// Utiliser le middleware pour traiter query d'URL
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Utiliser les routes avec un prefixe /api/users pour les routes d'authentification
app.use("/api/users", authRoutes);

// Utiliser les routes avec un prefixe /api/ads pour les routes d'annonces
app.use("/api/ads", adRoutes);

// Exporter l'application
export default app;
