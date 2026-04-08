require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const contactRoutes = require('./routes/contact')

const app = express()
const PORT = process.env.PORT || 5000

// ─── Security & Middleware ───────────────────────────────────────────────────

// Adds security HTTP headers
app.use(helmet())

// CORS — only allow requests from the frontend
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  })
)

// Parse JSON request bodies
app.use(express.json({ limit: '10kb' })) // Limit body size

// HTTP request logger (only in development)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// ─── Routes ─────────────────────────────────────────────────────────────────

app.use('/api/contact', contactRoutes)

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Catch-all for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' })
})

// ─── Global Error Handler ────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message)
  res.status(500).json({ success: false, message: 'Internal server error' })
})

// ─── Start Server ────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`)
  console.log(`📧 Email: ${process.env.EMAIL_USER || 'not configured'}`)
  console.log(`🌍 Env: ${process.env.NODE_ENV || 'development'}\n`)
})
