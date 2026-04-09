const express = require("express");
const rateLimit = require("express-rate-limit");
const { sendContact } = require("../controllers/contactController");
const {
  contactValidationRules,
  handleValidationErrors,
} = require("../middleware/validate");

const router = express.Router();

// ✅ Increased limit for testing
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

router.post(
  "/",
  contactLimiter,
  contactValidationRules,
  handleValidationErrors,
  sendContact,
);

module.exports = router;
