const express = require("express");
const router = express.Router();

//les routes pour l'authentification (connexion inscription deconnexion)
const userCtrl = require("../controllers/user");
const password = require("../middleware/password"); // on vérifie la validité du mdp

router.post("/signup", password, userCtrl.signup);
router.post("/login", userCtrl.login);
router.post("/logout", userCtrl.logout);

module.exports = router;
