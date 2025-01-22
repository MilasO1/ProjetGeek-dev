// Importation de Mongoose
import mongoose from "mongoose";

// Définir le schéma de l'utilisateur
const userSchema = new mongoose.Schema({
  username: {
    type: String, // Type de la propriété
    required: true, // Propriété obligatoire
    unique: true, // Propriété unique
    trim: true, // Propriété de type String qui supprime les espaces en début et en fin de la chaîne
    minlength: 3, // Propriété de type Number qui définit la longueur minimale de la chaîne
    maxlength: 30, // Propriété de type Number qui définit la longueur maximale de la chaîne
  },
  email: {
    type: String, // Type de la propriété
    required: true, // Propriété obligatoire
    unique: true, // Propriété unique
    trim: true, // Propriété de type String qui supprime les espaces en début et en fin de la chaîne
    lowercase: true, // Propriété de type Boolean qui définit si la chaîne doit être en minuscule
    match: [/^\S+@\S+\.\S+$/, "Veuillez utiliser un email valide"], // Propriété de type RegExp qui définit le format de l'email
  },
  password: {
    type: String, // Type de la propriété
    required: true, // Propriété obligatoire
    minlength: 8, // Propriété de type Number qui définit la longueur minimale de la chaîne
  },
});

// Créer un modèle (document MongoDB) à partir du schéma userSchema
/**
 * @param {String}  - Nom du modèle, sera transformé en minuscules et au pluriel par Mongoose
 * @param {Object}  - Schema utilisé pour le modèle
 */
const User = mongoose.model("User", userSchema);

// Exporter le modèle User
export default User;
