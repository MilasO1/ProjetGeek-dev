// Importation de Mongoose
import mongoose from "mongoose";

// Importer les types et les categories de l'annonce
import { TYPES, CATEGORIES } from "../constants/adConstants.js";

// Définir le schéma de l'annonce
const adSchema = new mongoose.Schema({
  title: {
    type: String, // Type de la propriété
    required: true, // Propriété obligatoire
    trim: true, // Propriété de type String qui supprime les espaces en début et en fin de la chaîne
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: TYPES, // Valeurs possibles, viennent de adConstants.js
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  userId: {
    // Le createur de l'annonce
    type: String,
    required: true,
  },
  category: {
    // La catégorie de l'annonce
    type: String,
    enum: CATEGORIES, // Valeurs possibles, viennent de adConstants.js
    required: true,
  },
});

// Créer un modèle (document MongoDB) à partir du schéma adSchema
/**
 * @param {String}  - Nom du modèle, sera transformé en minuscules et au pluriel par Mongoose
 * @param {Object}  - Schema utilisé pour le modèle
 */
const Ad = mongoose.model("Ad", adSchema);

// Exporter le modèle
export default Ad;
