const express = require("express");
const rateLimit = require("express-rate-limit");
const { sendContact } = require("../controllers/contactController");
const {
  contactValidationRules,
  handleValidationErrors,
} = require("../middleware/validate");

const router = express.Router();

// ✅ Production-safe limiter
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 5, // max 5 requests per IP
  message: {
    success: false,
    message: "Too many requests. Try again after 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// ✅ Apply limiter BEFORE controller
router.post(
  "/",
  contactLimiter,
  contactValidationRules,
  handleValidationErrors,
  sendContact,
);

module.exports = router;
