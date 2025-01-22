// Fichier de configuration, utile pour importer et utiliser
// les variables d'environnement dans n'importe quel module / fichier
export const config = {
  NODE_ENV: process.env.NODE_ENV || "development", // Définir le mode de l'application
  isProduction: process.env.NODE_ENV === "production", // Définir si l'application est en production, e.g. déployée sur Render
  PORT: process.env.PORT || 3030, // Définir le port
  HOST: process.env.HOST || "127.0.0.1", // Définir le host
};
