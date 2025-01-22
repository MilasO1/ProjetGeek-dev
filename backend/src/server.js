// Importer l'application Express depuis app.js
import app from "./app.js";

// Importer la configuration de la base de données
import { connectDB } from "./config/database.js";

import { config } from "./config/config.js";

// Fonction asynchrone pour démarrer le serveur
async function startServer() {
  try {
    // Connexion à la database
    await connectDB();

    // Démarrer le serveur
    app.listen(config.PORT, () => {
      // Utiliser localhost si le HOST est 127.0.0.1
      const localHost = config.HOST === "127.0.0.1" ? "localhost" : config.HOST;

      // Vérifier si l'application est en production
      if (config.isProduction) {
        // Si l'application est en production, on affiche seulement le port
        console.log(`Serveur en cours d'exécution sur le port ${config.PORT}`);
      } else {
        // Si l'application est en développement, on affiche l'URL locale
        console.log(`Serveur tourne sur http://${localHost}:${config.PORT}`);
      }
    });
  } catch (error) {
    // Gérer l'échec de la connexion à la base de données et arrêter le processus
    console.error("Le démarrage du serveur a échoué :", error.message);
    process.exit(1);
  }
}

// Démarrer le serveur
startServer();
