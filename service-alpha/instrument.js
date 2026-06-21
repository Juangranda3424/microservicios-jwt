// src/instrument.js
import * as Sentry from "@sentry/node";
import dotenv from "dotenv";

dotenv.config();

if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV || "development",
    // Control de trazas (1.0 significa capturar el 100% en desarrollo)
    tracesSampleRate: 1.0, 
  });
  console.log("Sentry inicializado correctamente.");
} else {
  console.warn("Sentry DSN no configurado en las variables de entorno.");
}