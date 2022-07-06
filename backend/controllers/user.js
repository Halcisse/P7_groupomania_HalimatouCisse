const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

// console.log(process.env.JWT_KEY_TOKEN);

// pour l'inscription POST
exports.signup = (req, res, next) => {
  bcrypt // hachage du mot de passe
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash, // le mot de passe haché est enregistré dans la bdd
        isAdmin: false,
      });

      const token = jwt.sign({ id: user.id }, process.env.JWT_KEY_TOKEN, {
        expiresIn: 86400, // 24 hours
      });

      user
        .save()
        .then(() =>
          res.status(201).json({
            id: user._id,
            email: user.email,
            isAdmin: user.isAdmin,
            token: token,
          })
        )
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

// pour la connexion POST 

exports.login = (req, res) => {
  User.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: "Utilisateur non trouvé." });
      return;
    }
    if (!user) {
      return res.status(404).send({ message: "Utilisateur non trouvé." });
    }
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({ message: "Mot de passe incorrect!" });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_KEY_TOKEN, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({
      id: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
      token: token,
    });
  });
};

//pour la deconnexion (efface la session)
exports.logout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "Vous êtes déconnecté!" });
  } catch (err) {
    this.next(err);
  }
};

// SUPPRIMER UN USER
exports.deleteUser = (req, res, next) => {
  User.findOne({ email: req.body.email })
    // Cherche l'objet dans la bdd
    .then((user) => {
      if (!user || user == null) {
        res
          .status(404)
          .json({ Message: { error_user: "Utilisateur non trouvé !" } });
      }
      if (user.id !== req.auth.userId) {
        res.status(401).json({
          Message: {
            error_auth: "Requete non autorisée par cet utilisateur !",
          },
        });
      } else {
        User.deleteOne({ email: req.body.email })
          .then(() =>
            res.status(200).json({
              Message: {
                user_delete:
                  "Nous vous confirmons la suppression de votre compte!",
              },
            })
          )
          .catch((error) =>
            res.status(500).json({
              Message: {
                error_serveur:
                  "Une erreur inconnue s'est produite, veuillez reessayer plus tard ou contactez votre administrateur",
              },
            })
          );
        // }
        // );
      }
    })
    .catch((error) =>
      res.status(500).json({
        Message: {
          error_serveur:
            " Une erreur inconnue s'est produite, veuillez reessayer plus tard ou contactez votre administrateur",
        },
      })
    );
};


// Pour afficher tous les posts = GET
exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

// Pour afficher un seul post = GET
exports.getOnePost = (req, res, next) => {
  Post.findOne({
    // affiche le post correspondant à l'id
    _id: req.params.id,
  })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};