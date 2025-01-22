// Importer le modèle User
import User from "../models/User.js";

// Importer Bcrypt pour hasher le mot de passe et le comparer avec le mot de passe stocké dans la base de données
import bcrypt from "bcrypt";

// Importer le module JsonWebToken
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "2d" });
};

// Fonction pour enregistrer un utilisateur
export const register = async (req, res) => {
  // Récupérer les données de l'utilisateur
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        error: "Tous les champs doivent être remplis",
      });
    }

    // Générer un salt, un sel est un mot de passe aléatoire qui est ajouté au mot de passe pour le hasher
    const salt = await bcrypt.genSalt(10);

    // Hasher le mot de passe
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        error: "Le mot de passe doit contenir au moins 8 caractères",
      });
    }
    const hashedPassword = await bcrypt.hash(password, salt);

    // Créer un utilisateur
    const user = await User.create({
      username,
      email,
      password: hashedPassword, // Stocker le mot de passe hashé dans la base de données
    }); // Créer un utilisateur dans la base de données avec les données de l'utilisateur

    const token = createToken(user._id);

    res
      .status(201)
      .json({ success: true, message: "Utilisateur créé avec succès", token });
  } catch (error) {
    // Gestion des erreurs
    console.error(`Erreur: ${error.message}, ${error.code}`);
    if (error.code === 11000) {
      res.status(400).json({
        success: false,
        error: "Cette adresse email ou ce nom d'utilisateur existe déjà",
      });
    } else res.status(500).json({ success: false, error: error.message });
  }
};

// Fonction pour se connecter
export const login = async (req, res) => {
  const { emailOrUsername, password } = req.body;

  // Vérifier si l'utilisateur existe dans la base de données
  try {
    const user = await User.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });

    if (!emailOrUsername || !password) {
      return res.status(400).json({
        success: false,
        error: "Tous les champs doivent être remplis",
      });
    }

    // Si l'utilisateur n'est pas trouvé, renvoyer une erreur
    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: "Utilisateur non trouvé" });
    }

    // Comparer le mot de passe saisi avec le mot de passe stocké dans la base de données
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ success: false, error: "Identifiants incorrects" });
    }

    const token = createToken(user._id);

    // Si le mot de passe est correct, renvoyer un message de succès
    res
      .status(200)
      .json({ success: true, message: "Connexion réussie", token });
  } catch (error) {
    console.error(`Erreur: ${error.message}`);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Fonction pour se déconnecter
export const logout = async (req, res) => {
  // req.session.destroy();
  res.status(200).json({ success: true, message: "Déconnexion réussie" });
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({
      message: `Erreur lors de la récupération des utilisateurs`,
      error,
    });
  }
}