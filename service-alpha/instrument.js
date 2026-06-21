// src/instrument.js
import * as Sentry from "@sentry/node";

// Sentry se encargará de inicializarse antes que Express gracias al comando --import
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV || "development",
  tracesSampleRate: 1.0,
});

console.log("🚀 Sentry inicializado correctamente de forma nativa (ESM).");