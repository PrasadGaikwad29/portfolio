const express = require('express')
const rateLimit = require('express-rate-limit')
const { sendContact } = require('../controllers/contactController')
const { contactValidationRules, handleValidationErrors } = require('../middleware/validate')

const router = express.Router()

// Rate limiter: max 5 requests per 15 minutes per IP
// Protects against spam / abuse
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    success: false,
    message: 'Too many messages sent. Please wait 15 minutes and try again.',
  },
  standardHeaders: true,
  legacyHeaders: false,
})

// POST /api/contact
// Apply: rate limiter → validation → controller
router.post(
  '/',
  contactLimiter,
  contactValidationRules,
  handleValidationErrors,
  sendContact
)

module.exports = router
