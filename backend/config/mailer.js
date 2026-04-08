const nodemailer = require('nodemailer')

// Create reusable transporter using Gmail
// For production, consider SendGrid or Resend for better deliverability
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use Gmail App Password, not your real password
  },
})

// Verify connection on startup
transporter.verify((error) => {
  if (error) {
    console.error('❌ Nodemailer connection error:', error.message)
  } else {
    console.log('✅ Nodemailer ready to send emails')
  }
})

module.exports = transporter
