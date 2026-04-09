const { body, validationResult } = require("express-validator");

const contactValidationRules = [
  body("name").trim().notEmpty().isLength({ max: 100 }),
  body("email").trim().notEmpty().isEmail().normalizeEmail(),
  body("message").trim().notEmpty().isLength({ min: 10, max: 2000 }),
];

function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: errors.array()[0].msg,
    });
  }
  next();
}

module.exports = { contactValidationRules, handleValidationErrors };
