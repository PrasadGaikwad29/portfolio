require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Security & Middleware ───────────────────────────────────────────────────

app.use(helmet());

// ✅ CORS (multi-origin support)
const allowedOrigins = [
  "http://localhost:3000",
  "https://portfolio-seven-lyart-74.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

// Parse JSON
app.use(express.json({ limit: "10kb" }));

// Logger (only in dev)
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// ─── Routes ─────────────────────────────────────────────────────────────────

app.use("/api/contact", contactRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ─── Global Error Handler ────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

// ─── Crash Debugging (IMPORTANT for Render) ──────────────────────────────────
process.on("uncaughtException", (err) => {
  console.error("❌ UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("❌ UNHANDLED REJECTION:", err);
});

// ─── Start Server (FIXED) ────────────────────────────────────────────────────
app.listen(PORT, "0.0.0.0", () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
  console.log(`📧 Email: ${process.env.EMAIL_USER || "not configured"}`);
  console.log(`🌍 Env: ${process.env.NODE_ENV || "production"}\n`);
});
