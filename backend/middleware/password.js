// importation du package
const passwordValidator = require("password-validator");

// Creation du schema
const passwordSchema = new passwordValidator();

// Ajout des propriétés
passwordSchema
  .is()
  .min(6)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .not()
  .spaces()
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]);

module.exports = (req, res, next) => {
  const password = req.body.password;
  if (passwordSchema.validate(password)) {
    return next();
  } else {
    return res
      .status(400)
      .json({ error: passwordSchema.validate(password, { list: true }) });
  }
};
