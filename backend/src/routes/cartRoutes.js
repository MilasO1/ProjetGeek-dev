// ========== Gestion du Panier ==========

// Ajouter un article au panier
router.post("/api/cart", (req, res) => {
  res.send("Ajouter un article au panier");
});

// Afficher le panier d'un utilisateur
router.get("/api/cart/:userId", (req, res) => {
  res.send("Afficher le panier d'un utilisateur");
});

// Supprimer un article du panier
router.delete("/api/cart/:itemId", (req, res) => {
  res.send("Supprimer un article du panier");
});
