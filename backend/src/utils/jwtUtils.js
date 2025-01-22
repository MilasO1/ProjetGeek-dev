// Importer le module jsonwebtoken
import jwt from "jsonwebtoken";

// Fonction pour générer un token JWT
export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};
//👽
// Fonction pour vérifier un token JWT
export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
