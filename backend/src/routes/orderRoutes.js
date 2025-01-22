// ========== Gestion des Commandes ==========

// Finaliser une commande
router.post("/api/orders", (req, res) => {
  res.send("Finaliser une commande");
});

// Lister les commandes d'un utilisateur
router.get("/api/orders/:userId", (req, res) => {
  res.send("Lister les commandes d'un utilisateur");
});
