// Importer le modèle Ad
import Ad from "../models/Ad.js";

// Récupérer toutes les annonces, filtré par le type
export const getAllAds = async (req, res) => {
  const { type, category } = req.query; // Récupérer le type et le catégorie de l'annonce du query

  // Récupérer les types de l'annonce dans le model 'Ad'
  const adTypeEnum = Ad.schema.path("type").enumValues;

  // Récupérer les categories de l'annonce dans le model 'Ad'
  const adCategoryEnum = Ad.schema.path("category").enumValues;

  // Vérifier si le type est valide
  if (type && !adTypeEnum.includes(type)) {
    return res
      .status(400)
      .json({ success: false, error: `Type ${type} non valide` });
  }

  // Vérifier si la catégorie est valide
  if (category && !adCategoryEnum.includes(category)) {
    return res
      .status(400)
      .json({ success: false, error: `Categorie ${category} non valide` });
  }

  // Objet vide pour stocker les queries
  const queryHolder = {};

  // Si'l y a un query "type", stocker le dans queryHolder
  if (type) queryHolder.type = type;

  // Si'l y a un query "category", stocker le dans queryHolder
  if (category) queryHolder.category = category;

  try {
    // Trouver les annonces selon les données de queryHolder (i.e. query de l'URL)
    const ads = await Ad.find(queryHolder);

    // Si il n'y a pas d'annonce trouvée
    if (ads.length === 0) {
      return res.status(200).json({
        success: true,
        message: `Aucune annonce de type: '${type}' de la catégorie '${category}' trouvée`,
      });
    }

    // Si il y a une annonce trouvée
    res.status(200).json(ads);
  } catch (error) {
    // Gestion des erreurs
    console.error(`Erreur: ${error.message}, ${error.code}`);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Fonction pour créer une annonce
export const createAd = async (req, res) => {
  // Récupérer les données de l'annonce
  const { title, description, type, price, userId, category } = req.body;

  // Vérifier si les données sont valides
  if (!title || !description || !type || !price || !userId || !category) {
    return res.status(400).json({
      success: false,
      error: "Données invalides",
    });
  }

  try {
    // Créer une annonce dans la base de données avec les données de l'annonce
    const ad = await Ad.create({
      title,
      description,
      type,
      price,
      userId,
      category,
    });

    // Si l'annonce est créée
    res
      .status(201)
      .json({ success: true, message: "Annonce créée avec succès", ad });
  } catch (error) {
    // Gestion des erreurs
    console.error(`Erreur: ${error.message}, ${error.code}`);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Fonction pour supprimer une annonce
export const deleteAd = async (req, res) => {
  try {
    // Récupérer l'identifiant de l'annonce
    const { id } = req.params;

    // Vérifier si l'identifiant est valide
    if (!id) {
      return res
        .status(400)
        .json({ message: "Identifiant de l'annonce manquant" });
    }

    // Supprimer l'annonce de la base de données
    const deletedAd = await Ad.findByIdAndDelete(id);

    // Si l'annonce n'est pas trouvée
    if (!deletedAd) {
      return res.status(404).json({ message: "Annonce non trouvée" });
    }

    // Si l'annonce est trouvée et supprimé
    res.status(200).json(deletedAd);
  } catch (error) {
    console.error(
      `Erreur lors de la suppression de l'annonce (ID: ${req.params.id}): ${error.message}`
    );
    res.status(500).json({
      success: false,
      message: "Erreur interne du serveur",
      error: error.message,
    });
  }
};
